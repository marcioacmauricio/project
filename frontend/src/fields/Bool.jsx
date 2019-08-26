import React from 'react'
import { Input } from 'reactstrap'
import SuperField from './SuperField'
export default class Bool extends SuperField {
	onChange(Event){
		this.ChangeState(this.DataField.nickname, Event.target.checked)
	}
	renderField(Item, ColumnName){
		let Value = Item[ColumnName]
		return <Input value={this.Input(Value)} onChange={this.onChange.bind(this)} type="checkbox" placeholder={this.DataField.title} />
	}
}