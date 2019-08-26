from brazilnum.cpf import validate_cpf, format_cpf
def isCPF(Value):
	Return = {
		"Status": True,
		"Message": "",
		"Value": None
	}
	if not bool(Value):
		return Return

	if validate_cpf(Value):
		Return["Value"] = format_cpf(Value)
	else:
		Return["Message"] = "Valor informado '" + str(Value) + "' não é um numero!"
		Return["Status"] = False

	return Return