import jwt
import json

from utilities.Configs import ConfigJwt
class JwtAuth:
	Status = False
	Message = ""
	User = {}
	def toBearer(self, Payload):
		return jwt.encode(Payload, ConfigJwt.get('secret') , algorithm=ConfigJwt.get('algorithm')).decode('utf-8')
	def autorize(self, Authorization):
		self.decode(Authorization)
	def decode(self, Authorization):
		parts = Authorization.split()
		if len(parts) <= 1:
			return
		Bearer = parts[1]
		if bool(Bearer):
			try:
				self.Status = True
				self.Message = ""
				self.User = jwt.decode(Bearer, ConfigJwt.get('secret') , algorithms=[ ConfigJwt.get('algorithm') ])
			except Exception as e:
				self.Status = False
				self.Message = str(e)				
				self.User = {}
				print(e)


def jwtauth(handler_class):
	''' Handle Tornado JWT Auth '''
	def wrap_execute(handler_execute):
		def require_auth(handler, kwargs):

			auth = handler.request.headers.get('Authorization')
			if auth:
				parts = auth.split()

				if parts[0].lower() != 'bearer':
					handler._transforms = []
					handler.set_status(401)
					handler.write("invalid header authorization")
					handler.finish()
				elif len(parts) == 1:
					handler._transforms = []
					handler.set_status(401)
					handler.write("invalid header authorization")
					handler.finish()
				elif len(parts) > 2:
					handler._transforms = []
					handler.set_status(401)
					handler.write("invalid header authorization")
					handler.finish()
				token = parts[1]
				try:
					handler.authorize( jwt.decode(token, ConfigJwt.get('secret') , algorithms=[ ConfigJwt.get('algorithm') ]) )
				except Exception as e:
					handler._transforms = []
					handler.set_status(401)
					handler.write(e.message)
					handler.finish()
			else:
				handler._transforms = []
				handler.write("Missing authorization")
				handler.finish()

			return True

		def _execute(self, transforms, *args, **kwargs):

			try:
				require_auth(self, kwargs)
			except Exception:
				return False

			return handler_execute(self, transforms, *args, **kwargs)

		return _execute

	handler_class._execute = wrap_execute(handler_class._execute)
	return handler_class
def auth_required(realm, auth_func):
	'''Decorator that protect methods with HTTP authentication.'''
	def auth_decorator(func):
		def inner(self, *args, **kw):
			if self.get_authenticated_user(auth_func, realm):
				return func(self, *args, **kw)
		return inner
	return auth_decorator