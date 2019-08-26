from datetime import time
from db.fields.SuperField import SuperField
class Time(SuperField):
	"""docstring for Editor"""
	def __init__(self):
		super(Time, self).__init__()
	def getInputToList(self, ColumData):
		return "to_char(" + ColumData.get('nickname') + ", 'HH:MI:SS')"
	def getInputToView(self, ColumData):
		return "to_char(" + ColumData.get('nickname') + ", 'HH:MI:SS')"