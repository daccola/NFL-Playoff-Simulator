import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Grid, Container, Button, Tabs, Tab, Card, Box, AppBar } from '@mui/material'


import RegularSeasonGame from './RegularSeasonGame.jsx'

export default function RegularSeasonGamesTable(props) {
  const { games } = props
  return (
    <>
  	  <Grid container spacing={2} columns={144} > 
        <Grid item xs={144} >
          <Tabs value="3" variant="scrollable" scrollButtons >
            <Tab label="Week 1" />
            <Tab label="Week 2" />
            <Tab label="Week 3" value="3" />
            <Tab label="Week 4" />
            <Tab label="Week 5" />
            <Tab label="Week 6" />
            <Tab label="Week 7" />
            <Tab label="Week 8" />
            <Tab label="Week 9" />
            <Tab label="Week 10" />
            <Tab label="Week 11" />
            <Tab label="Week 12" />
            <Tab label="Week 13" />
            <Tab label="Week 14" />
            <Tab label="Week 15" />
            <Tab label="Week 16" />
            <Tab label="Week 17" />
            <Tab label="Week 18" />
          </Tabs>       
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame />
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame />
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame />
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame />
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame />
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame />
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame />
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame />
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame />
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame />
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame />
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame />
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame />
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame />
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame />
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame />
        </Grid>
      </Grid>
    </>
  )
}

RegularSeasonGamesTable.propTypes = {
// TODO Add PropTypes
}