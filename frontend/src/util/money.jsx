export default function money(valor) {
	if (valor === undefined){
		return "0,00"
	}
	var v = valor.replace(/\D/g,'');
	v = (v/1000).toFixed(2) + '';
	v = v.replace(".", ",");
	v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
	v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
	return v
}