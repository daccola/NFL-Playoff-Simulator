import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Grid, Typography } from '@mui/material'


export default function TeamInfoLeft (props) {
  return (
		<Grid container columns={24} alignItems="center">
			<Grid item xs={7}>
				<img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/gb.png" alt="TODO" className = 'col-12'></img>
			</Grid>
			<Grid item xs={17} sx={{pl:1}}>
				<Grid container>
					<Grid item xs={17}>
						<Typography variant="body2" align="left">
							1st Seed
						</Typography>
					</Grid>
					<Grid item xs={17}>
						<Typography variant="body2" align="left">
							San Francisco
						</Typography>
					</Grid>
					<Grid item xs={17}>
						<Typography variant="body2" align="left">
							Record: 16-0-0
						</Typography>
					</Grid>
				</Grid>
			</Grid>		
		</Grid>
  )
}