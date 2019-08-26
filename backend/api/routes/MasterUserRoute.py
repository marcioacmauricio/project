import tornado.web
from db.db import DB
from utilities.pretty import pretty
import json
from utilities.JwtAuth import *
@jwtauth
class MasterUserRoute(tornado.web.RequestHandler):
	def initialize(self):
		self.data = {}
		self.set_header('Content-Type', 'application/json; charset=utf-8')
		self.set_header('Access-Control-Allow-Origin', '*')
		self.set_header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,PATCH,DELETE')
		self.set_header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
		self.User = {}
		self.isAuth = False		
		self.DB = None
		self.Entity = None	
		if bool(self.request.body):
			self.data = json.loads(self.request.body.decode('utf-8'))
			
	def authorize(self, User):
		self.User = User
		self.isAuth = True
		self.DB = DB(self.User)
		self.Entity = self.DB.getEntity('MasterUser')
		
	# create item
	def put(self, table_schema_name = None, item_id = None):
		Return = {}
		self.Entity.createItem(self.data)
		Return['Status'] = self.Entity.Status
		Return['Errors'] = self.Entity.Errors
		Return['Item'] = self.Entity.Payload
		self.write(Return)
		
	# get item 
	def get(self, item_id = None ):
		Return = {}
		Columns = ['id', 'ordering', 'state', 'checked_out', 'checked_out_time', 'created_by', 'created_time', 'modified_by', 'modified_time', 'first_name', 'middle_names', 'last_name', 'email', 'password', 'profile_picture', 'about_me', 'nickname', 'id_authentication']
		self.Entity.setItem(item_id, Columns)
		Return['Status'] = self.Entity.Status
		Return['Errors'] = self.Entity.Errors
		Return['Item'] = self.Entity.Payload
		self.write(Return)

	# update item
	def patch(self, table_schema_name = None, item_id = None):
		Return = {}
		self.Entity.updateItem(item_id, self.data)
		Return['Status'] = self.Entity.Status
		Return['Errors'] = self.Entity.Errors
		Return['Item'] = self.Entity.Payload
		self.write(Return)

	# remove item
	def delete(self, table_schema_name = None, item_id = None):
		Return = {}
		self.Entity.deleteItem(item_id, self.data)
		Return['Status'] = self.Entity.Status
		Return['Errors'] = self.Entity.Errors
		Return['Item'] = self.Entity.Payload
		self.write(Return)

	# list items
	def post(self, table_schema_name = None, item_id = None):
		Return = {}
		self.Entity.listItems(table_schema_name, item_id, self.data)
		Return['Status'] = self.Entity.Status
		Return['Errors'] = self.Entity.Errors
		Return['ItemsPerPage'] = self.Entity.ItemsPerPage
		Return['ReturnCount'] = self.Entity.ReturnCount
		Return['SearchCount'] = self.Entity.SearchCount
		Return['PageNumber'] = self.Entity.PageNumber
		Return['Items'] = self.Entity.Payload
		self.write(Return)

	def options(self, table_schema_name = None, item_id = None):
		pass