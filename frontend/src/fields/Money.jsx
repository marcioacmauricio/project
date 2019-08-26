import React from 'react'
import SuperField from './SuperField'
import CurrencyInput from 'react-currency-input'
export default class Money extends SuperField {
	onChange(Value){
		this.ChangeState(this.DataField.nickname, Value)
	}	
	renderField(Item, ColumnName){
		let Value = Item[ColumnName]
		return <CurrencyInput className="form-control" decimalSeparator="," thousandSeparator="." prefix="R$ " value={this.Input(Value)} onChange={this.onChange.bind(this)} type="text" placeholder={this.DataField.title} />
	}
}