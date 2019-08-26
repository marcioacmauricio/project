from datetime import time
from db.fields.SuperField import SuperField
class CreatedTime(SuperField):
	"""docstring for Editor"""
	def __init__(self):
		super(CreatedTime, self).__init__()
	def getInputToList(self, ColumData):
		return "to_char(" + ColumData.get('nickname') + ", 'DD/MM/YYYY HH:MI:SS')"
	def getInputToView(self, ColumData):
		return "to_char(" + ColumData.get('nickname') + ", 'DD/MM/YYYY HH:MI:SS')"