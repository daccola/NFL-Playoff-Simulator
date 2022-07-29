import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Grid } from '@mui/material'
import AFCByeContainer from './AFCByeContainer';
import AFCWildCardContainer from './AFCWildCardContainer';



export default function AFCPlayoffSeeds (props) {
  const { info } = props


  return (
    <Grid container spacing={2} >
      <Grid item xs={12} >
        <AFCByeContainer info={info}/>
      </Grid>
      <Grid item xs={12} >
        <AFCWildCardContainer info={info}/>
      </Grid>
    </Grid>
  ) 
}

AFCPlayoffSeeds.propTypes = {
// TODO Add PropTypes
}