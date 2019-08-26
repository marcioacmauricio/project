import tornado.web
from db.db import DB
from db.Entitys import Entitys
import json
from utilities.pretty import pretty
from db.controllers.DatabaseHelpers import DatabaseHelpers
from utilities.JwtAuth import JwtAuth
class Helpers(tornado.web.RequestHandler):
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
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Items'] = {}
		Helper = DatabaseHelpers(self.User)
		if (self.data.get('Method') == 'getOptions'):
			Return.update(Helper.getOptionsFK(self.data))
		elif (self.data.get('Method') == 'addEvent'):
			Return.update(Helper.addEvent(self.data))
		elif (self.data.get('Method') == 'getEvents'):
			Return.update( Helper.getEvents() )			
		else:
			print(pretty(self.data))



		self.write(Return)
	def delete(self, table_schema_name = None, item_id = None):
		self.write('item_id')
	def options(self, table_schema_name = None, item_id = None):
		pass
