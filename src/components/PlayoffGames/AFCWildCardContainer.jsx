import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Typography } from '@mui/material'
import PlayoffGame from './PlayoffGame'

export default function AFCWildCardContainer (props) {
  return (
    <Grid container >
      <Grid item xs={12} sx={{pt:0}}>
        <Typography variant="body2" sx={{px:1}}>
          WILD-CARD GAMES
    	  </Typography>
      </Grid>
      <Grid item xs={12} sx={{pb:1}}>
				<PlayoffGame />
      </Grid>     
			<Grid item xs={12} sx={{pb:1}}>
				<PlayoffGame />
      </Grid>    
			<Grid item xs={12}>
				<PlayoffGame />
      </Grid>        
    </Grid>
  )
}