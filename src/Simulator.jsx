import React from 'react'
import Axios from 'axios'


import { Paper, Grid, Container, Tabs, Tab, AppBar } from '@mui/material'

import Header from './Header'
import RegularSeasonGamesTable from './components/RegularSeasonGames/RegularSeasonGamesTable.jsx'
import DivisionStandingsTable from './components/Standings/DivisionStandingsTable.jsx'
import AFCPlayoffSeeds from './components/PlayoffGames/AFCPlayoffSeeds.jsx'
import NFCPlayoffSeeds from './components/PlayoffGames/NFCPlayoffSeeds.jsx'

import updateInfoHelper from './helpers/UpdateInfoHelper.jsx'

import { useEffect, useState} from 'react';

export default function Simulator(props) {
  const year = 2022

  const defaultInfo = {
    version: "1.0",
    time: "",
    teamInfoToDate: {},
    gameInfoToDate: [],
    nfcEastStandings: [],
    nfcNorthStandings: [],
    nfcSouthStandings: [],
    nfcWestStandings: [],
    nfcDivisionChamps: [],
    nfcWildCardTeams: [],
    afcEastStandings: [],
    afcNorthStandings: [],
    afcSouthStandings: [],
    afcWestStandings: [],
    afcDivisionChamps: [],
    afcWildCardTeams: []
  }

  const [initialInfo, setInitialInfo] = useState(JSON.stringify(defaultInfo));
  const [customizedInfo, setCustomizedInfo] = useState(JSON.stringify(defaultInfo));


  React.useEffect(() => {
    Axios.get(`https://egdyeroof9.execute-api.us-east-2.amazonaws.com/Prod?year=${year}`)
    .then((response) => {
      setInitialInfo(JSON.stringify(response.data.body))
      setCustomizedInfo(JSON.stringify(response.data.body))      
    })
    .catch((error) => {
      alert('Failed to retrieve game information')
      console.error('Failed to retrieve game information')
      console.error(error)
    })
  }, [])

  const onResetClicked = (event) => {
    setCustomizedInfo(initialInfo)
  }

  const updateCustomizedInfo = (week, index, newState) => {
    setCustomizedInfo(updateInfoHelper(customizedInfo, week, index, newState))
  }

  return (
    <Container maxWidth={false} disableGutters sx={{bgcolor: '#eeeeee'}}>
      <Header onResetClicked={onResetClicked}/>
      <Grid container spacing={2} columns={24} sx={{p:2}}>
        <Grid item xs={24}>
          <Paper sx={{p:1}}>
            <RegularSeasonGamesTable info={customizedInfo} updateFunction={updateCustomizedInfo}/>
          </Paper>
        </Grid>
        <Grid item xs={5} >
          <Paper xs={12} 
          sx={{
              p: 1,
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            <DivisionStandingsTable conference="AFC" info={customizedInfo}/>
          </Paper>
        </Grid>
        <Grid item xs={14}>
          <Paper
            sx={{
              p: 1,
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            <Grid container spacing={3} >
              <Grid item xs={6}>
                <AFCPlayoffSeeds info={customizedInfo}/>
              </Grid>
              <Grid item xs={6}>
                {/* <ConferenceGamesTable /> */}
                <NFCPlayoffSeeds info={customizedInfo}/>
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
              height: '100%'
            }}
          >
            <DivisionStandingsTable conference="NFC" info={customizedInfo}/>
          </Paper>
        </Grid>        
      </Grid>
    </ Container>
  )
}
