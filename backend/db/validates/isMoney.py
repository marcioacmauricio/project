import re
from money import Money

def isMoney(Value):
	Return = {
		"Status": True,
		"Message": "",
		"Value": None
	}
	if Value is None:
		return Return

	Val = re.sub('[^0-9]', '', str(Value))
	try:
		Val = Money(amount=int(Val)/100, currency='BRL')
		Return["Value"] = Val.amount
	except Exception as e:
		print('isMoney',e)
		Return["Message"] = "Valor informado '" + str(Value) + "' não é monetário!"
		Return["Status"] = False

	return Return