import React from 'react'
import SuperField from './SuperField'
import Select from 'react-select'
export default class SelectList extends SuperField {
	onChange(Value){
		if ((typeof Value === 'object') && (Value !== null)){
			this.ChangeState(this.DataField.nickname, Value.value )
		} else {
			this.ChangeState(this.DataField.nickname, "" )
		}
		
	}
	renderField(Item, ColumnName){
		let Value = Item[ColumnName]
		let Options = {}
		let ArgOpts = []
		try {
			ArgOpts = this.DataField.parameters.options
		} catch(e) {
			console.warn(e)
		}
		for (let i in ArgOpts){
			Options[ArgOpts[i].value] = ArgOpts[i]
		}
		let OptionValue = {
			value: "",
			label: ""
		}
		if (Options[Value] !== undefined){
			OptionValue = Options[Value]
		}
		return <Select isClearable onChange={this.onChange.bind(this)} options={Object.values( Options )} value={ OptionValue } />
	}
}