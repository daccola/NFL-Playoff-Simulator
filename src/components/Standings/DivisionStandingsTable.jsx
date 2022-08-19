import React from 'react'
import PropTypes from 'prop-types'

import Stack from '@mui/material/Stack'
import DivisionStandings from './DivisionStandings';
import { Paper, Grid, Container, Tabs, Tab, AppBar, Box } from '@mui/material'

export default function DivisionStandingsTable (props) {
  const { conference, str } = props

  return (
    <>
      {/* TODO Look into removing height */}
      <Box sx={{ flexGrow: 1, display: 'flex', height: 124 }}>
        <Tabs orientation="vertical" spacing={1} variant="scrollable" sx={{ flexGrow: 1, display: 'flex'}}>
          <DivisionStandings conference={conference} division="North" str={str} />
          <DivisionStandings conference={conference} division="South" str={str} />
          <DivisionStandings conference={conference} division="East" str={str} />
          <DivisionStandings conference={conference} division="West" str={str} />
        </Tabs>
      </ Box>
    </>		
  )
}

DivisionStandings.propTypes = {
// TODO Add PropTypes
}