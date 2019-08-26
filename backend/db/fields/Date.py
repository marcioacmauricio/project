from datetime import datetime
from db.fields.SuperField import SuperField
class Date(SuperField):
	"""docstring for Editor"""
	def __init__(self):
		super(Date, self).__init__()
	def getInputToList(self, ColumData):
		return "to_char(t1." + ColumData.get('nickname') + ", 'DD/MM/YYYY')"
	def getInputToView(self, ColumData):
		return "to_char(t1." + ColumData.get('nickname') + ", 'DD/MM/YYYY')"