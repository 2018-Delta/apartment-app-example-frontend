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
				manager: "",
				hours: "",
				phone: "",
				user_id: this.auth.getUserId()
			}
		}
	}
	
	render() {
		let {title, description, street1, street2, city, state, zipcode, manager, hours, phone} = this.state.apartment
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label for="title"></label>
					<input
						type="text"
						name="title"
						onChange={this.handleChange()}
						value={title}
						placeholder="Title"
					/>

					<label for="description"></label>
					<input
						type="text"
						name="description"
						onChange={this.handleChange()}
						value={description}
						placeholder="Description of the property"
					/>

					<label for="street1"></label>
					<input
						type="text"
						name="street1"
						onChange={this.handleChange()}
						value={street1}
						placeholder="Street Address"
					/>

					<label for="street2"></label>
					<input
						type="text"
						name="street2"
						onChange={this.handleChange()}
						value={street2}
						placeholder=""
					/>

					<label for="city"></label>
					<input
						type="text"
						name="city"
						onChange={this.handleChange()}
						value={city}
						placeholder="City"
					/>

					<label for="state"></label>
					<input
						type="text"
						name="state"
						onChange={this.handleChange()}
						value={state}
						placeholder="State"
					/>

					<label for="zipcode"></label>
					<input
						type="text"
						name="zipcode"
						onChange={this.handleChange()}
						value={zipcode}
						placeholder="Zipcode"
					/>

					<label for="manager"></label>
					<input
						type="text"
						name="manager"
						onChange={this.handleChange()}
						value={manager}
						placeholder="Property manager name"
					/>

					<label for="hours"></label>
					<input
						type="text"
						name="hours"
						onChange={this.handleChange()}
						value={hours}
						placeholder="Manager hours"
					/>

					<label for="phone"></label>
					<input
						type="text"
						name="phone"
						onChange={this.handleChange()}
						value={phone}
						placeholder="Manager phone number"
					/>

					<button onClick={this.handleSubmit}>Create Apartment</button>
				</form>
			</div>
		)
	}
}

export default New
