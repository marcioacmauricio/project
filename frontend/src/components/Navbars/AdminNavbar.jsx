import React from "react";
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { getExit } from 'reducers/Register/Actions'
// reactstrap components
import {
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Form,
	FormGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	InputGroup,
	Navbar,
	Nav,
	Container,
	Media
} from "reactstrap";

class AdminNavbar extends React.Component {
	constructor() {
		super()
		this.state = {
			isLoged: false,
			User: {}
		}
		this.Logout = this.Logout.bind(this)
	}
	componentWillReceiveProps(nextProps) {
		let newState = {...this.state}
		if (typeof nextProps.User === 'object'){
			if (typeof nextProps.User.Item === 'object'){   
				newState.User = nextProps.User
				this.setState(newState)
			}
		}
	} 
	Logout(e){
		let Post = {
			Method: "getExit"
		}
		this.props.getExit(Post)
	}
	render() {
		const User = this.props.auth.getUser()
		return (
			<>
				<Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
					<Container fluid>
						<Link
							className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
							to="/"
						>
							{this.props.brandText}
						</Link>
						<Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
							<FormGroup className="mb-0">
								<InputGroup className="input-group-alternative">
									<InputGroupAddon addonType="prepend">
										<InputGroupText>
											<i className="fas fa-search" />
										</InputGroupText>
									</InputGroupAddon>
									<Input placeholder="Search" type="text" />
								</InputGroup>
							</FormGroup>
						</Form>
						<Nav className="align-items-center d-none d-md-flex" navbar>
							<UncontrolledDropdown nav>
								<DropdownToggle className="pr-0" nav>
									<Media className="align-items-center">
										<span className="avatar avatar-sm rounded-circle">
											<img
												alt="..."
												src={require("assets/img/theme/image2vector.svg")}
											/>
										</span>
										<Media className="ml-2 d-none d-lg-block">
											<span className="mb-0 text-sm font-weight-bold">
												{ User.unm }
											</span>
										</Media>
									</Media>
								</DropdownToggle>
								<DropdownMenu className="dropdown-menu-arrow" right>
									<DropdownItem className="noti-title" header tag="div">
										<h6 className="text-overflow m-0">Welcome!</h6>
									</DropdownItem>
									<DropdownItem to="/auth/login" tag={Link}>
										<i className="ni ni-single-02" />
										<span>My profile</span>
									</DropdownItem>
									<DropdownItem to="/admin/user-profile" tag={Link}>
										<i className="ni ni-settings-gear-65" />
										<span>Settings</span>
									</DropdownItem>
									<DropdownItem to="/admin/user-profile" tag={Link}>
										<i className="ni ni-calendar-grid-58" />
										<span>Activity</span>
									</DropdownItem>
									<DropdownItem to="/admin/user-profile" tag={Link}>
										<i className="ni ni-support-16" />
										<span>Support</span>
									</DropdownItem>
									<DropdownItem divider />
									<DropdownItem onClick={ this.Logout }>
										<i className="ni ni-user-run" />
										<span>Logout</span>
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Container>
				</Navbar>
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
export default connect(mapStateToProps, { getExit })(AdminNavbar);
