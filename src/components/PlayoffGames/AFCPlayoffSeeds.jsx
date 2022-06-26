import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Grid } from '@mui/material'
import AFCByeContainer from './AFCByeContainer';
import WildCardContainer from './AFCWildCardContainer';



export default function AFCPlayoffSeeds (props) {
  return (
    <Grid container spacing={2} >
      <Grid item xs={12} >
        <AFCByeContainer />
      </Grid>
      <Grid item xs={12} >
        <WildCardContainer />
      </Grid>
    </Grid>
  ) 
}

AFCPlayoffSeeds.propTypes = {
// TODO Add PropTypes
}