from db.controllers import *
from db.DBParams import DBParams
from utilities.pretty import pretty
import postgresql
class DB(object):
	dbname = ""
	dbuser = ""
	dbpass = ""
	dbhost = ""
	conn = False
	def __init__(self, User):
		self.dbname = DBParams.get('dbname')
		self.dbuser = DBParams.get('dbuser')
		self.dbpass = DBParams.get('dbpass')
		self.dbhost = DBParams.get('dbhost')
		self.User = User
		self.ps = None
		self.Status = True
		self.Message = ""
		self.Result = None
		self.str_con = "pq://" + self.dbuser + ':' + self.dbpass + '@' + self.dbhost + '/' + self.dbname		
		super(DB, self).__init__()
	def open(self, AutoCommit = False):
		self.conn = postgresql.open(self.str_con)
	def close(self):
		self.conn.close()
		self.conn = False
	def exec(self,query,args = []):
		self.Message = ""
		self.Result = None
		self.Status = True
		isConnected = False
		if not bool(self.conn):
			self.open()
			isConnected = True
		try:
			ps = self.conn.prepare(query)
			self.Result = ps(*args)
		except Exception as inst:
			self.Status = False
			if hasattr(inst, 'message'):
				Message = inst.message
			else:
				Message = str(inst)
			self.Message = Message
		if isConnected:
			self.close()
		if bool(self.Status):
			return self.Result
		else:
			return False
	def getEntity(self, EntityName):
		if EntityName == 'MasterModelTable':
			return MasterModelTableController( self, self.User )

		if EntityName == 'MasterUser':
			return MasterUserController( self, self.User )

		if EntityName == 'MasterAddress':
			return MasterAddressController( self, self.User )

		if EntityName == 'MasterTablePermission':
			return MasterTablePermissionController( self, self.User )

		if EntityName == 'MasterColumnPermission':
			return MasterColumnPermissionController( self, self.User )

		if EntityName == 'MasterMailConfirmation':
			return MasterMailConfirmationController( self, self.User )

		if EntityName == 'MasterMailTemplate':
			return MasterMailTemplateController( self, self.User )

		if EntityName == 'MasterPasswordRecovery':
			return MasterPasswordRecoveryController( self, self.User )

		if EntityName == 'MasterResource':
			return MasterResourceController( self, self.User )

		if EntityName == 'MasterUserGroup':
			return MasterUserGroupController( self, self.User )

		if EntityName == 'MasterUserGroupResource':
			return MasterUserGroupResourceController( self, self.User )

		if EntityName == 'MasterUserUserGroup':
			return MasterUserUserGroupController( self, self.User )

		if EntityName == 'MasterAuthentication':
			return MasterAuthenticationController( self, self.User )

		if EntityName == 'ProjectProject':
			return ProjectProjectController( self, self.User )

		if EntityName == 'ProjectRequirementsTypes':
			return ProjectRequirementsTypesController( self, self.User )

		if EntityName == 'ProjectRequirement':
			return ProjectRequirementController( self, self.User )

		if EntityName == 'ProjectRequirementTest':
			return ProjectRequirementTestController( self, self.User )

		if EntityName == 'ProjectProjectStage':
			return ProjectProjectStageController( self, self.User )
