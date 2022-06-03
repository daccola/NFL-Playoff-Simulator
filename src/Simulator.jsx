import React from 'react'
import Axios from 'axios'

import DivisionStandingsTable from './components/Standings/DivisionStandingsTable';
import PlayoffGamesTable from './components/PlayoffGames/PlayoffGamesTable';

import { Paper, Grid, Container } from '@mui/material'

import RegularSeasonWeekTable from './components/RegularSeasonGames/RegularSeasonWeekTable';
import RegularSeasonGamesTable from './components/RegularSeasonGames/RegularSeasonGamesTable';
import TempStandings from './TempStandings';

import MuiTable from './components/RegularSeasonGames/MUI_REGULAR_SEASON_GAME_TABLE.jsx'
import MuiBar from './MUI_BAR';
import MuiPlay from './components/PlayoffGames/MUI_PLAYOFF_COL.jsx'
import MuiStandingsTable from './components/Standings/MUI_DIVISION_STANDINGS_TABLE';
import MuiTableGroup from './components/Standings/MUI_TABLE_GROUP';
//import RegularSeasonGame from './components/RegularSeasonGames/RegularSeasonGame';

export default function Simulator(props) {
  const [userCurrentWeekNumber, setUserCurrentWeekNumber] = React.useState(1)
  const [currentGames, setCurrentGames] = React.useState([])

  const initializeGames = (week) => {
    let games = []
    Axios.get(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=2021&seasontype=2&week=${week}`)
      .then((response) => {
        response.data.events.forEach((game) => {
          let newGame = {
            homeTeam: game.competitions[0].competitors[0].team.abbreviation,
            homeScore: game.competitions[0].competitors[0].score,
            homeImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[0].team.abbreviation}.png`,
            roadTeam: game.competitions[0].competitors[1].team.abbreviation,
            roadScore: game.competitions[0].competitors[1].score,
            roadImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[1].team.abbreviation}.png`,
          }
          games.push(newGame)
        })
        setCurrentGames(games)
      })
      .catch((error) => {
        //TODO
        console.log('here')
        alert('Failed to retrieve movie data')
        console.error('Failed to retrieve movie data')
        console.error(error)
      })
  }


  React.useEffect(() => {
    initializeGames (userCurrentWeekNumber)
  }, [userCurrentWeekNumber])

  return (

      <Container maxWidth={false} disableGutters sx={{bgcolor: '#eeeeee'}}>
        <MuiBar />
        {/* <Container maxWidth={false} disableGutters sx={{ bgcolor: '#eeeeee' }} > */}
        <Grid container spacing={3} columns={24} sx={{p:2}}>
          <Grid item>
            <Paper sx={{p:1}}>
              <MuiTable />
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
              <MuiTableGroup />
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
              <MuiTableGroup />
            </Paper>
          </Grid>        
        </Grid>
          {/* </Container> */}
      {/* <RegularSeasonWeekTable userCurrentWeek="1" weekCallback={setUserCurrentWeekNumber}/>
      <RegularSeasonGamesTable games={currentGames}/>
      <PlayoffGamesTable />
      <DivisionStandingsTable />
      <TempStandings /> */}
      </ Container>
  )
}
