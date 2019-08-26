import React from 'react'
import CurrencyInput from 'react-currency-input'
import SuperField from './SuperField'
export default class Numeric extends SuperField {
	onChange(Value){
		this.ChangeState(this.DataField.nickname, Value)
	}	
	renderField(Item, ColumnName){
		let Value = Item[ColumnName]
		return <CurrencyInput className="form-control" decimalSeparator="." thousandSeparator="" precision={this.DataField.parameters.precision} prefix="" value={this.Input(Value)} onChange={this.onChange.bind(this)} type="text" placeholder={this.DataField.title} />
	}
}