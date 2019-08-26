def isNumeric(Value):
	Return = {
		"Status": True,
		"Message": "",
		"Value": None
	}
	if bool(Value):
		Return['Value'] = Value
	return Return