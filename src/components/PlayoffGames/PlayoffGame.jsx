import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Grid, Card } from '@mui/material'
import TeamInfoRight from './TeamInfoRight';
import TeamInfoLeft from './TeamInfoLeft';
import { AlternateEmail} from "@mui/icons-material";


export default function PlayoffGame (props) {
  return (
		<Card variant="outlined" sx={{bgcolor:'#eeeeee'}}>
	  	<Grid container columns={18} alignItems="center">
    		<Grid item xs={8} >
  	    	<TeamInfoLeft />
      	</Grid>
	  		<Grid item xs={2} sx={{px:1.25}}>
      		<AlternateEmail sx={{ width: '100%' }} />
    		</Grid>
  	  	<Grid item xs={8}>
					<TeamInfoRight />
      	</Grid>
    	</Grid>
		</Card>
  )
}