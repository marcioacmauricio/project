from datetime import datetime
import re
def isTime(Value):
	DateTime = Value
	Return = {
		"Status": True,
		"Message": "",
		"Value": None
	}
	if not bool(Value):
		return Return

	if type(DateTime) != str:
		Return["Message"] = "Tempo '" + str(Value) + "' inválido!"
		Return["Status"] = False
		return Return
	Length = len(DateTime)
	if Length != 8:
		Return["Message"] = "Tempo '" + str(Value) + "' inválido!"
		Return["Status"] = False
		return Return	

	try:
		objTime = datetime.strptime(Value, '%H:%M:%S')
		Return["Value"] = objTime
	except Exception as e:
		Return["Message"] = str(e)
		Return["Status"] = False

	return Return