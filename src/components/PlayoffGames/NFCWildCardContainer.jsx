import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Typography } from '@mui/material'
import PlayoffGame from './PlayoffGame'

export default function NFCWildCardContainer (props) {
  const { info } = props

  return (
    <Grid container >
      <Grid item xs={12} sx={{pt:0}}>
        <Typography variant="body2" align="right" sx={{px:1}}>
          WILD-CARD GAMES
    	  </Typography>
      </Grid>
      <Grid item xs={12} sx={{pb:1}}>
				<PlayoffGame conference={"NFC"} leftSeedNumber={"7"} leftSeedString={"7th"} rightSeedNumber={2} rightSeedString={"2nd"} info={info} />
      </Grid>     
			<Grid item xs={12} sx={{pb:1}}>
        <PlayoffGame conference={"NFC"}leftSeedNumber={"6"} leftSeedString={"6th"} rightSeedNumber={3} rightSeedString={"3rd"} info={info} />
      </Grid>    
			<Grid item xs={12}>
        <PlayoffGame conference={"NFC"} leftSeedNumber={"5"} leftSeedString={"5th"} rightSeedNumber={4} rightSeedString={"4th"} info={info} />
      </Grid>        
    </Grid>
  )
}