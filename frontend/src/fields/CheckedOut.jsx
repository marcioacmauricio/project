import React from 'react'
import SuperField from './SuperField'
import SelectField from './SelectField'
export default class CheckedOut extends SuperField {
	renderField(Item, ColumnName){
		let Value = Item[ColumnName]
		return <SelectField DataField={this.DataField} value={Value} ChangeState={this.ChangeState} />
	}
	renderFilter(Value){
		return <SelectField DataField={this.DataField} value={Value} ChangeState={this.ChangeState} />
	}
	OutPut(Value){
		if (typeof Value === 'object'){
			if (Value.value === undefined){
				return null
			}
			return Value.value
		}
	}
	OutPutFilter(Value){
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