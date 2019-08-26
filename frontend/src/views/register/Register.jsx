import React from "react"
import { connect } from 'react-redux'
import { registerUser } from 'reducers/Register/Actions'
import NotificationAlert from "components/Global/NotificationAlert"
import { If, Then, Else } from 'react-if'
// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Row,
	Col,
	Alert
} from "reactstrap";

class Register extends React.Component {
	constructor() {
		super()
		this.state = {
			Concluded: false,
			ShowMessage: false,
			Status: true,
			StatusItems: true,
			StatusErrors: {
				first_name: false,
				middle_names: false,
				last_name: false,	
				email: false,
				confirm_email: false,
				password: false,
				confirm_password: false,
				nickname: false,
				about_me: false
			},
			Errors: {
				first_name: "",
				middle_names: "",
				last_name: "",								
				email: "",
				confirm_email: "",
				password: "",
				confirm_password: "",
				nickname: "",
				about_me: ""
			},
			Item: {
				first_name: "",
				middle_names: "",
				last_name: "",	
				email: "",
				confirm_email: "",
				password: "",
				confirm_password: "",
				nickname: "",
				about_me: ""		
			}		
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
		this.onDismiss = this.onDismiss.bind(this)
		this.onBlur = this.onBlur.bind(this)
	}
	FieldTitles = {
		first_name: "First name (required)",
		middle_names: "Middle names (optional)",
		last_name: "Last name (required)",	
		email: "E-mail (required)",
		confirm_email: "Confirmar e-mail (required)",
		password: "Senha (required)",
		confirm_password: "Confirmar senha (required)",
		nickname: "Nickname (required)",
		about_me: "About me (optional)"
	}
	onChange(event) {
		let newState = {...this.state, Item: {...this.state.Item, [event.target.name]: event.target.value }}

		this.setState(newState);
	}
	onBlur(event) {
		// debugger
		let newState = { ...this.state }
		let Status = true
		newState.Errors[event.target.name] = ""
		if (event.target.name === 'confirm_email'){
			if (newState.Item.confirm_email !== newState.Item.email){
				newState.StatusErrors.confirm_email = false
				Status = false
				newState.Errors.confirm_email = "Emails não conferem!"
			} else {
				newState.StatusErrors.confirm_email = true
			}
		} else if (event.target.name === 'confirm_password'){
			if (newState.Item.confirm_password !== newState.Item.password){
				Status = false
				newState.StatusErrors.confirm_password = false
				newState.Errors.confirm_password = "Senhas não conferem"
			} else {
				newState.StatusErrors.confirm_password = true
			}
		} 

		if ((event.target.value === "") && !(['about_me', 'middle_names'].indexOf( event.target.name ) >= 0)){
			console.log(event.target.name)
			Status = false
			newState.StatusErrors[event.target.name] = false
			newState.Errors[event.target.name] = 'Campo ' + this.FieldTitles[event.target.name] + " não pode ser nulo"		
		} else {
			newState.StatusErrors[event.target.name] = true
		}
		if (Status === false){
			let options = {
				place: 'bl',
				message: (
					<div>
						{ newState.Errors[event.target.name] }
					</div>
				),
				type: "danger",
				autoDismiss: 7
			}
			this.refs.notify.notificationAlert(options);			
		}
		this.setState(newState);
	}

	componentWillReceiveProps(nextProps) {
		debugger
		if (typeof nextProps.Payload === 'object'){
			let newState = {...this.state, ...nextProps.Payload, Item: {...this.state.Item, ...nextProps.Payload.Item}, ShowMessage: nextProps.Payload.Status } 
			if (nextProps.Payload.Status){
				newState.Concluded = true
				newState.ShowMessage = false
			} else {
				let Messages = []
				for (let i in nextProps.Payload.Errors){
					Messages.push(<p key={i}>{nextProps.Payload.Errors[i]}</p>)
				}
				let options = {
					place: 'bl',
					message: (
						<div>
							{ Messages }
						</div>
					),
					type: "danger",
					autoDismiss: 7
				}
				this.refs.notify.notificationAlert(options);				
				newState.ShowMessage = true
			}
			this.setState(newState)			
			
		} 		
	}	
	onSubmit(e) {
		let Item = {}
		let newState = {...this.state}
		let Messages = []
		newState.StatusItems = true
		newState.ShowMessage = false
		for (let ColumnName in this.state.Item){
			// debugger
			if (this.state.Item[ColumnName] !== ""){
				Item[ColumnName] = this.state.Item[ColumnName]
			} else if (!(['about_me', 'middle_names'].indexOf( ColumnName ) >= 0)) {
				newState.StatusItems = false
				newState.ShowMessage = true
				newState.Errors[ColumnName] = "Campo " + this.FieldTitles[ColumnName] + " não pode ser nulo!"
				Messages.push(<p key={ColumnName}>{newState.Errors[ColumnName]}</p>)
			}
		}
		if (newState.StatusItems === true){
			let Post = {
				Method: "registerUser",
				Item
			}
			this.props.registerUser(Post)
		} else {
			let options = {
				place: 'bl',
				message: (
					<div>
						{ Messages }
					</div>
				),
				type: "danger",
				autoDismiss: 7
			}
			this.refs.notify.notificationAlert(options);	
		}
		this.setState(newState)
		e.preventDefault() 
	}
	onDismiss() {
		this.setState({ ...this.state, ShowMessage: false });
	}		
	render() {
		return (
			<>
				<Col lg="6" md="8">
					<Card className="bg-secondary shadow border-0">
						<NotificationAlert ref="notify" />
						<CardHeader className="bg-transparent pb-5">
							<div className="text-muted text-center mt-2 mb-4">
								<small>Sign up with</small>
							</div>
							<div className="text-center">
								<Button
									className="btn-neutral btn-icon mr-4"
									color="default"
									href="#pablo"
									onClick={e => e.preventDefault()}
								>
									<span className="btn-inner--icon">
										<img
											alt="..."
											src={require("assets/img/icons/common/github.svg")}
										/>
									</span>
									<span className="btn-inner--text">Github</span>
								</Button>
								<Button
									className="btn-neutral btn-icon"
									color="default"
									href="#pablo"
									onClick={e => e.preventDefault()}
								>
									<span className="btn-inner--icon">
										<img
											alt="..."
											src={require("assets/img/icons/common/google.svg")}
										/>
									</span>
									<span className="btn-inner--text">Google</span>
								</Button>
							</div>
						</CardHeader>
						<CardBody className="px-lg-5 py-lg-5">
							<div className="text-center text-muted mb-4">
								<small>Or sign up with credentials</small>
							</div>
							<If condition={ this.state.Concluded }>
								<Then>
									<Alert color="success">
										Seu cadastro foi concluído com sucesso!<br />
										Acesse sua caixa de entrada para confirmar o seu e-mail!<br />
									</Alert>
								</Then>
								<Else>	
									<Form role="form">
										<FormGroup>
											<InputGroup className="input-group-alternative mb-3">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-hat-3" />
													</InputGroupText>
												</InputGroupAddon>
												<Input 
													type="text"
													name="first_name"
													value={this.state.Item.first_name}
													onChange={this.onChange}
													onBlur={this.onBlur}
													placeholder={this.FieldTitles.first_name}
												/>
											</InputGroup>
										</FormGroup>
										<FormGroup>
											<InputGroup className="input-group-alternative mb-3">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-hat-3" />
													</InputGroupText>
												</InputGroupAddon>
												<Input 
													type="text"
													name="middle_names"
													value={this.state.Item.middle_names}
													onChange={this.onChange}
													onBlur={this.onBlur}
													placeholder={this.FieldTitles.middle_names}
												/>
											</InputGroup>
										</FormGroup>
										<FormGroup>
											<InputGroup className="input-group-alternative mb-3">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-hat-3" />
													</InputGroupText>
												</InputGroupAddon>
												<Input 
													type="text"
													name="last_name"
													value={this.state.Item.last_name}
													onChange={this.onChange}
													onBlur={this.onBlur}
													placeholder={this.FieldTitles.last_name}
												/>
											</InputGroup>
										</FormGroup>																
										<FormGroup>
											<InputGroup className="input-group-alternative mb-3">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="fa fa-user" aria-hidden="true"></i>
													</InputGroupText>
												</InputGroupAddon>
												<Input 
													type="text"
													name="nickname"
													value={this.state.Item.nickname}
													onChange={this.onChange}
													onBlur={this.onBlur}
													placeholder={this.FieldTitles.nickname}
												/>
											</InputGroup>
										</FormGroup>								
										<FormGroup>
											<InputGroup className="input-group-alternative mb-3">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-email-83" />
													</InputGroupText>
												</InputGroupAddon>
												<Input
													type="email"
													name="email"
													value={this.state.Item.email}
													onChange={this.onChange}
													onBlur={this.onBlur}
													placeholder={this.FieldTitles.email}
												/>
											</InputGroup>
										</FormGroup>
										<FormGroup>
											<InputGroup className="input-group-alternative mb-3">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-email-83" />
													</InputGroupText>
												</InputGroupAddon>
												<Input
													type="email"
													name="confirm_email"
													value={this.state.Item.confirm_email}
													onChange={this.onChange}
													onBlur={this.onBlur}
													placeholder={this.FieldTitles.confirm_email}
												/>
											</InputGroup>
										</FormGroup>								
										<FormGroup>
											<InputGroup className="input-group-alternative">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-lock-circle-open" />
													</InputGroupText>
												</InputGroupAddon>
												<Input
													type="password"
													name="password"
													value={this.state.Item.password}
													onChange={this.onChange}
													onBlur={this.onBlur}
													placeholder={this.FieldTitles.password}
												/>
											</InputGroup>
										</FormGroup>
										<FormGroup>
											<InputGroup className="input-group-alternative">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-lock-circle-open" />
													</InputGroupText>
												</InputGroupAddon>
												<Input
													type="password"
													name="confirm_password"
													value={this.state.Item.confirm_password}
													onChange={this.onChange}
													onBlur={this.onBlur}
													placeholder={this.FieldTitles.confirm_password}
												/>
											</InputGroup>
										</FormGroup>								
										<FormGroup>
											<InputGroup className="input-group-alternative">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="fa fa-comment" aria-hidden="true"></i>
													</InputGroupText>
												</InputGroupAddon>
												<Input
													type="textarea"
													name="about_me"
													value={this.state.Item.about_me}
													onChange={this.onChange}
													onBlur={this.onBlur}
													placeholder={this.FieldTitles.about_me}
												/>
											</InputGroup>
										</FormGroup>								
										<div className="text-muted font-italic">
											<small>
												password strength:{" "}
												<span className="text-success font-weight-700">strong</span>
											</small>
										</div>
										<Row className="my-4">
											<Col xs="12">
												<div className="custom-control custom-control-alternative custom-checkbox">
													<input
														className="custom-control-input"
														id="customCheckRegister"
														type="checkbox"
													/>
													<label
														className="custom-control-label"
														htmlFor="customCheckRegister"
													>
														<span className="text-muted">
															I agree with the{" "}
															<a href="#pablo" onClick={e => e.preventDefault()}>
																Privacy Policy
															</a>
														</span>
													</label>
												</div>
											</Col>
										</Row>
										<div className="text-center">
											<Button onClick={ this.onSubmit }  className="mt-4" color="primary" type="button">
												Create account
											</Button>
										</div>
									</Form>								
								</Else>												
								</If>																	


						</CardBody>
					</Card>
				</Col>
			</>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		Payload: state.Register.register
	}
	
}
export default connect(mapStateToProps, { registerUser })(Register);
