import React from 'react'
import SuperField from './SuperField'
import { Input } from 'reactstrap'
export default class Image extends SuperField {
	onChange(Event){
		Event.preventDefault();
		let File = Event.target.files[0]
		let reader = new FileReader()
		let DataField = this.DataField
		let ChangeState = this.ChangeState
		reader.onloadend = () => {
			ChangeState( DataField.nickname, reader.result )
		};
		reader.readAsDataURL(File);
	}
	renderField(Item, ColumnName){
		return <Input onChange={this.onChange.bind(this)} type="file" placeholder={this.DataField.title} />
	}	
}