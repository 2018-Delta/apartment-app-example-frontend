import React, { Component } from 'react'

import AuthService from '../../services'

class New extends Component {
	constructor(props) {
		super(props)

		this.auth = new AuthService()
		this.state = {
			apartment: {
				title: "",
				description: "",
				street1: "",
				street2: "",
				city: "",
				state: "",
				zipcode: "",
				user_id: this.auth.getUserId()
			}
		}
	}

	render() {
		console.log("found new apartment page");
		return (
			<main>
				<form>
					<input />
					<input />
				</form>
			</main>
		)
	}

	handleChange = (e) => {

	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.auth.createApartment(this.state)
	}
}

export default New
