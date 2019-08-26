import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import routes from './routes'
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/Admin" render={props => <AdminLayout {...props} />} />
				<Route path="/auth" render={props => <AuthLayout {...props} />} />
				{routes.map((prop, key) => {
					return <Route path={prop.path} key={key} component={prop.component} />;
				})}
				<Redirect from="/" to="/Admin/index" />		
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
