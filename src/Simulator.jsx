import React from 'react'
import Axios from 'axios'

import DivisionStandingsTable from './components/Standings/DivisionStandingsTable';

import { Paper, Grid, Container, Tabs, Tab, AppBar } from '@mui/material'

import RegularSeasonGamesTable from './components/RegularSeasonGames/RegularSeasonGamesTable';

import Header from './Header';
import MuiPlay from './components/PlayoffGames/MUI_PLAYOFF_COL.jsx'

export default function Simulator(props) {
  return (
    <Container maxWidth={false} disableGutters sx={{bgcolor: '#eeeeee'}}>
      <Header />

      {/* <AppBar position="static" bgcolor="red"> */}
        <Tabs value="3" variant="scrollable" scrollButtons sx={{maxWidth: '100%'}}>
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
    <Tab label="Week 13" />
    <Tab label="Week 14" />
    <Tab label="Week 15" />
    <Tab label="Week 16" />
    <Tab label="Week 17" />
    <Tab label="Week 18" />



    </Tabs>
      {/* </ AppBar> */}
      <Grid container spacing={3} columns={24} sx={{p:2}}>
        <Grid item>
          <Paper sx={{p:1}}>
            <RegularSeasonGamesTable />
          </Paper>
        </Grid>
        <Grid item xs={5} >
          <Paper
          sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <DivisionStandingsTable />
          </Paper>
        </Grid>
        <Grid item xs={14}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Grid container spacing={3} >
              <Grid item xs={6}>
                <MuiPlay />
              </Grid>
              <Grid item xs={6}>
                <MuiPlay />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={5} >
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <DivisionStandingsTable />
          </Paper>
        </Grid>        
      </Grid>
    </ Container>
  )
}
