import React from 'react'
import Axios from 'axios'

export default function TempStandings(props) {
  //const { teams } = props

	const teams = {}

	teams['ARI'] = {
		location: 'Arizona',
		alternateName: null,
		conference: 'NFC',
		division: 'West',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['ATL'] = {
		location: 'Atlanta',
		alternateName: null,
		conference: 'NFC',
		division: 'South',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['BAL'] = {
		location: 'Baltimore',
		alternateName: null,
		conference: 'AFC',
		division: 'North',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['BUF'] = {
		location: 'Buffalo',
		alternateName: null,
		conference: 'AFC',
		division: 'East',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['CAR'] = {
		location: 'Carolina',
		alternateName: null,
		conference: 'NFC',
		division: 'South',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['CHI'] = {
		location: 'Chicago',
		alternateName: null,
		conference: 'NFC',
		division: 'North',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['CIN'] = {
		location: 'Cincinnati',
		alternateName: null,
		conference: 'AFC',
		division: 'North',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['CLE'] = {
		location: 'Cleveland',
		alternateName: null,
		conference: 'AFC',
		division: 'North',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['DAL'] = {
		location: 'Dallas',
		alternateName: null,
		conference: 'NFC',
		division: 'East',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['DEN'] = {
		location: 'Denver',
		alternateName: null,
		conference: 'AFC',
		division: 'West',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['DET'] = {
		location: 'Detroit',
		alternateName: null,
		conference: 'NFC',
		division: 'North',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['GB'] = {
		location: 'Green Bay',
		alternateName: null,
		conference: 'NFC',
		division: 'North',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['HOU'] = {
		location: 'Houston',
		alternateName: null,
		conference: 'AFC',
		division: 'South',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['IND'] = {
		location: 'Indianapolis',
		alternateName: null,
		conference: 'AFC',
		division: 'South',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['JAX'] = {
		location: 'Jacksonville',
		alternateName: null,
		conference: 'AFC',
		division: 'South',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['KC'] = {
		location: 'Kansas City',
		alternateName: null,
		conference: 'AFC',
		division: 'West',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['LV'] = {
		location: 'Las Vegas',
		alternateName: null,
		conference: 'AFC',
		division: 'West',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['LAC'] = {
		location: 'Los Angeles',
		alternateName: 'LA Chargers',
		conference: 'AFC',
		division: 'West',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['LAR'] = {
		location: 'Los Angeles',
		alternateName: 'LA Rams',
		conference: 'NFC',
		division: 'West',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['MIA'] = {
		location: 'Miami',
		alternateName: null,
		conference: 'AFC',
		division: 'East',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['MIN'] = {
		location: 'Minnesota',
		alternateName: null,
		conference: 'NFC',
		division: 'North',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['NE'] = {
		location: 'New England',
		alternateName: null,
		conference: 'AFC',
		division: 'East',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['NO'] = {
		location: 'New Orleans',
		alternateName: null,
		conference: 'NFC',
		division: 'South',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['NYG'] = {
		location: 'New York',
		alternateName: "NY Giants",
		conference: 'NFC',
		division: 'East',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['NYJ'] = {
		location: 'New York',
		alternateName: 'NY Jets',
		conference: 'AFC',
		division: 'East',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['PHI'] = {
		location: 'Philadelphia',
		alternateName: null,
		conference: 'NFC',
		division: 'East',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['PIT'] = {
		location: 'Pittsburgh',
		alternateName: null,
		conference: 'AFC',
		division: 'North',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['SF'] = {
		location: 'San Francisco',
		alternateName: null,
		conference: 'NFC',
		division: 'West',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['SEA'] = {
		location: 'Seattle',
		alternateName: null,
		conference: 'NFC',
		division: 'West',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['TB'] = {
		location: 'Tampa Bay',
		alternateName: null,
		conference: 'NFC',
		division: 'South',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['TEN'] = {
		location: 'Tennessee',
		alternateName: null,
		conference: 'AFC',
		division: 'South',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	teams['WSH'] = {
		location: 'Washington',
		alternateName: null,
		conference: 'NFC',
		division: 'East',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

	// Axios.get(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=2021&seasontype=2&week=1`)
    //   .then((response) => {
    //     response.data.events.forEach((game) => {
    //       let newGame = {
    //         homeTeam: game.competitions[0].competitors[0].team.abbreviation,
    //         homeScore: game.competitions[0].competitors[0].score,
    //         roadTeam: game.competitions[0].competitors[1].team.abbreviation,
    //         roadScore: game.competitions[0].competitors[1].score,
    //       }
	// 				//const person = {...person1, backpack : {...person1.backpack, color : "Red"}}
	// 				teams[newGame.homeTeam] = {...teams[newGame.homeTeam], ...overallRecord[0], 0:69  }
	// 				//teams[newGame.homeTeam].overallRecord[0]++
    //       //games.push(newGame)
    //     })
    //   })
    //   .catch((error) => {
    //     //TODO
    //     alert('Failed to retrieve movie data')
    //     console.error('Failed to retrieve movie data')
    //     console.error(error)
    //   })

	console.log(teams)


  return (
    <div></div>
  )
}
