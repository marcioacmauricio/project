from time import time, gmtime, strftime
from datetime import timedelta, datetime
import jinja2
from db.db import DB
from hashlib import sha256, md5
import uuid
from db.Entitys import Entitys
from db.models import getModel
from utilities.pretty import pretty
from utilities.Mailer import Mailer
from utilities.Configs import *
from utilities.JwtAuth import JwtAuth
from utilities.Configs import ConfigJwt
import bcrypt
class RegisterHelper(object):
	"""docstring for RegisterHelper"""
	def __init__(self, User):
		self.User = User
		self.DB = DB(User)
		super(RegisterHelper, self).__init__()
	def CreateAuthentication(self, User, Header):
		TimeNow = datetime.now()
		ExpirationAt = TimeNow + timedelta(hours=2)
		Groups = self.DB.getEntity('MasterUserUserGroup')
		Grps = Groups.query(User.get('id'), Columns = [ 'id', 'id_group' ])
		Gr = []
		if len(Grps):
			for i in range(len(Grps)):
				G = Grps[i]
				Gr.append(G.get('id_group').get('label'))
		Authentication = self.DB.getEntity('MasterAuthentication')
		Authentication['id_user'] = User.get('id')
		Authentication['uuid'] = str(uuid.uuid1())
		Authentication['authenticated_at'] = TimeNow.strftime("%Y-%m-%d %H:%M:%S")
		Authentication['update_at'] = TimeNow.strftime("%Y-%m-%d %H:%M:%S")
		Authentication['expiration_at'] = ExpirationAt.strftime("%Y-%m-%d %H:%M:%S")
		Authentication['status_logged'] = 1				
		Authentication['host'] = Header.get('Host')
		Authentication['connection'] = Header.get('Connection')
		Authentication['content_length'] = Header.get('Content-Length')
		Authentication['origin'] = Header.get('Origin')
		Authentication['user_agent'] = Header.get('User-Agent')
		Authentication['content_type'] = Header.get('Content-Type')
		Authentication['accept'] = Header.get('Accept')
		Authentication['referer'] = Header.get('Referer')
		Authentication['accept_encoding'] = Header.get('Accept-Encoding')
		Authentication['accept_language'] = Header.get('Accept-Language')
		Authentication['remote_ip'] = Header.get('RemoteIp')
		Authentication.save()
		Time = int(time())
		if Authentication.Status:
			Usr = {
				"sub": User.get('id'),
				"unm": User.get('first_name'),
				"nck": User.get('nickname'),
				"grp": Gr,
				"iat" : Time,
				"exp": Time + ConfigJwt.get('interval'),
				"jti": Authentication.get('id')
			}
			JA = JwtAuth()
			Bearer = JA.toBearer(Usr)
			Usr['nbf'] = Time + ConfigJwt.get('interval')
			Usr['exp'] = Time + ( ConfigJwt.get('interval') * 2 )

			RefreshToken = JA.toBearer(Usr)
			Authentication['bearer'] = Bearer

			# Authentication['refresh_token'] = RefreshToken
			Authentication.save('id')	
			User['id_authentication'] = Authentication.get('id')
			User.save('id')
			return {
				"Bearer": Bearer,
				"ExpiresIn": ConfigJwt.get('interval'),
				"RefreshToken": RefreshToken,
				"User": Usr
			}
		else: 
			print(Authentication.Errors)
			return {}
	def Authenticate(self, Data, Header):
		Return = {
			"Status": False, 
			"Errors": {
				"Auth": ""
			}, 
			"Items": {}, 
			"Item": {}, 
			"Message": ""
		}
		User = self.DB.getEntity('MasterUser')
		User.load(Keys = ['email'], Values = [Data.get('login')])
		if bool(User.get('id')):
			print(User)
			if bcrypt.checkpw(Data.get('password').encode('utf-8'), User.get('password').encode('utf-8')):
				return self.CreateAuthentication(User, Header)					
		return Return
	def refreshToken(self, Header):
		Return = {
			'Status': False,
			'Errors': {},
			'Item': {},
			"Message": "Token inválido!"
		}	
		if bool(self.User):
			Authentication = self.DB.getEntity('MasterAuthentication')
			Authentication.load( self.User.get('jti') )
			Authentication['renewed'] = True
			Authentication.save('id')
			if not Authentication.Status:
				print(Authentication.Errors)
			elif ( Header.get('User-Agent') == Authentication.get('user_agent') ) and ( Header.get('Connection') == Authentication.get('connection') ) and ( Header.get('Accept-Encoding') == Authentication.get('accept_encoding') ) and ( Header.get('Content-Type') == Authentication.get('content_type') ) and (Authentication.get('expiration_at') > datetime.now()):
				User = self.DB.getEntity('MasterUser')
				User.load(Authentication.get('id_user'))
				print(User)
				Return = {
					'Status': True,
					'Errors': {},
					'Item': self.CreateAuthentication(User, Header),
					"Message": ""
				}
		else: 
			print('token nao válido')

		return Return
	def Exit(self, Data):
		Return = {
			'Status': False,
			'Errors': {},
			'Items': {},
			"Message": ""
		}		
		Authentication = self.DB.getEntity('MasterAuthentication')
		print(Authentication)
		Authentication['id'] = Data.get('jti') 
		Authentication['status_logged'] = 3
		Authentication.save('id')
		if Authentication.Status:
			Return['Status'] = True
		else:
			print(Authentication.Errors)
		return Return
	def Render(self, Message, Data):
		e = jinja2.Environment(extensions=["jinja2.ext.do",])
		try:
			t = e.from_string(Message)
			Return = t.render(Data = Data, bool = bool, pretty = pretty)
		except Exception as e:
			Return = str(e)
		return Return			
	def RegisterUser(self, Data):
		print(pretty(Data))
		Return = {
			'Status': True,
			'Errors': {},
			'Items': {},
			"Message": ""
		}
		User = self.DB.getEntity('MasterUser')
		User.load(Keys = ['email'], Values = [Data.get('email')])
		if bool(User.get('id')):
			Return['Status'] = False
			Return['Errors']['DB'] = 'E-mail informado já se encontra cadastrado!'
			return Return
		User.clearAll()
		User.load(Keys = ['nickname'], Values = [Data.get('nickname')])
		if bool(User.get('id')):
			Return['Status'] = False
			Return['Errors']['DB'] = 'Username informado já se encontra cadastrado!'
			return Return
		User['first_name'] = Data.get('first_name')
		User['middle_names'] = Data.get('middle_names')
		User['last_name'] = Data.get('last_name')
		User['email'] = Data.get('email')
		User['nickname'] = Data.get('nickname')
		User['about_me'] = Data.get('about_me')
		User['state'] = 0
		User['created_by'] = 1
		User['modified_by'] = 1
		hashed = bcrypt.hashpw(Data.get('password').encode('utf-8'), bcrypt.gensalt())
		User['password'] = hashed.decode('utf-8')
		if not User.Status:
			Return['Status'] = False
			Return['Errors'] = User.Errors
			print(User.Errors)
			return Return	
		# User.load(1)	
		# print(User)	
		User.save()
		if not User.Status:
			Return['Status'] = False
			Return['Errors'] = User.Errors
			print(User.Errors)
			return Return			
		hsh = md5()
		hsh.update(str(uuid.uuid1()).encode('utf-8'))	
		UuidConfirm = hsh.hexdigest()

		MailConfirmation = self.DB.getEntity('MasterMailConfirmation')
		MailConfirmation['id_user'] = User.get('id')
		MailConfirmation['token'] = UuidConfirm

		DateTime = gmtime()
		MailConfirmation['created_at'] = strftime("%Y-%m-%d %H:%M:%S", DateTime) 
		td = timedelta(seconds=180)
		NewDate = datetime.now() + td
		MailConfirmation['expire_at'] = NewDate.strftime("%Y-%m-%d %H:%M:%S")

		MailConfirmation.save()
		if not MailConfirmation.Status:
			Return['Status'] = False
			Return['Errors'] = MailConfirmation.Errors
			return Return
			
		Data = {}
		Data.update(User)

		MailTemplate = self.DB.getEntity('MasterMailTemplate')
		MailTemplate.load(1)

		MessageHtml = MailTemplate.get('content')

		Data['Url'] = 'http://localhost:3000/auth/confirm-token/' + UuidConfirm
		Data.update(EnterpriseConfiguration)
		MessageRendered = self.Render(MessageHtml, Data)

		Message = {
			'ToName': User.get('title'),
			'ToEmail': User.get('email'),
			'EmailCc': "",
			'Subject': "Cadastro do Usuário",
			'Content': MessageRendered,
			"Attachment": None
		}

		SendMail = Mailer(**ConfigMail)
		SendMail.Send(**Message)

		return Return
	def ConfirmTokenMail(self, Data):
		Return = {
			"Status": True,
			"Message": "Seu e-mail foi confirmado com sucesso!"
		}

		MailConfirmation = self.DB.getEntity('MasterMailConfirmation')
		MailConfirmation.load(Keys = ['token'], Values = [Data.get('Token')])
		if not MailConfirmation.Status:
			Return = {
				"Status": False,
				"Message": "\n".join(list(MailConfirmation.Errors.values()))
			}
			return Return
		Now = datetime.now()
		if (Now > MailConfirmation.get('expire_at')):			
			Return = {
				"Status": False,
				"Message": "Este token se encontra expirado! Tente recuperar a sua senha."
			}
			return Return

		User = self.DB.getEntity('MasterUser')
		User.load(MailConfirmation.get('id_user'))
		if not User.Status:
			Return = {
				"Status": False,
				"Message": "\n".join(list(User.Errors.values()))
			}
			return Return

		User['state'] = 2
		User.save('id')

		if not User.Status:
			Return = {
				"Status": False,
				"Message": "\n".join(list(User.Errors.values()))
			}
			return Return	

		if not User.Status:
			Return = {
				"Status": True,
				"Message": "Seu e-mail foi confirmado com sucesso!"
			}
			return Return
		return Return
	def RecoverPassword(self, Data):
		Return = {
			'Status': True,
			'Errors': {},
			'Items': {},
			"Message": "Sua solicitação foi enviada com sucesso. Acesse sua caixa de entrada para  prosseguir com o processo e recuperar a sua conta."
		}
		User = self.DB.getEntity('MasterUser')
		User.load(Keys = ['email'], Values = [Data.get('email')])

		if not bool(User.get('id')):
			Return['Status'] = False
			Return['Errors']['DB'] = 'E-mail não localizado!'
			return Return			

		PasswordRecovery = self.DB.getEntity('MasterPasswordRecovery')
		hsh = md5()
		hsh.update(str(uuid.uuid1()).encode('utf-8'))	
		UuidConfirm = hsh.hexdigest()

		PasswordRecovery['id_user'] = User.get('id')
		PasswordRecovery['token'] = UuidConfirm

		DateTime = gmtime()
		PasswordRecovery['created_at'] = strftime("%Y-%m-%d %H:%M:%S", DateTime) 
		td = timedelta(seconds=180)
		NewDate = datetime.now() + td
		PasswordRecovery['expire_at'] = NewDate.strftime("%Y-%m-%d %H:%M:%S")

		PasswordRecovery.save()

		if not PasswordRecovery.Status:
			Return['Status'] = False
			Return['Errors']['DB'] = "\n".join(list(PasswordRecovery.Errors.values()))			
			return Return
		MailTemplate = self.DB.getEntity('MasterMailTemplate')
		MailTemplate.load(2)
		MessageHtml = MailTemplate.get('content')
		Data = {}
		Data.update(User)
		Data['Url'] = 'http://localhost:3000/auth/set-password/' + UuidConfirm
		MessageRendered = self.Render(MessageHtml, Data)	

		Message = {
			'ToName': User.get('first_name'),
			'ToEmail': User.get('email'),
			'EmailCc': "",
			'Subject': "Restauração de Senha",
			'Content': MessageRendered,
			"Attachment": None
		}
		SendMail = Mailer(**ConfigMail)
		SendMail.Send(**Message)
		print(SendMail.Status)
		print(SendMail.ErrorMessage)
		return Return
	def CheckTokenRecover(self, Data):
		Return = {
			'Recovered': False,
			'Status': False,
			'Errors': {},
			'Items': {},
			"Message": "Token validado com sucesso! Por favor defina sua nova senha!"
		}
		PasswordRecovery = self.DB.getEntity('MasterPasswordRecovery')
		PasswordRecovery.load(Keys = ['token'], Values = [Data.get('Token')])
		if not PasswordRecovery.Status:
			Return = {
				"Status": False,
				"Message": "\n".join(list(MailConfirmation.Errors.values()))
			}
			return Return
		Now = datetime.now()
		if (Now > PasswordRecovery.get('expire_at')):			
			Return = {
				"Status": False,
				"Message": "Este token se encontra expirado! Soliticite nova recuperação de senha."
			}
			return Return
		Return = {
			"Status": True,
			"Message": "Token verificado com sucesso!"
		}
		return Return
	def SetNewPassword(self, Data):
		Return = {
			'Recovered': True,
			'Status': True,
			'Errors': {},
			'Items': {},
			"Message": "Senha recuperada com sucesso!"
		}
		PasswordRecovery = self.DB.getEntity('MasterPasswordRecovery')
		PasswordRecovery.load(Keys = ['token'], Values = [Data.get('Token')])
		if not PasswordRecovery.Status:
			Return['Recovered'] = False
			Return['Status'] = False
			Return['Message'] = "\n".join(list(MailConfirmation.Errors.values()))
			return Return
		Now = datetime.now()
		if (Now > PasswordRecovery.get('expire_at')):			
			Return['Recovered'] = False
			Return['Status'] = False
			Return['Message'] = "Este token se encontra expirado! Soliticite nova recuperação de senha."
			return Return
		User = self.DB.getEntity('MasterUser')
		User.load(PasswordRecovery.get('id_user'))
		hashed = bcrypt.hashpw(Data.get('password').encode('utf-8'), bcrypt.gensalt())
		User['password'] = hashed.decode('utf-8')
		User.save('id')
		if not User.Status:
			Return['Recovered'] = False
			Return['Status'] = False
			Return['Message'] = "\n".join(list(MailConfirmation.Errors.values()))
		else:
			Return['Message'] = "Sua senha foi restaurada com sucesso!"
		return Return
