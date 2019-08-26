import React from "react"
import { connect } from 'react-redux'
import { setNewPassword, checkTokenRecover } from 'reducers/Register/Actions'

import {
	Card,
	CardBody,
	CardTitle,
	Col,
	FormGroup,
	Input,
	CardText,
	Form,
	Alert,
	Button
} from "reactstrap";

import { Link } from 'react-router-dom'



class SetPassword extends React.Component {
	constructor() {
		super()
		this.state = {
			StatusShow: true,
			ShowForm: true,
			Status: true,
			Errors: {},
			Message: "",
			Item: {
				password: "",
				password_confirm: ""
			}
		}
	}
	componentWillMount() {
		let Post = {
			Method: "checkTokenRecover",
			Item: { Token: this.props.match.params.Token }
		}
		this.props.checkTokenRecover(Post)
	}
	componentWillReceiveProps(nextProps) {
		let newState = {...this.state}
		if (typeof nextProps.Payload === 'object'){
			newState.ShowForm = !nextProps.Payload.Recovered
			newState.Status = nextProps.Payload.Status
			newState.Message = nextProps.Payload.Message
			this.setState(newState)
		}
	}

	onChange(event) {
		let newState = {...this.state, Item: {...this.state.Item, [event.target.name]: event.target.value }}
		newState.Message = ""
		newState.StatusShow = true
		if (event.target.name === 'password_confirm'){
			if (newState.Item.password_confirm !== newState.Item.password){
				newState.StatusShow = false
				newState.Message= "Senhas não conferem"
			}
		}
		this.setState(newState);
	}

	renderForm(){
		return (
			<div>
				<CardText>Defina sua nova senha</CardText>
				<Form>
					<FormGroup row>
						<Col sm="12">
							<Input type="password" name="password" onChange={this.onChange.bind(this)} value={this.state.Item.password} placeholder="Nova senha" />
						</Col>
					</FormGroup>
					<FormGroup row>
						<Col sm="12">
							<Input type="password"  name="password_confirm" onChange={this.onChange.bind(this)} value={this.state.Item.password_confirm} placeholder="Repetir nova senha" />
						</Col>
					</FormGroup>													
					<Button onClick={this.onSubmit.bind(this)} color="success" size="lg" block>Redefinir Senha</Button>
				</Form>
			</div>
		)
	}
	onSubmit(event){
		let newState = {...this.state}
		if ((this.state.Item.password !== "") && (this.state.Item.password_confirm !== "") && (this.state.Item.password_confirm === this.state.Item.password)){
			let Post = {
				Method: "setNewPassword",
				Item: { 
					Token: this.props.match.params.Token,
					password: this.state.Item.password 
				}
			}
			this.props.setNewPassword(Post)
		} else {
			newState.StatusShow = false
			newState.Message = "Formulário inválido!"
			this.setState(newState)
		}
		event.preventDefault()
	}

	render() {
		let Visible = false
		if (this.state.Message !== ""){
			Visible = true
		}
		let CssColor = ""
		if (this.state.StatusShow){
			CssColor = "success"
		} else {
			CssColor = "danger"
		}

		let FormRecover = <Link to="/auth/login" >Login</Link>
		if (this.state.ShowForm){
			FormRecover = this.renderForm()
		}

		return (
			<>
				<Col lg="6" md="8">
					<Card className="bg-secondary shadow border-0">
						<CardBody>
							<CardTitle tag="h4">Redefinição de Senha</CardTitle>
							<Alert color={CssColor} isOpen={ Visible }>
								{this.state.Message}
							</Alert>						
							{FormRecover}
						</CardBody>
					</Card>
				</Col>
			</>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		Payload: state.Register.new_password
	}
	
}
export default connect(mapStateToProps, { setNewPassword, checkTokenRecover })(SetPassword);