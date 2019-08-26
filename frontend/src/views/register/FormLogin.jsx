import React from 'react'
import { Container, Row } from 'reactstrap'
import { HeaderAdmin } from 'components/Headers'
import Login from "views/register/Login"
export default class FormLogin extends React.Component {
	render() {
		return (
			<>   
				<HeaderAdmin />				
				<Container className="text-center mt--7" fluid>		
					<Row className="justify-content-center">
						<Login {...this.props} />
					</Row>
				</Container>
			</>     			

		);
	}
}