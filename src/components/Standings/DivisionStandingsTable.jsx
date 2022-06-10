import React from 'react'
import PropTypes from 'prop-types'

import Stack from '@mui/material/Stack'
import DivisionStandings from './DivisionStandings';
import { Paper, Grid, Container, Tabs, Tab, AppBar, Box } from '@mui/material'

export default function DivisionStandingsTable (props) {
  return (
    <>
    {/* TODO Look into removing height */}
      <Box sx={{ flexGrow: 1, display: 'flex', height: 124 }}>
        <Tabs orientation="vertical" variant="scrollable" sx={{ flexGrow: 1, display: 'flex'}}>
          <DivisionStandings />
          <DivisionStandings />
          <DivisionStandings />
          <DivisionStandings />
        </Tabs>
      </ Box>
    </>		
  )
}

DivisionStandings.propTypes = {
// TODO Add PropTypes
}