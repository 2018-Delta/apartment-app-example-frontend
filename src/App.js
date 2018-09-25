import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import AuthService from './services'


import ApartmentContainer from './containers/ApartmentContainer'
import Register from './pages/users/Register'
import Login from './pages/users/Login'

class App extends Component {
	render() {
		let auth = new AuthService()

		return (
			<Router>
				{(auth.loggedIn())
				// if logged in
				? <Switch>
					<Route path="/apartments" component={ApartmentContainer} />
				</Switch>
				// if not logged in (ie Guest User)
				: <Switch>
					<Redirect from="/apartments" to="/register" />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
				</Switch>}
			</Router>
		)
	}
}

export default App
