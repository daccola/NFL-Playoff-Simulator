import React from 'react'
import PropTypes from 'prop-types'


import { Grid, Typography, Card } from '@mui/material'
import TeamInfoRight from './TeamInfoRight';


export default function NFCByeContainer (props) {
  const { info } = props

  return (
    <Grid container >
      <Grid item xs={12} sx={{pt:0}}>
        <Typography variant="h4" align="left" sx={{px:1}}>
          NFC
    	  </Typography>
      </Grid>
      <Grid item xs={12} sx={{pt:0}}>
        <Typography variant="body2" align="right" sx={{px:1}}>
          FIRST-ROUND BYE
    	  </Typography>
      </Grid>
      <Grid item xs={12} sx={{px:0, pb:0}}>
        <Card variant="outlined" sx={{bgcolor:'#eeeeee'}}>
	        <Grid container columns={18} alignItems="center">
            <Grid item xs={10} >
            </Grid>
            <Grid item xs={8} >
  	          <TeamInfoRight conference={"NFC"} seedNumber={1} seedString={"1st"} info={info} />
            </Grid>
          </Grid>
	      </Card>
      </Grid>         
    </Grid>
  )
}