import React from 'react'
import Axios from 'axios'

import DivisionStandingsTable from './components/Standings/DivisionStandingsTable';
import PlayoffGamesTable from './components/PlayoffGames/PlayoffGamesTable';

import RegularSeasonWeekTable from './components/RegularSeasonGames/RegularSeasonWeekTable';
import RegularSeasonGamesTable from './components/RegularSeasonGames/RegularSeasonGamesTable';
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
        alert('Failed to retrieve movie data')
        console.error('Failed to retrieve movie data')
        console.error(error)
      })
  }


  React.useEffect(() => {
    initializeGames (userCurrentWeekNumber)
  }, [userCurrentWeekNumber])

  return (
    <div className='container'>
      <RegularSeasonWeekTable userCurrentWeek="1" weekCallback={setUserCurrentWeekNumber}/>
      <RegularSeasonGamesTable games={currentGames}/>
      <PlayoffGamesTable />
      <DivisionStandingsTable />
    </div>
  )
}
