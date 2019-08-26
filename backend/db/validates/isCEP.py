from brazilnum.cep import format_cep, parse_cep
import re
def isCEP(Value):
	Return = {
		"Status": True,
		"Message": "",
		"Value": None
	}
	if not bool(Value):
		return Return
	CEPClean = re.sub('[^0-9]', '', str(Value))
	Length = len(CEPClean)

	if Length < 7 or Length > 10:
		Return["Message"] = "CEP informado '" + str(Value) + "' inválido!"
		Return["Status"] = False
		return Return		
	try:
		Return["Value"] = format_cep(CEPClean)
	except Exception as e:
		Return["Message"] = "CEP informado '" + str(Value) + "' inválido!"
		Return["Status"] = False

	return Return