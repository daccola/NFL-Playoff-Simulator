import React from "react";
import PropTypes from 'prop-types'

export default function RegularSeasonWeek (props) {
	const { week, weekCallback, active } = props

	const onButtonClicked = (event) => {
    event.preventDefault()
    if (weekCallback) {
    	weekCallback(week)
    }
  }

	if (active) {
		return (
			<li className="nav-item" role="presentation">
				<button className="nav-link active" data-bs-toggle="pill" onClick={onButtonClicked}>Week {week}</button>
			</li>    		
		)
	} else {
		return (
			<li className="nav-item" role="presentation">
				<button className="nav-link" data-bs-toggle="pill" onClick={onButtonClicked}>Week {week}</button>
			</li>    		
		)
	}
}
