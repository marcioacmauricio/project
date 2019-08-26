import React from 'react'
import SuperField from './SuperField'
import { Input } from 'reactstrap'
export default class KeyIncremente extends SuperField {
	renderField(Item, ColumnName){
		let Value = Item[ColumnName]
		return <Input disabled value={this.Input(Value)} onChange={this.onChange.bind(this)} type="text" placeholder={this.DataField.title} />
	}
	render(){
		return <Input disabled value="0" type="text" placeholder="id" />		
	}
}