import React from 'react'
import SuperField from './SuperField'
import { Input } from 'reactstrap'
export default class Ordering extends SuperField {
	renderField(Item, ColumnName){
		let Value = Item[ColumnName]
		let Disabled = true
		if (Value > 0){
			Disabled = false
		}
		return <Input disabled={Disabled} value={this.Input(Value)} onChange={this.onChange.bind(this)} type="text" placeholder={this.DataField.title} />
	}
}