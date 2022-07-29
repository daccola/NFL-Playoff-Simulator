import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Grid, Card } from '@mui/material'
import TeamInfoRight from './TeamInfoRight';
import TeamInfoLeft from './TeamInfoLeft';
import { AlternateEmail} from "@mui/icons-material";


export default function PlayoffGame (props) {
	const { conference, leftSeedNumber, leftSeedString, rightSeedNumber, rightSeedString, info } = props

  return (
		<Card variant="outlined" sx={{bgcolor:'#eeeeee'}}>
	  	<Grid container columns={18} alignItems="center">
    		<Grid item xs={8} >
  	    	<TeamInfoLeft conference={conference} seedNumber={leftSeedNumber} seedString={leftSeedString} info={info}/>
      	</Grid>
	  		<Grid item xs={2} sx={{px:1.25}}>
      		<AlternateEmail sx={{ width: '100%' }} />
    		</Grid>
  	  	<Grid item xs={8}>
					<TeamInfoRight conference={conference} seedNumber={rightSeedNumber} seedString={rightSeedString} info={info}/>
      	</Grid>
    	</Grid>
		</Card>
  )
}