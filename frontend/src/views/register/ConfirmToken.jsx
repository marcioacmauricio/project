import React from "react";
import {
	Card,
	CardBody,
	CardHeader,
	Col,
	Alert,
	CardText
} from "reactstrap";
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { confirmTokenMail } from 'reducers/Register/Actions'


class ConfirmToken extends React.Component {
	constructor() {
		super()
		this.state = {
			StatusAlert: true,
			Status: true,
			Message: ""
		}
	}

	componentWillMount(){
		// debugger
		let Post = {
			Method: "confirmTokenMail",
			Item: {
				Token: this.props.match.params.Token
			}
		}
		this.props.confirmTokenMail(Post)
	}
	componentWillReceiveProps(nextProps) {
		debugger
		this.setState({ Status: nextProps.Payload.Status, Message: nextProps.Payload.Message })
	}

	render() {
		let ContentAlert = 	<CardBody>
			<Alert color="success">
				{this.state.Message}
			</Alert>
			<CardText>Clique <Link to="/auth/login">Aqui</Link> para autenticar-se!</CardText>
		</CardBody>

		if (!this.state.Status) {
			ContentAlert = 	<CardBody>
				<Alert color="danger">
					{this.state.Message}
				</Alert>
				<CardText>Clique <Link to="/auth/recover-password">Aqui</Link> para solicitar novo link de confirmação</CardText>
			</CardBody>
		} 		
		return (
			<>
				<Col lg="6" md="8">
					<Card className="bg-secondary shadow border-0">
						<CardHeader>Confirmação de e-mail</CardHeader>
						<CardBody>
							{ContentAlert}
						</CardBody>
					</Card>
				</Col>
			</>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		Payload: state.Register.tokem_mail
	}
	
}
export default connect(mapStateToProps, { confirmTokenMail })(ConfirmToken);