from db.fields.SuperField import SuperField
class Numeric(SuperField):
	"""docstring for Editor"""
	def getInputToView(self, ColumData):
		return ColumData.get('nickname') + "::text"	
	def __init__(self):
		super(Numeric, self).__init__()
