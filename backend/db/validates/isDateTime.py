from datetime import datetime
import re
def isDateTime(Value):
	print(Value)
	DateTime = Value
	Return = {
		"Status": True,
		"Message": "",
		"Value": None
	}
	if not bool(Value):
		return Return

	if (type(Value) == datetime):
		Return['Value'] = Value
		return Return
	if type(DateTime) != str:
		Return["Message"] = "Data/hora '" + str(Value) + "' não representa data/hora!"
		Return["Status"] = False
		return Return	

	if bool(re.search('.', DateTime)):
		MSec = ""
		Parts = DateTime.split('.')
		if (len(Parts) == 1):
			DateTime = Parts[0]
		elif (len(Parts) == 2):
			DateTime = Parts[0]
			MSec = "." + str(Parts[1])
		elif (len(Parts) > 2):
			Return["Message"] = "Data/hora  '" + str(Value) + "' em formato inválido!"
			Return["Status"] = False
			return Return
		else:
			Return["Message"] = "Data/hora '" + str(Value) + "' em formato inválido!"
			Return["Status"] = False
			return Return
	Length = len(DateTime)
	if Length < 15 or Length > 19:
		Return["Message"] = "Comprimento da data/hora '" + str(Value) + "' inadequado!"
		Return["Status"] = False
		return Return	

	try:
		if bool(re.search('-', DateTime)):
			objDate = datetime.strptime(DateTime, '%Y-%m-%d %H:%M:%S')
		elif bool(re.search('/', Value)):
			objDate = datetime.strptime(DateTime, '%d/%m/%Y %H:%M:%S')
		else: 
			Return["Message"] = "Formato da data/hora '" + str(Value) + "' inadequado!"
			Return["Status"] = False
			return Return			
		Return["Value"] = objDate
	except Exception as e:
		Return["Message"] = str(e)
		Return["Status"] = False
	return Return