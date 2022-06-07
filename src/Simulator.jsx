import React from 'react'
import Axios from 'axios'

import DivisionStandingsTable from './components/Standings/DivisionStandingsTable';

import { Paper, Grid, Container, Tabs, Tab, AppBar } from '@mui/material'

import RegularSeasonGamesTable from './components/RegularSeasonGames/RegularSeasonGamesTable';

import Header from './Header';
import ConferenceGamesTable from './components/PlayoffGames/ConferenceGamesTable.jsx'
import AFCPlayoffSeeds from './components/PlayoffGames/AFCPlayoffSeeds.jsx'
import NFCPlayoffSeeds from './components/PlayoffGames/NFCPlayoffSeeds.jsx'

export default function Simulator(props) {
  return (
    <Container maxWidth={false} disableGutters sx={{bgcolor: '#eeeeee'}}>
      <Header />
      <Grid container spacing={3} columns={24} sx={{p:2}}>
        <Grid item xs={24}>
          <Paper sx={{p:1}}>
            <RegularSeasonGamesTable />
          </Paper>
        </Grid>
        <Grid item xs={5} >
          <Paper
          sx={{
              p: 1,
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
              p: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Grid container spacing={3} >
              <Grid item xs={6}>
                <AFCPlayoffSeeds />
              </Grid>
              <Grid item xs={6}>
                {/* <ConferenceGamesTable /> */}
                <NFCPlayoffSeeds />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={5} >
          <Paper
            sx={{
              p: 1,
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
