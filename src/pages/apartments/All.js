import React, { Component } from 'react'

import ApartmentCard from '../../components/ApartmentCard'

class All extends Component {
	render() {
		return (
			<div>
				{this.props.apartments.map(apartment => <ApartmentCard apartment={apartment} />)}
			</div>
		)
	}
}

export default All
