import React from 'react';
import SuperField from './SuperField'
import ModalEditor from './ModalEditor'
export default class Editor extends SuperField {
	onChange(Event){
		this.ChangeState( this.DataField.nickname, Event )
	}	
	renderField(Item, ColumnName){
		let Value = Item[ColumnName]
		return <ModalEditor DataField={this.DataField} value={this.Input(Value)} onChange={this.onChange.bind(this)} type="text" placeholder={this.DataField.title} />
	}
}