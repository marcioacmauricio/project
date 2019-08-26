from db.fields.SuperField import SuperField
from datetime import datetime
class DateTime(SuperField):
	"""docstring for Editor"""
	def __init__(self):
		super(DateTime, self).__init__()
	def getInputToList(self, ColumData):
		return "to_char(t1." + ColumData.get('nickname') + ", 'DD/MM/YYYY HH:MI:SS')"
	def getInputToView(self, ColumData):
		return "to_char(t1." + ColumData.get('nickname') + ", 'DD/MM/YYYY HH:MI:SS')"