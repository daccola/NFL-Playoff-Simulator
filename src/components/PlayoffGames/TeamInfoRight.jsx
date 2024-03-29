import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Grid, Typography } from '@mui/material'
import { useEffect, useState} from 'react';


export default function TeamInfoRight (props) {
	const { conference, seedNumber, seedString, info } = props

	const [teamInfo, getTeamInfo] = useState(null)

  useEffect(() => {
		if(conference === 'AFC') {
			if(seedNumber <= 4) {
				getTeamInfo(JSON.parse(info).afcDivisionChamps[seedNumber - 1])
			} else if(seedNumber > 4){
				getTeamInfo(JSON.parse(info).afcWildCardTeams[seedNumber - 5])
			}
		} else if(conference === 'NFC') {
			if(seedNumber <= 4) {
				getTeamInfo(JSON.parse(info).nfcDivisionChamps[seedNumber - 1])
			} else if(seedNumber > 4){
				getTeamInfo(JSON.parse(info).nfcWildCardTeams[seedNumber - 5])
			}
		}
	}, [info])

	return (
		<Grid container columns={24} alignItems="center">
			<Grid item xs={17} sx={{pr:1}}>
				<Grid container>
					<Grid item xs={17}>
						<Typography variant="body2" align="right">
							{seedString} Seed
						</Typography>
					</Grid>
					<Grid item xs={17}>
						<Typography variant="body2" align="right">
							{teamInfo ? teamInfo.location : '_' }
						</Typography>
					</Grid>
					<Grid item xs={17}>
						<Typography variant="body2" align="right">
							{teamInfo ? 'Record: ' + teamInfo.overallRecord[0] + '-' + teamInfo.overallRecord[1] : '_'}
							{teamInfo && teamInfo.overallRecord[2] !== 0 && '-' + teamInfo.overallRecord[2]}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={7}>
				{teamInfo && <img src={teamInfo.url} alt="TODO" className = 'col-12'></img>}
			</Grid>
		</Grid>
	)
}