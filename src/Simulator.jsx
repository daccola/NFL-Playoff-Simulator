import React from 'react'
import Axios from 'axios'

import DivisionStandingsTable from './components/Standings/DivisionStandingsTable';

import { Paper, Grid, Container } from '@mui/material'

import RegularSeasonGamesTable from './components/RegularSeasonGames/RegularSeasonGamesTable';

import Header from './Header';
import MuiPlay from './components/PlayoffGames/MUI_PLAYOFF_COL.jsx'

export default function Simulator(props) {
  return (
    <Container maxWidth={false} disableGutters sx={{bgcolor: '#eeeeee'}}>
      <Header />
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
