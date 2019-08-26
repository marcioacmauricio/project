import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalAttributes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
		this.FieldList = { 1: "Editor", 2: "Ordering", 3: "NickName", 4: "CloneFrom", 5: "CloneTime", 6: "ForeignKey", 7: "CheckedOut", 8: "State",	9: "SelectList", 10: "KeyDimension", 11: "CheckedOutTime", 12: "CreatedBy", 13: "ModifiedBy", 14: "Date", 15: "Time", 16: "DateTime", 17: "KeyIncremente", 18: "Input", 19: "Textarea", 20: "Money", 21: "Password", 22: "Image", 23: "Boolean", 24: "Numeric", 25: "Attributes" }
		this.AllAtributes = {
			1: {"type":"TEXT","validation":"isString","required":"1"},
			2: {"default": "", "required": "0", "type": "INTEGER", "validation": "isInteger"},
			3: {"type":"NAME","validation":"isNickName","required":"0"},
			4: {"validation":"isInteger","type":"INTEGER","required":"0"},
			5: {"type":"TIMESTAMP WITHOUT TIME ZONE","validation":"isDateTime","required":"1"},
			6: {"default":"","required":"0","colLabel":"nickname","colValue":"id","Table":"user","colDescription":"first_name","validation":"isInteger","type":"INTEGER","Schema":"master"},
			7: {"default":"","required":"0","colLabel":"nickname","colValue":"id","Table":"user","colDescription":"first_name","validation":"isInteger","type":"INTEGER","Schema":"master"},
			8: {"default": "1", "required": "1", "type": "SMALLINT", "validation": "isInteger"},
			9: {"options":[{"label":"Primeiro","value":"1"},{"label":"Segundo","value":"2"}],"validation":"isInteger","type":"INTEGER","required":"0"},
			10: {"type": "BIGINT", "Table": "project", "Schema": "project", "colLabel": "title", "colValue": "id", "required": "0", "colDescription": "description"},
			11: {"default": "", "required": "0", "type": "TIMESTAMP WITHOUT TIME ZONE", "validation": "isDateTime"},
			12: {"default":"","required":"0","colLabel":"nickname","colValue":"id","Table":"user","colDescription":"first_name","validation":"isInteger","type":"INTEGER","Schema":"master"},
			13: {"default":"","required":"0","colLabel":"nickname","colValue":"id","Table":"user","colDescription":"first_name","validation":"isInteger","type":"INTEGER","Schema":"master"},
			14: {"validation":"isDate","type":"DATE","required":"0","primary_key":"0"},
			15: {"type":"TIME","validation":"isTime","required":"1","primary_key":"0"},
			16: {"type":"TIMESTAMP WITHOUT TIME ZONE","validation":"isDateTime","required":"1"},
			17: {"default": "", "required": "1", "type": "SERIAL", "primary_key": "1", "validation": "isInteger"},
			18: {"default": "", "required": "1", "type": "CHARACTER VARYING", "validation": "isString"},
			19: {"type":"TEXT","validation":"isString","required":"0"},
			20: {"type":"MONEY","validation":"isMoney","required":"1"},
			21: {"default": "", "required": "0", "type": "CHARACTER VARYING", "level":"MEDIUM","validation": "isPassword"},
			22: {"default": "", "required": "0", "type": "text","validation": "isImage"},
			23: {"default": "", "required": "0", "type": "BOOLEAN","validation": "isBoolean"},
			24: {"default": "", "required": "0", "type": "NUMERIC", "length":"11", "precision":"3","validation": "isNumeric"},
			25: {"default": "","required": "0", "type": "text", "validation": "isAttribute", "attributes": ["table","schema"] }
		}


		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	render() {
		debugger
		return (
			<div>
				<Button outline color="success" onClick={this.toggle}><i className="fa fa-cogs" aria-hidden="true"></i></Button>
				<Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
					<ModalBody>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
						<Button color="secondary" onClick={this.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default ModalAttributes;