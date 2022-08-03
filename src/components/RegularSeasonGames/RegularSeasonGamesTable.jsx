import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Grid, Container, Button, Tabs, Tab, Card, Box, AppBar } from '@mui/material'
import RegularSeasonGame from './RegularSeasonGame.jsx'

export default function RegularSeasonGamesTable(props) {
  const { info } = props

  const [tabValue, setTabValue] = React.useState("1");
 
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  }

  if(info) {
    return (
      <Grid container spacing={1} columns={144} > 
        <Grid item xs={144} >
          <Tabs value={tabValue} onChange={handleTabChange} variant="scrollable" scrollButtons textColor="secondary" indicatorColor="secondary">
            <Tab label="Week 1" value="1" />
            <Tab label="Week 2" value="2" />
            <Tab label="Week 3" value="3" />
            <Tab label="Week 4" value="4" />
            <Tab label="Week 5" value="5" />
            <Tab label="Week 6" value="6" />
            <Tab label="Week 7" value="7" />
            <Tab label="Week 8" value="8" />
            <Tab label="Week 9" value="9" />
            <Tab label="Week 10" value="10" />
            <Tab label="Week 11" value="11" />
            <Tab label="Week 12" value="12" />
            <Tab label="Week 13" value="13" />
            <Tab label="Week 14" value="14" />
            <Tab label="Week 15" value="15" />
            <Tab label="Week 16" value="16" />
            <Tab label="Week 17" value="17" />
            <Tab label="Week 18" value="18" />
          </Tabs>       
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame game={info.gameInfoToDate[parseInt(tabValue)][0]}/>
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame game={info.gameInfoToDate[parseInt(tabValue)][1]}/>
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame game={info.gameInfoToDate[parseInt(tabValue)][2]}/>
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame game={info.gameInfoToDate[parseInt(tabValue)][3]}/>
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame game={info.gameInfoToDate[parseInt(tabValue)][4]}/>
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame game={info.gameInfoToDate[parseInt(tabValue)][5]}/>
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame game={info.gameInfoToDate[parseInt(tabValue)][6]}/>
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame game={info.gameInfoToDate[parseInt(tabValue)][7]}/>
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame game={info.gameInfoToDate[parseInt(tabValue)][8]}/>
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame game={info.gameInfoToDate[parseInt(tabValue)][9]}/>
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame game={info.gameInfoToDate[parseInt(tabValue)][10]}/>
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame game={info.gameInfoToDate[parseInt(tabValue)][11]}/>
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame game={info.gameInfoToDate[parseInt(tabValue)][12]}/>
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame game={info.gameInfoToDate[parseInt(tabValue)][13]}/>
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame game={info.gameInfoToDate[parseInt(tabValue)][14]}/>
        </Grid>
        <Grid item xs={18}>
          <RegularSeasonGame game={info.gameInfoToDate[parseInt(tabValue)][15]}/>
        </Grid>
      </Grid>
    )
  }
  else {
    return (
      <Grid container spacing={1} columns={144} > 
        <Grid item xs={144} >
          <Tabs value={tabValue} onChange={handleTabChange} variant="scrollable" scrollButtons textColor="secondary" indicatorColor="secondary">
            <Tab label="Week 1" value="1" />
            <Tab label="Week 2" value="2" />
            <Tab label="Week 3" value="3" />
            <Tab label="Week 4" value="4" />
            <Tab label="Week 5" value="5" />
            <Tab label="Week 6" value="6" />
            <Tab label="Week 7" value="7" />
            <Tab label="Week 8" value="8" />
            <Tab label="Week 9" value="9" />
            <Tab label="Week 10" value="10" />
            <Tab label="Week 11" value="11" />
            <Tab label="Week 12" value="12" />
            <Tab label="Week 13" value="13" />
            <Tab label="Week 14" value="14" />
            <Tab label="Week 15" value="15" />
            <Tab label="Week 16" value="16" />
            <Tab label="Week 17" value="17" />
            <Tab label="Week 18" value="18" />
          </Tabs>       
        </Grid>
      </Grid>
    )
  }
}

RegularSeasonGamesTable.propTypes = {
// TODO Add PropTypes
}