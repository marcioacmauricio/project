from utilities.pretty import pretty
class SuperField:
	"""docstring for SuperField"""
	def __init__(self):
		pass
	def getInputToView(self, ColumData):
		return 't1.' + ColumData.get('nickname')
	def getInputToList(self, ColumData):
		return 't1.' + ColumData.get('nickname')
	def getOutputToView(self, Value):
		if not bool(Value) and Value != 0:
			return ''
		return Value
	def getOutputToResponse(self, Value):
		return str(Value)
	def getOutputToSave(self, Value):
		return Value