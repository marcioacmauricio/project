def isInteger(Value):
	Return = {
		"Status": True,
		"Message": "",
		"Value": None
	}
	if Value is None or Value == '':
		return Return

	try:
		Return["Value"] = int(Value)
	except Exception as e:
		Return["Message"] = "Valor informado '" + str(Value) + "' não é um numero!"
		Return["Status"] = False

	return Return