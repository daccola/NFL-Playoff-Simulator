import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Grid } from '@mui/material'
import NFCByeContainer from './NFCByeContainer';
import NFCWildCardContainer from './NFCWildCardContainer';



export default function NFCPlayoffSeeds (props) {
  return (
    <Grid container spacing={2} > 
        <Grid item xs={12} >
          <NFCByeContainer />
        </Grid>
        <Grid item xs={12} >
          <NFCWildCardContainer />
        </Grid>
    </Grid>
  )  
}

NFCPlayoffSeeds.propTypes = {
// TODO Add PropTypes
}