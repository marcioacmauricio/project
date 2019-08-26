from datetime import datetime
import re
def isDate(Value):
	DateTime = Value
	Return = {
		"Status": True,
		"Message": "",
		"Value": None
	}
	if not bool(Value):
		return Return

	if type(DateTime) != str:
		Return["Message"] = "Data '" + str(Value) + "' não representa uma data!"
		Return["Status"] = False
		return Return
	Length = len(DateTime)
	if Length < 6 or Length > 10:
		Return["Message"] = "Comprimento da data '" + str(Value) + "' inadequado!"
		Return["Status"] = False
		return Return	

	try:
		if bool(re.search('-', DateTime)):
			objDate = datetime.strptime(DateTime, '%Y-%m-%d')
		elif bool(re.search('/', Value)):
			objDate = datetime.strptime(DateTime, '%d/%m/%Y')
		else: 
			Return["Message"] = "Formato da data '" + str(Value) + "' inadequado!"
			Return["Status"] = False
			return Return				
		Return["Value"] = objDate
	except Exception as e:
		Return["Message"] = str(e)
		Return["Status"] = False

	return Return