import React from 'react'
import PropTypes from 'prop-types'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, Grid, Container, Stack, Typography } from '@mui/material'
import TeamInfoRight from './TeamInfoRight';
import TeamInfoLeft2 from './TeamInfoLeft';


export default function PlayoffGame (props) {
  return (
	  <Grid container columns={18} alignItems="center"sx={{border: "1px solid grey", bgcolor:'#eeeeee'}}>
      <Grid item xs={8} >
  	    <TeamInfoLeft2 />
      </Grid>
      <Grid item xs={2}>
				<Typography variant="body2" >
    			@
      	</Typography>
  	  </Grid>
  	  <Grid item xs={8}>
				<TeamInfoRight />
      </Grid>
    </Grid>
  )
}