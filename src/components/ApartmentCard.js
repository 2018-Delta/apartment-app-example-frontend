import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ApartmentCard extends Component {
	render() {
		let { apartment } = this.props

		return (
			<Link to="#">
				<article className="cardWrapper">
					<div></div>
					<div>
						<h3>{apartment.title}</h3>
						<p>{apartment.description}</p>
						<div className="address">
							<p>{apartment.street1}</p>
							{apartment.street2 && <p>apartment.street2</p>}
							<p>{`${apartment.city}, ${apartment.state}, ${apartment.zipcode}`}</p>
						</div>
					</div>
				</article>
			</Link>
		)
	}
}

export default ApartmentCard
