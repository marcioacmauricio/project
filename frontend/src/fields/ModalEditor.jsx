import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col } from 'reactstrap';
import	 'brace';
import AceEditor from 'react-ace'
import 'brace/mode/html'
import 'brace/theme/iplastic'

class ModalEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	render() {
		return (
			<div>
				<Button color="success" outline onClick={this.toggle}><i className="fa fa-code" aria-hidden="true"></i></Button>
				<Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>{ this.props.DataField.title }</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup row>
								<Col sm={12}>
									<AceEditor
										mode="html"
										theme="iplastic"
										value={this.props.value}
										onChange={this.props.onChange}
										editorProps={ {$blockScrolling: Infinity} }
										style={ {"width":"100%"} }
									/>
								</Col>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.toggle}>Salvar</Button>{' '}
						<Button color="secondary" onClick={this.toggle}>Fechar</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default ModalEditor;