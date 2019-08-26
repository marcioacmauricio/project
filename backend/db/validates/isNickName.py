def isNickName(Value):
	Return = {
		"Status": True,
		"Message": "",
		"Value": None
	}
	if not bool(Value):
		return Return

	try:
		Return["Value"] = str(Value)
	except Exception as e:
		Return["Message"] = "Valor informado '" + str(Value) + "' não é um numero!"
		Return["Status"] = False

	return Return