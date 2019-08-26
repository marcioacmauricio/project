import re
def isPhone(Value):
	Return = {
		"Status": True,
		"Message": "",
		"Value": None
	}
	if not bool(Value):
		return Return

	Phone = re.sub('[^0-9]', '', str(Value))
	Length = len(Phone)

	if Length < 10 or Length > 11:
		Return["Message"] = "Telefone informado '" + str(Value) + "' inválido!"
		Return["Status"] = False
		return Return

	if Length == 10:
		Return["Value"] = "(" + Phone[:2] + ") " + Phone[2:6] + "-" + Phone[6:]
	else:
		Return["Value"] = "(" + Phone[:2] + ") " + Phone[2:7] + "-" + Phone[7:]

	return Return