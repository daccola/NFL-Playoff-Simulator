import React from 'react'
import Axios from 'axios'


import { Paper, Grid, Container, Tabs, Tab, AppBar } from '@mui/material'

//import GetLambda from './components/RegularSeasonGames/GetLambda.jsx'

import Header from './Header'
import RegularSeasonGamesTable from './components/RegularSeasonGames/RegularSeasonGamesTable.jsx'
import DivisionStandingsTable from './components/Standings/DivisionStandingsTable.jsx'
import AFCPlayoffSeeds from './components/PlayoffGames/AFCPlayoffSeeds.jsx'
import NFCPlayoffSeeds from './components/PlayoffGames/NFCPlayoffSeeds.jsx'

import getAllInfo from './components/RegularSeasonGames/RecordStatsHelper.jsx'
import { useEffect, useState} from 'react';


export default function Simulator(props) {
  const [info, setInfo] = useState(null);

  //console.log("SIMMM")
  //const info = getAllInfo();
  //useEffect(() => {
    const getAxiosGameInfo = () => {
      Axios.get(`https://egdyeroof9.execute-api.us-east-2.amazonaws.com/Prod`)
      .then((response) => {
        //console.log('ffffff')
        //console.log(JSON.stringify(response.data.body))
        setInfo(response.data.body)
        //console.log('ffffff')

      })
      .catch((error) => {
        //TODO
        alert('Failed to retrieve lambda data')
        console.error('Failed to retrieve lambda data')
        console.error(error)
      })
    }
   
    React.useEffect(() => {
      getAxiosGameInfo()
    }, [info])
 // }, [info]);
  //const info = GetLambda()

  return (
    <Container maxWidth={false} disableGutters sx={{bgcolor: '#eeeeee'}}>
      <Header />
      <Grid container spacing={2} columns={24} sx={{p:2}}>
        <Grid item xs={24}>
          <Paper sx={{p:1}}>
            <RegularSeasonGamesTable />
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
            <DivisionStandingsTable conference="AFC" info={info} />
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
              height: '100%'
            }}
          >
            <DivisionStandingsTable conference="NFC" info={info}/>
          </Paper>
        </Grid>        
      </Grid>
    </ Container>
  )
}
