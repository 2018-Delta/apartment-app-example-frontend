import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Apartments from '../pages/apartments/All'
import Apartment from '../pages/apartments/Show'
import ApartmentCreate from '../pages/apartments/New'
import ApartmentEdit from '../pages/apartments/Edit'

class ApartmentContainer extends Component {
	render() {
		console.log("found apartment container");
		console.log(this.props.match);
		return (
			<div>
				<Switch>
					<Route path={`${this.props.match.path}/new`} component={ApartmentCreate} />
					<Route path={`${this.props.match.path}/:id`} component={Apartment} />
					<Route path={`${this.props.match.path}/:id/edit`} component={ApartmentEdit} />
					<Route path="/" component={Apartments} />
				</Switch>
			</div>
		)
	}
}

export default ApartmentContainer
