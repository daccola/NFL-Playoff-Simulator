import React from 'react'
import Axios from 'axios'


// use-fetch-data.js
import { useEffect, useState} from 'react';

const useWeeklyGames = () => {
  const [week, setWeek] = useState("1");
  const [games, setGames] = useState([]);

  useEffect(() => {
    let games = []
    Axios.get(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=2021&seasontype=2&week=${week}`)
      .then((response) => {
        response.data.events.forEach((game) => {
          let newGame = {
            completed: game.competitions[0].status.type.completed,
            info: game.competitions[0].status.type.detail,
            state: game.competitions[0].status.type.state,
            homeTeam: game.competitions[0].competitors[0].team.abbreviation,
            homeScore: parseInt(game.competitions[0].competitors[0].score),
            homeImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[0].team.abbreviation}.png`,
            roadTeam: game.competitions[0].competitors[1].team.abbreviation,
            roadScore: parseInt(game.competitions[0].competitors[1].score),
            roadImage: `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${game.competitions[0].competitors[1].team.abbreviation}.png`,
          }
          games.push(newGame)
        })
        setGames(games)
      })
      .catch((error) => {
        //TODO
        alert('Failed to retrieve movie data')
        console.error('Failed to retrieve movie data')
        console.error(error)
      })
  }, [games]);

  return {
    week, setWeek, games
  };
};

export default useWeeklyGames;