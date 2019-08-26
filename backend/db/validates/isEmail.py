from validate_email import validate_email
def isEmail(Value):
	Return = {
		"Status": True,
		"Message": "",
		"Value": None
	}
	if not bool(Value):
		return Return

	print(validate_email(Value))

	if validate_email(Value):
		Return["Value"] = Value
	else:
		Return["Message"] = "E-mail informado '" + str(Value) + "' inválido!"
		Return["Status"] = False

	return Return