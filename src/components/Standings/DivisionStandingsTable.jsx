import React from 'react'
import PropTypes from 'prop-types'

import Stack from '@mui/material/Stack'
import DivisionStandings from './DivisionStandings';

export default function DivisionStandingsTable (props) {
  return (
    <>
      <Stack spacing={2}>
        <DivisionStandings />
        <DivisionStandings />
        <DivisionStandings />
        <DivisionStandings />
      </Stack>  	
    </>		
  )
}

DivisionStandings.propTypes = {
// TODO Add PropTypes
}