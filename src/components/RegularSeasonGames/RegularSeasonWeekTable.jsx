import React from "react";
import PropTypes from 'prop-types'

import RegularSeasonWeek from "./RegularSeasonWeek"

export default function RegularSeasonWeekTable (props) {
	const { userCurrentWeek, weekCallback } = props

	const weeks = []
	for (let i = 1; i <= 18; i++) {
		if ( i == userCurrentWeek ) {
  		weeks.push(<RegularSeasonWeek key={i} week={i} weekCallback={weekCallback} active="true" />)
		} else {
			weeks.push(<RegularSeasonWeek key={i} week={i} weekCallback={weekCallback}/>)
		}
	}
  
	return (
		<div>
			<ul className="nav nav-pills mb-3" role="tablist">
				{weeks}
			</ul>
		</div>  		
	)
}
	
	
