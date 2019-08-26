from brazilnum.cnpj import validate_cnpj, format_cnpj
def isCNPJ(Value):
	Return = {
		"Status": True,
		"Message": "",
		"Value": None
	}
	if not bool(Value):
		return Return

	if validate_cnpj(Value):
		Return["Value"] = format_cnpj(Value)
	else:
		Return["Message"] = "Valor informado '" + str(Value) + "' não é um numero!"
		Return["Status"] = False

	return Return