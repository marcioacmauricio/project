from db.fields.SuperField import SuperField
class Money(SuperField):
	"""docstring for Editor"""
	def __init__(self):
		super(Money, self).__init__()
	def getInputToView(self, ColumData):
		return "MONEY(t1." + ColumData.get('nickname') + ")"
	def getInputToList(self, ColumData):
		return "MONEY(t1." + ColumData.get('nickname') + ")"