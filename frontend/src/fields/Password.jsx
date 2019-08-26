import React from 'react'
import { Input } from 'reactstrap'
import SuperField from './SuperField'
export default class Password extends SuperField {
	renderField(Item, ColumnName){
		let Value = Item[ColumnName]
		return <Input value={this.Input(Value)} onChange={this.onChange.bind(this)} type="password" placeholder={this.DataField.title} />
	}
}