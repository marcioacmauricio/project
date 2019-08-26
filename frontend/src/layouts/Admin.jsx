import React from "react";
import { Route, Switch } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.jsx";
import AdminFooter from "components/Footers/AdminFooter.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import routes from "routes"
import menus from "menus"
import { connect } from 'react-redux'
class Admin extends React.Component {
	constructor() {
		super()
		this.state = {
			isLoged: false,
			User: {}
		}
	}
	componentWillReceiveProps(nextProps) {
		let newState = {...this.state}
		newState.isLoged = nextProps.auth.isLoged()
		newState.User =nextProps.auth.getUser()
		this.setState(newState)
	}
	componentDidUpdate(e) {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		this.refs.mainContent.scrollTop = 0;
	}
	getRoutes = routes => {
		// debugger
		return routes.map((prop, key) => {
			if (prop.layout === "/admin") {
				return (
					<Route
						path={prop.layout + prop.path}
						component={ prop.component }
						key={key}
					/>
				);
			} else {
				return null;
			}
		});
	};
	getBrandText = path => {
		for (let i = 0; i < routes.length; i++) {
			if (
				this.props.location.pathname.indexOf(
					routes[i].layout + routes[i].path
				) !== -1
			) {
				return routes[i].name;
			}
		}
		return "Brand";
	};
	render() {
		return (
			<>
				<Sidebar
					{...this.props}
					routes={routes}
					menus={menus}
					logo={{
						innerLink: "/admin/index",
						imgSrc: require("assets/img/brand/logo_matrisys.png"),
						imgAlt: "..."
					}}
				/>
				<div className="main-content" ref="mainContent">
					<AdminNavbar
						{...this.props}
						brandText={this.getBrandText(this.props.location.pathname)}
					/>
					<Switch>{this.getRoutes(routes)}</Switch>
					<Container fluid>
						<AdminFooter />
					</Container>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state, props) => {
	// debugger
	return {
		auth: state.Register.auth,
		User: state.Register.user
	} 
}
export default connect(mapStateToProps)(Admin);
