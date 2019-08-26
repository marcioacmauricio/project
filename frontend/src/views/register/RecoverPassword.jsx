import React from "react";
import { connect } from 'react-redux'
import { recoverPassword } from 'reducers/Register/Actions'
import {
	Card,
	CardBody,
	CardTitle,
	Col,
	FormGroup,
	Input,
	Alert,
	CardText,
	Form,
	Button
} from "reactstrap";
class RecoverPassword extends React.Component {
	constructor() {
		super()
		this.state = {
			StatusAlert: false,
			Status: true,
			Errors: {},
			Item: {
				email: ""
			},
			Message: ""
		}
	}
	onClick(event){
		// debugger
		let Post = {
			Method: "recoverPassword",
			Item: this.state.Item
		}
		this.props.recoverPassword(Post)		
		event.preventDefault()
	}
	onChange(event){
		let newState = {...this.state, Item: {...this.state.Item, [event.target.name]: event.target.value }}
		this.setState(newState)
	}
	componentWillReceiveProps(nextProps) {
		let newState = { ...this.state, ...nextProps.Payload }

		newState.StatusAlert = true

		this.setState( newState )
	}
	renderRecover(){
		let MenssageText = ""
		if (this.state.Message !== ''){
			if (this.state.Status){
				MenssageText = <Alert color="success">{this.state.Message}</Alert>
			} else {
				MenssageText = <Alert color="error">{this.state.Message}</Alert>
			}			
		}
		let Body = ""
		if (!this.state.StatusAlert){
			Body = 	<Card>					
					<CardBody>
						<CardTitle>Recuperação de Senha</CardTitle>
						<CardText>Informe seu e-mail utilizado para autenticação</CardText>
						<Form>
							<FormGroup row>
								<Col sm="12">
									<Input onChange={this.onChange.bind(this)} value={this.state.Item.email} type="email" name="email" id="exampleEmail" placeholder="E-mail" />
								</Col>
							</FormGroup>													
							<Button onClick={this.onClick.bind(this)} color="success" size="lg" block round>Solicitar Recuperação</Button>
						</Form>
					</CardBody>
			</Card>				
		} else {
			Body = <Card className="bg-secondary shadow border-0">					
					<CardBody>
						<CardTitle>Recuperação de Senha</CardTitle>
						{MenssageText}
					</CardBody>
			</Card>
		}
		return (
			<div>
				{Body}
			</div>
		)
	}

	render() {
		return (
			<>
				<Col lg="6" md="8">
					{this.renderRecover()}
				</Col>
			</>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		Payload: state.Register.recover_password
	}
	
}
export default connect(mapStateToProps, { recoverPassword })(RecoverPassword);
