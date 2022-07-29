import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, Card } from '@mui/material'
import TeamInfoLeft from './TeamInfoLeft'

export default function AFCByeContainer (props) {
  const { info } = props

  return (
    <Grid container>
      <Grid item xs={12} sx={{pt:0}}>
        <Typography variant="h4" align="right" sx={{px:1}}>
          AFC
    	  </Typography>
      </Grid>
      <Grid item xs={12} sx={{pt:0}}>
        <Typography variant="body2" align="left" sx={{px:1}}>
          FIRST-ROUND BYE
    	  </Typography>
      </Grid>
      <Grid item xs={12} sx={{p:0}}>
        <Card variant="outlined" sx={{bgcolor:'#eeeeee'}}>
	        <Grid container columns={18} alignItems="center">
            <Grid item xs={8} >
  	          <TeamInfoLeft conference={"AFC"} seedNumber={1} seedString={"1st"} info={info} />
            </Grid>
          </Grid>
	      </Card>
      </Grid>         
    </Grid>
  )
}