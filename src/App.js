import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AuthService from './services'

import Apartments from './pages/apartments/All'
import Apartment from './pages/apartments/Show'
import ApartmentCreate from './pages/apartments/New'
import ApartmentEdit from './pages/apartments/Edit'

import Register from './pages/Register'
import Login from './pages/Login'

class App extends Component {
	render() {
		let auth = new AuthService()

		return (
			<Router>
				{(auth.loggedIn())
				// if logged in
				? <Switch>
					<Route path="/apartments" component={Apartments} />
					<Route path="/apartments/:id" component={Apartment} />
					<Route path="/apartments/new" component={ApartmentCreate} />
					<Route path="/apartments/:id/edit" component={ApartmentEdit} />
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
