import React from 'react'
import { Input } from 'reactstrap';
export default class SuperField extends React.Component {
	constructor(DataField, ChangeState) {
		super()
		this.DataField = DataField
		this.ChangeState = ChangeState
		this.name = DataField.nickname
	}
	onChange(Event){
		this.ChangeState(this.DataField.nickname, Event.target.value)
	}	
	renderTR(FieldData, FieldParam){
		return FieldData.title
	}
	renderField(Item, ColumnName){
		let Value = Item[ColumnName]
		return <Input value={this.Input(Value)} onChange={this.onChange.bind(this)} type="text" placeholder={this.DataField.title} />
	}
	renderFilter(Value){
		return <Input value={this.Input(Value)} onChange={this.onChange.bind(this)} type="text" placeholder={this.DataField.title} />
	}
	OutPut(Value){
		if (Value === undefined){
			return null
		}
		return Value		
	}
	OutPutShow(Value){
		if (Value === undefined){
			return null
		}
		return Value			
	}
	OutPutFilter(Value){
		if (Value === undefined){
			return null
		}
		return '%' + Value + '%'
	}	
	Input(Value){
		if (Value == null){
			return ""
		}
		return Value
	}
	getDefault( Value = undefined ){
		if (( Value === undefined ) || (Value === null)){
			return ""
		} else {
			return Value
		}
	}
}
