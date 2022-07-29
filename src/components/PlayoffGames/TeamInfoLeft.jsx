import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Grid, Typography } from '@mui/material'


export default function TeamInfoLeft (props) {
	const { conference, seedNumber, seedString, info } = props

	let getTeamInfo = null
  let imageString = ''

	if(info) {
		if(conference === 'AFC') {
			if(seedNumber <= 4) {
				getTeamInfo = info.afcDivisionChamps[seedNumber - 1]
			} else if(seedNumber > 4){
				getTeamInfo = info.afcWildCardTeams[seedNumber - 5]
			}
		} else if(conference === 'NFC') {
			if(seedNumber <= 4) {
				getTeamInfo = info.nfcDivisionChamps[seedNumber - 1]
			} else if(seedNumber > 4){
				getTeamInfo = info.nfcWildCardTeams[seedNumber - 5]
			}
		}

		imageString = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/" + getTeamInfo.abbreviation + ".png"
	}
	
	if (getTeamInfo) {
		return (
			<Grid container columns={24} alignItems="center">
				<Grid item xs={7}>
					<img src={imageString} alt="TODO" className = 'col-12'></img>
				</Grid>
				<Grid item xs={17} sx={{pl:1}}>
					<Grid container>
						<Grid item xs={17}>
							<Typography variant="body2" align="left">
								{seedString} Seed
							</Typography>
						</Grid>
						<Grid item xs={17}>
							<Typography variant="body2" align="left">
								{getTeamInfo.location}
							</Typography>
						</Grid>
						<Grid item xs={17}>
							<Typography variant="body2" align="left">
								Record: {getTeamInfo.overallRecord[0] + '-' + getTeamInfo.overallRecord[1]}
              	{getTeamInfo.overallRecord[2] !== 0 ? '-' + getTeamInfo.overallRecord[2] : ''}
							</Typography>
						</Grid>
					</Grid>
				</Grid>		
			</Grid>
		)
	}	else {
		return (
			<Grid container columns={24} alignItems="center">
				<Grid item xs={17} sx={{pl:1}}>
					<Grid container>
						<Grid item xs={17}>
							<Typography variant="body2" align="left">
								{seedString} Seed
							</Typography>
						</Grid>
					</Grid>
				</Grid>		
			</Grid>
		)
	}
}