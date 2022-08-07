import React from 'react'
import Axios from 'axios'


import { Paper, Grid, Container, Tabs, Tab, AppBar } from '@mui/material'

import Header from './Header'
import RegularSeasonGamesTable from './components/RegularSeasonGames/RegularSeasonGamesTable.jsx'
import DivisionStandingsTable from './components/Standings/DivisionStandingsTable.jsx'
import AFCPlayoffSeeds from './components/PlayoffGames/AFCPlayoffSeeds.jsx'
import NFCPlayoffSeeds from './components/PlayoffGames/NFCPlayoffSeeds.jsx'

import { useEffect, useState} from 'react';


export default function Simulator(props) {
  const [initialInfo, setInitialInfo] = useState(null);
  const [customizedInfo, setCustomizedInfo] = useState(null);

  const year = 2022

  React.useEffect(() => {
    Axios.get(`https://egdyeroof9.execute-api.us-east-2.amazonaws.com/Prod?year=${year}`)
    .then((response) => {
      setInitialInfo(response.data.body)
      setCustomizedInfo(response.data.body)
    })
    .catch((error) => {
      //TODO
      alert('Failed to retrieve lambda data')
      console.error('Failed to retrieve lambda data')
      console.error(error)
    })
  }, [])


  const updateCustomizedInfo = (week, index, newState) => {
    const newCustomizedInfo = customizedInfo
    newCustomizedInfo.gameInfoToDate[week][index].tempState = newState
    setCustomizedInfo(newCustomizedInfo)
    //console.log("IN SIMULATER")
    //console.log(customizedInfo)

    //todo remove
    // const f = customizedInfo
    // f.nfcNorthStandings[0].overallRecord[0] = 69
    // setCustomizedInfo(f)
    //update all standings
  }

  return (
    <Container maxWidth={false} disableGutters sx={{bgcolor: '#eeeeee'}}>
      <Header />
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
            <DivisionStandingsTable conference="AFC" info={customizedInfo} />
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
                <AFCPlayoffSeeds info={customizedInfo}  />
              </Grid>
              <Grid item xs={6}>
                {/* <ConferenceGamesTable /> */}
                <NFCPlayoffSeeds info={customizedInfo} />
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
