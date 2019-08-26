from db.models.MasterResourceModel import MasterResourceModel
from db.controllers.SuperController import SuperController
from utilities.pretty import pretty
class MasterResourceController(SuperController):
	def __init__(self, DB, User, Key = None, ToSave = [], ToList = [], ToView = [], Item = []):
		self.DB = DB
		self.User = User
		super(MasterResourceController, self).__init__(MasterResourceModel, Key, ToSave, ToList, ToView, Item)
	def BeforeInsert(self):
		"""
		before insertion there will be no old record
		"""
		# New = self.getNew()
		pass
	def AfterInsert(self):
		# New = self.getNew()
		pass
	def AfterUpdate(self):
		# Cols = []
		# Old = self.getOld(Cols)
		# New = self.getNew()
		pass
	def BeforeUpdate(self):
		"""
		to get the old record it is necessary to have called 'self.getOld()' in AfterUpdate()
		"""
		# Old = self.getOld()
		# New = self.getNew()
		pass
	def AfterDelete(self):
		""" removal operation has no new values
		"""
		# Old = self.getOld()
		pass
	def BeforeDelete(self):
		""" removal operation has no new values
		"""
		# Old = self.getOld()		
		pass