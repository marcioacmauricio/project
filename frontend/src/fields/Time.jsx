import React from 'react'
import SuperField from './SuperField'
import InputMask from 'react-input-mask'
export default class Time extends SuperField {
	renderField(Item, ColumnName){
		let Value = Item[ColumnName]
		return <InputMask className="form-control" mask="99:99:99" value={this.Input(Value)} onChange={this.onChange.bind(this)} type="text" placeholder={this.DataField.title} />
	}

}