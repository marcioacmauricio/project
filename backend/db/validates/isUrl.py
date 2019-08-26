import validators
def isUrl(Value):
	Return = {
		"Status": True,
		"Message": "",
		"Value": None
	}
	if not bool(Value):
		return Return

	if validators.url(str(Value)):
		Return["Value"] = Value
	else:
		Return["Message"] = "Url '" + str(Value) + "' inválida!"
		Return["Status"] = False

	return Return