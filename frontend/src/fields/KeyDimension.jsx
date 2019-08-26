import SuperField from './SuperField'
export default class KeyDimension extends SuperField {
	renderField(Item, ColumnName){
		return null
	}	
	OutPutFilter(Value){
		if (Value === undefined){
			return null
		}
		return Value
	}
	OutPut(Value){
		if (typeof Value === 'object'){
			if (Value.value === undefined){
				return null
			}
			return Value.value
		}
	}
	OutPutShow(Value){
		if (Value === undefined){
			return null
		}
		return Value.label			
	}
	getDefault( Value = { value: "", label: "" } ){
		if ((typeof Value === 'object') && (Value !== null)){
			if ((Value.value !== undefined) || ( Value.value !== null )){
				return Value
			} else {
				return { value: "", label: "" }
			}
		} else {
			return { value: "", label: "" }
		}
	}		
}