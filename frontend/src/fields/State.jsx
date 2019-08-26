import React from 'react'
import SuperField from './SuperField'
import Select from 'react-select'
export default class State extends SuperField {
	options = [
		{ value: 0, label: 'Inativo' },
		{ value: 1, label: 'Ativo' },
		{ value: 2, label: 'Cancelado' }
	]
	onChange(Value){
		this.ChangeState(this.DataField.nickname, Value.value )
	}
	renderField(Item, ColumnName){
		let Value = Item[ColumnName]
		let OptionValue = {
			value: "",
			label: ""
		}
		if (this.options[Value] !== undefined){
			OptionValue = this.options[Value]
		}
		return <Select isClearable onChange={this.onChange.bind(this)} options={ this.options } value={ OptionValue } />
	}
}