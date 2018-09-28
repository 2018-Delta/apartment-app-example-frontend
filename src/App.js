import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import AuthService from './services'

import Apartments from './pages/apartments/All'
import Apartment from './pages/apartments/Show'
import ApartmentCreate from './pages/apartments/New'
import ApartmentEdit from './pages/apartments/Edit'

import Register from './pages/Register'
import Login from './pages/Login'

const auth = new AuthService()

class App extends Component {
	render() {
		console.log(auth.loggedIn());
		return (
			<Router>
				{(auth.loggedIn())
				// if logged in
				? <Switch>
					<Route exact path="/apartments/new" component={ApartmentCreate} />
					<Route path="/users/:user_id/apartments/:id/edit" component={ApartmentEdit} />
					<Route exact path="/users/:user_id/apartments/:id" component={Apartment} />
					<Route exact path="/apartments" component={Apartments} />
				</Switch>
				// if not logged in (ie Guest User)
				: <Switch>
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
					<Route exact path="/apartments" component={Apartments} />
					<Redirect from="/apartments/*" to={Apartments} />
					<Route exact path="/" component={Apartments} />
				</Switch>}
			</Router>
		)
	}
}

export default App
