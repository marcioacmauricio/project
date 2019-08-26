import tornado.web
from hashlib import md5
import uuid
from db.db import DB
from db.Entitys import Entitys
import json
from utilities.pretty import pretty
from db.controllers.RegisterHelper import RegisterHelper
from utilities.JwtAuth import JwtAuth
class Register(tornado.web.RequestHandler):
	def initialize(self):

		self.data = {}
		self.set_header('Content-Type', 'application/json; charset=utf-8')
		self.set_header('Access-Control-Allow-Origin', '*')
		self.set_header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,PATCH,DELETE')
		self.set_header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
		self.Authorization = self.request.headers.get('Authorization')
		self.JwtAuth = JwtAuth()
		self.User = {}
		self.isAuth = False
		if bool(self.Authorization):
			self.JwtAuth.autorize(self.Authorization)
			self.isAuth = self.JwtAuth.Status
			self.User = self.JwtAuth.User

		self.Header = self.request.headers._dict
		self.Header['RemoteIp'] = self.request.remote_ip
		self.DB = DB(self.User)

		if bool(self.request.body):
			self.data = json.loads(self.request.body.decode('utf-8'))
	def get(self, table_schema_name = None, item_id = None):
		Return ={}
		self.write(Return)
	def patch(self, table_schema_name = None, item_id = None):
		self.write('item_id')
	def put(self, table_schema_name = None, item_id = None):
		self.write('item_id')
	def post(self, table_schema_name = None, item_id = None):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['Items'] = {}
		Return['Item'] = {}
		Return['Message'] = ""
		Helper = RegisterHelper(self.User)
		if (self.data.get('Method') == 'getAuthenticate'):
			UserData = Helper.Authenticate(self.data.get('Item'), self.Header)
			if bool(UserData):
				Return['Item'] = UserData
			else:
				Return['Errors'] = {'Auth': "Usuário e senha não conferem!"}	
		elif (self.data.get('Method') == 'refreshToken'):
			UserData = Helper.refreshToken( self.Header )	
			Return.update(UserData)								
		elif (self.data.get('Method') == 'getExit'):
			UserData = Helper.Exit( self.User )
			Return.update(UserData)	
		elif (self.data.get('Method') == 'registerUser'):
			UserData = Helper.RegisterUser(self.data.get('Item'))
			Return.update(UserData)	
		elif (self.data.get('Method') == 'confirmTokenMail'):
			UserData = Helper.ConfirmTokenMail(self.data.get('Item'))
			Return.update(UserData)
		elif (self.data.get('Method') == 'recoverPassword'):
			UserData = Helper.RecoverPassword(self.data.get('Item'))
			Return.update(UserData)
		elif (self.data.get('Method') == 'checkTokenRecover'):
			UserData = Helper.CheckTokenRecover(self.data.get('Item'))
			Return.update(UserData)
		elif (self.data.get('Method') == 'setNewPassword'):
			UserData = Helper.SetNewPassword(self.data.get('Item'))
			Return.update(UserData)	
		self.write(Return)

	def delete(self, table_schema_name = None, item_id = None):
		self.write('item_id')
	def options(self, table_schema_name = None, item_id = None):
		pass