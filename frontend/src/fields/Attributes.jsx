import React from 'react'
import SuperField from './SuperField'
import ModalAttributes from './ModalAttributes'
export default class Attributes extends SuperField {
	renderField(Item, ColumnName){
		let Value = Item[ColumnName]
		return <ModalAttributes Item={Item} DataField={this.DataField} value={this.Input(Value)} onChange={this.onChange.bind(this)} type="checkbox" />
	}
}