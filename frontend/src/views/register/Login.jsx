import React from "react";
import { getAuthenticate, getExit } from 'reducers/Register/Actions'
import { connect } from 'react-redux'
import NotificationAlert from "components/Global/NotificationAlert"
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
	Col
} from "reactstrap"

import { Link } from "react-router-dom"
import { If, Then, Else } from 'react-if'

class Login extends React.Component {
	constructor() {
		super()
		this.state = {
			isLoged: false,
			User: {},
			UserAutenticated: false,
			Message: "",
			Requested: false,
			StatusLogin: true,
			UserData: {},
			Item: {
				login: "",
				password: "",
				remember: false
			}
		}
		this.Authenticate = this.Authenticate.bind(this)
		this.Exit = this.Exit.bind(this)
		this.onChange = this.onChange.bind(this)
	}
	Authenticate(event){

		event.preventDefault()
		let Post = {
			Method: "getAuthenticate",
			Item: this.state.Item
		}
		this.props.getAuthenticate(Post)
		this.setState({...this.state, Requested: true})

	}

	onChange(event){
		if (event.target.name === 'remember'){
			this.setState({...this.state, Item: {...this.state.Item, [event.target.name]: event.target.checked}})
		} else {
			this.setState({...this.state, Item: {...this.state.Item, [event.target.name]: event.target.value}})			
		}		
	}
	componentWillMount() {
		
		let newState = {...this.state, isLoged: this.props.auth.isLoged(), User: this.props.auth.getUser() }
		this.setState(newState)
	}
	componentWillReceiveProps(nextProps) {
		let newState = {...this.state}
		if (typeof nextProps.User === 'object'){
			if (typeof nextProps.User.Item === 'object'){
				if (this.props.auth.isLoged()){
					newState.isLoged = true
				} else {
					let options = {
						place: 'bl',
						message: (
							<div>
								Falha ao autenticar!
							</div>
						),
						type: "danger",
						autoDismiss: 7
					}
					this.refs.notify.notificationAlert(options);					
					newState.isLoged = false
				}				
				newState.User = nextProps.auth.getUser()
				newState.UserAutenticated = true
				this.setState(newState)
			}
		}
	}
	Exit(){
		let Post = {
			Method: "getExit",
			Item: this.state.Item
		}
		this.props.getExit(Post)
	}
	render() {
		return (
			<>
				<NotificationAlert ref="notify" />
				<If condition={ this.state.isLoged }>
					<Then>
						<Col lg="5" md="7">
							<Card className="bg-secondary shadow border-0">
								<Row className="justify-content-center">
									<Col className="order-lg-2" lg="3">
										<div className="card-profile-image">
											<a href="#pablo" onClick={e => e.preventDefault()}>
												<img
													alt="..."
													className="rounded-circle"
													src={require("assets/img/theme/image2vector.svg")}
												/>
											</a>
										</div>
									</Col>
								</Row>
								<CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
									<div className="d-flex justify-content-between">
										<Button
											className="mr-4"
											color="info"
											href="#pablo"
											onClick={e => e.preventDefault()}
											size="sm"
										>
											Config
										</Button>
										<Button
											className="float-right"
											color="default"
											href="#pablo"
											onClick={e => e.preventDefault()}
											size="sm"
										>
											Profile
										</Button>
									</div>
								</CardHeader>
								<CardBody className="pt-0 pt-md-4">
									<Row>
										<div className="col">
											<div className="card-profile-stats d-flex justify-content-center mt-md-5">
												<div>
													<span className="heading">22</span>
													<span className="description">Friends</span>
												</div>
												<div>
													<span className="heading">10</span>
													<span className="description">Photos</span>
												</div>
												<div>
													<span className="heading">89</span>
													<span className="description">Comments</span>
												</div>
											</div>
										</div>
									</Row>
									<div className="text-center">
										<h3>
											{this.state.User.unm}
											<span className="font-weight-light">, Idade</span>
										</h3>
										<div className="h5 font-weight-300">
											<i className="ni location_pin mr-2" />
											Endereço do Usuaŕio, Bairro, Cidade - SG 
										</div>
										<div className="h5 mt-4">
											<i className="ni business_briefcase-24 mr-2" />
											Cargo do Usuáriio - Profissão  do Usuário
										</div>
										<div>
											<i className="ni education_hat mr-2" />
											Formação do Usuário
										</div>
										<hr className="my-4" />
										<p>
											Breve descrição do perfil do usuário
										</p>
										<Button
											color="warning"
											onClick={this.Exit}
											size="sm"
										>
											Exit
										</Button>
									</div>
								</CardBody>
							</Card>
						</Col>
					</Then>
					<Else>
						<Col lg="5" md="7">
							<Card className="bg-secondary shadow border-0">
								<CardHeader className="bg-transparent pb-5">			
									<div className="text-muted text-center mt-2 mb-3">
										<small>Sign in with</small>
									</div>
									<div className="btn-wrapper text-center">
										<Button
											className="btn-neutral btn-icon"
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
										<small>Or sign in with credentials</small>
									</div>
									<Form role="form">
										<FormGroup className="mb-3">
											<InputGroup className="input-group-alternative">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-email-83" />
													</InputGroupText>
												</InputGroupAddon>
												<Input onChange={ this.onChange } name="login" placeholder="Email" type="email" />
											</InputGroup>
										</FormGroup>
										<FormGroup>
											<InputGroup className="input-group-alternative">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-lock-circle-open" />
													</InputGroupText>
												</InputGroupAddon>
												<Input onChange={ this.onChange } name="password" placeholder="Password" type="password" />
											</InputGroup>
										</FormGroup>
										<div className="custom-control custom-control-alternative custom-checkbox">
											<input
												onChange={ this.onChange } name="remember"
												className="custom-control-input"
												id=" customCheckLogin"
												type="checkbox"
											/>
											<label
												className="custom-control-label"
												htmlFor=" customCheckLogin"
											>
												<span className="text-muted">Remember me</span>
											</label>
										</div>
										<div className="text-center">
											<Button  onClick={ this.Authenticate }  className="my-4" color="primary" type="button">
												Sign in
											</Button>
										</div>
									</Form>
								</CardBody>
							</Card>
							<Row className="mt-3">
								<Col xs="6">
									<Link to="/auth/recover-password"><small>Forgot password?</small></Link> 
								</Col>
								<Col className="text-right" xs="6">
									<Link to="/auth/register"><small>Create new account</small></Link> 
								</Col>
							</Row>
						</Col>
					</Else>
				</If>
			</>
		);
	}
}

const mapStateToProps = (state, props) => {
	// debugger
	return {
		auth: state.Register.auth,
		User: state.Register.login
	}
	
}
export default connect(mapStateToProps, { getAuthenticate, getExit })(Login);