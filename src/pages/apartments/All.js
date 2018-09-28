import React, { Component } from 'react'

import ApartmentCard from '../../components/ApartmentCard'

const PENDING = 'PENDING'
const LOADING = 'LOADING'
const LOADED = 'LOADED'

class All extends Component {
	constructor(props) {
		super(props)

		this.state = {
			apartments: [],
			status: PENDING
		}
	}

	componentDidMount() {
		fetch('http://localhost:3001/apartments')
		.then(res => res.json())
		.then(json => {
			this.setState({
				apartments: json,
				status: LOADED
			})
		})
	}

	render() {
		let { apartments, status } = this.state

		if(status === PENDING) {
			return (
				<div>
					<p>Apartments are loading</p>
				</div>
			)
		}

		if (status === LOADED && apartments.length === 0) {
			return (
				<div>
					<p> There are no apartments yet! </p>
				</div>
			)
		}

		if (status === LOADED && apartments.length > 0) {
			return (
				<div>
					{apartments.map(apartment => <ApartmentCard key={apartment.id} apartment={apartment} />)}
				</div>
			)
		}


		return (
			<p>Opps! - No apartments found!</p>
		)
	}
}

export default All
