import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Grid } from '@mui/material'
import NFCByeContainer from './NFCByeContainer';
import NFCWildCardContainer from './NFCWildCardContainer';



export default function NFCPlayoffSeeds (props) {
  const { info } = props

  return (
    <Grid container spacing={2} > 
      <Grid item xs={12} >
        <NFCByeContainer info={info} />
      </Grid>
      <Grid item xs={12} >
        <NFCWildCardContainer info={info} />
      </Grid>
    </Grid>
  )  
}

NFCPlayoffSeeds.propTypes = {
// TODO Add PropTypes
}