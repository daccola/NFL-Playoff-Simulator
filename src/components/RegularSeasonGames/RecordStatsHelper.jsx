import React from 'react'
import Axios from 'axios'


import { useEffect, useState} from 'react';

const getDefaultTeamInfo = () => {
  const teams = {}

	teams['ARI'] = {
		abbreviation: 'ARI',
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
		abbreviation: 'ATL',
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
		abbreviation: 'BAL',
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
		abbreviation: 'BUF',
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
		abbreviation: 'CAR',
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
		abbreviation: 'CHI',
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
		abbreviation: 'CIN',
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
		abbreviation: 'CLE',
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
		abbreviation: 'DAL',
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
		abbreviation: 'DEN',
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
		abbreviation: 'DET',
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
		abbreviation: 'GB',
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
		abbreviation: 'HOU',
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
		abbreviation: 'IND',
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
		abbreviation: 'JAX',
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
		abbreviation: 'KC',
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
		abbreviation: 'LV',
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
		abbreviation: 'LAC',
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
		abbreviation: 'LAR',
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
		abbreviation: 'MIA',
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
		abbreviation: 'MIN',
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
		abbreviation: 'NE',
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
		abbreviation: 'NO',
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
		abbreviation: 'NYG',
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
		abbreviation: 'NYJ',
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
		abbreviation: 'PHI',
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
		abbreviation: 'PIT',
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
		abbreviation: 'SF',
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
		abbreviation: 'SEA',
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
		abbreviation: 'TB',
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
		abbreviation: 'TEN',
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
		abbreviation: 'WSH',
		location: 'Washington',
		alternateName: null,
		conference: 'NFC',
		division: 'East',
		overallRecord: [0, 0, 0],
		conferenceRecord: [0, 0, 0],
		divisionRecord: [0, 0, 0],
		games: []
	}

    return teams
}

const getTeamRecordInfo = () => {
	const [info, setInfo] = useState(getDefaultTeamInfo());
	useEffect(() => {
		for (let i = 1; i <= 18; i++) {
    	Axios.get(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=2021&seasontype=2&week=${i}`)
      	.then((response) => {
        	response.data.events.forEach((game) => {
            const homeTeam = game.competitions[0].competitors[0].team.abbreviation
            const roadTeam = game.competitions[0].competitors[1].team.abbreviation
            const homeConference = info[homeTeam].conference
            const roadConference = info[roadTeam].conference
            const homeDivision = info[homeTeam].division 
            const roadDivision = info[roadTeam].division 

						// Complete Game
						if(game.competitions[0].status.type.completed) {
							// Same Division
							if(homeConference === roadConference && homeDivision === roadDivision) {
									// Tie
									if(!game.competitions[0].competitors[0].winner && !game.competitions[0].competitors[1].winner){
										info[homeTeam].overallRecord[2] += 1
										info[roadTeam].overallRecord[2] += 1

										info[homeTeam].conferenceRecord[2] += 1
										info[roadTeam].conferenceRecord[2] += 1

										info[homeTeam].divisionRecord[2] += 1
										info[roadTeam].divisionRecord[2] += 1

										info[homeTeam].games[i] = {
											isCompleted: true,
											result: "tie",
											score: parseInt(game.competitions[0].competitors[0].score),
											opponent: roadTeam,
											oppScore: parseInt(game.competitions[0].competitors[1].score),
										}

										info[roadTeam].games[i] = {
											isCompleted: true,
											result: "tie",
											score: parseInt(game.competitions[0].competitors[1].score),
											opponent: homeTeam,
											oppScore: parseInt(game.competitions[0].competitors[0].score),
										}
									// Home Win
									} else if (game.competitions[0].competitors[0].winner){
										info[homeTeam].overallRecord[0] += 1
										info[roadTeam].overallRecord[1] += 1

										info[homeTeam].conferenceRecord[0] += 1
										info[roadTeam].conferenceRecord[1] += 1

										info[homeTeam].divisionRecord[0] += 1
										info[roadTeam].divisionRecord[1] += 1

										info[homeTeam].games[i] = {
											isCompleted: true,
											result: "win",
											score: parseInt(game.competitions[0].competitors[0].score),
											opponent: roadTeam,
											oppScore: parseInt(game.competitions[0].competitors[1].score),
										}

										info[roadTeam].games[i] = {
											isCompleted: true,
											result: "loss",
											score: parseInt(game.competitions[0].competitors[1].score),
											opponent: homeTeam,
											oppScore: parseInt(game.competitions[0].competitors[0].score),
										}
									// Road Win
									} else if (game.competitions[0].competitors[1].winner){					
										info[homeTeam].overallRecord[1] += 1
										info[roadTeam].overallRecord[0] += 1

										info[homeTeam].conferenceRecord[1] += 1
										info[roadTeam].conferenceRecord[0] += 1

										info[homeTeam].divisionRecord[1] += 1
										info[roadTeam].divisionRecord[0] += 1

										info[homeTeam].games[i] = {
											isCompleted: true,
											result: "loss",
											score: parseInt(game.competitions[0].competitors[0].score),
											opponent: roadTeam,
											oppScore: parseInt(game.competitions[0].competitors[1].score),
										}

										info[roadTeam].games[i] = {
											isCompleted: true,
											result: "win",
											score: parseInt(game.competitions[0].competitors[1].score),
											opponent: homeTeam,
											oppScore: parseInt(game.competitions[0].competitors[0].score),
										}
									}
							// Same Conference
							} else if(homeConference === roadConference) {
								// Tie
								if(!game.competitions[0].competitors[0].winner && !game.competitions[0].competitors[1].winner){
									info[homeTeam].overallRecord[2] += 1
									info[roadTeam].overallRecord[2] += 1

									info[homeTeam].conferenceRecord[2] += 1
									info[roadTeam].conferenceRecord[2] += 1

									info[homeTeam].games[i] = {
										isCompleted: true,
										result: "tie",
										score: parseInt(game.competitions[0].competitors[0].score),
										opponent: roadTeam,
										oppScore: parseInt(game.competitions[0].competitors[1].score),
									}

									info[roadTeam].games[i] = {
										isCompleted: true,
										result: "tie",
										score: parseInt(game.competitions[0].competitors[1].score),
										opponent: homeTeam,
										oppScore: parseInt(game.competitions[0].competitors[0].score),
									}
								// Home Win
								} else if (game.competitions[0].competitors[0].winner){
									info[homeTeam].overallRecord[0] += 1
									info[roadTeam].overallRecord[1] += 1

									info[homeTeam].conferenceRecord[0] += 1
									info[roadTeam].conferenceRecord[1] += 1

									info[homeTeam].games[i] = {
										isCompleted: true,
										result: "win",
										score: parseInt(game.competitions[0].competitors[0].score),
										opponent: roadTeam,
										oppScore: parseInt(game.competitions[0].competitors[1].score),
									}

									info[roadTeam].games[i] = {
										isCompleted: true,
										result: "loss",
										score: parseInt(game.competitions[0].competitors[1].score),
										opponent: homeTeam,
										oppScore: parseInt(game.competitions[0].competitors[0].score),
									}
								// Road Win
								} else if (game.competitions[0].competitors[1].winner){					
									info[homeTeam].overallRecord[1] += 1
									info[roadTeam].overallRecord[0] += 1

									info[homeTeam].conferenceRecord[1] += 1
									info[roadTeam].conferenceRecord[0] += 1

									info[homeTeam].games[i] = {
										isCompleted: true,
										result: "loss",
										score: parseInt(game.competitions[0].competitors[0].score),
										opponent: roadTeam,
										oppScore: parseInt(game.competitions[0].competitors[1].score),
									}

									info[roadTeam].games[i] = {
										isCompleted: true,
										result: "win",
										score: parseInt(game.competitions[0].competitors[1].score),
										opponent: homeTeam,
										oppScore: parseInt(game.competitions[0].competitors[0].score),
									}
								}
							// Different Conference
							} else {
								// Tie
								if(!game.competitions[0].competitors[0].winner && !game.competitions[0].competitors[1].winner){
									info[homeTeam].overallRecord[2] += 1
									info[roadTeam].overallRecord[2] += 1

									info[homeTeam].games[i] = {
										isCompleted: true,
										result: "tie",
										score: parseInt(game.competitions[0].competitors[0].score),
										opponent: roadTeam,
										oppScore: parseInt(game.competitions[0].competitors[1].score),
									}

									info[roadTeam].games[i] = {
										isCompleted: true,
										result: "tie",
										score: parseInt(game.competitions[0].competitors[1].score),
										opponent: homeTeam,
										oppScore: parseInt(game.competitions[0].competitors[0].score),
									}
								// Home Win
								} else if (game.competitions[0].competitors[0].winner){
									info[homeTeam].overallRecord[0] += 1
									info[roadTeam].overallRecord[1] += 1

									info[homeTeam].games[i] = {
										isCompleted: true,
										result: "win",
										score: parseInt(game.competitions[0].competitors[0].score),
										opponent: roadTeam,
										oppScore: parseInt(game.competitions[0].competitors[1].score),
									}

									info[roadTeam].games[i] = {
										isCompleted: true,
										result: "loss",
										score: parseInt(game.competitions[0].competitors[1].score),
										opponent: homeTeam,
										oppScore: parseInt(game.competitions[0].competitors[0].score),
									}
								// Road Win
								} else if (game.competitions[0].competitors[1].winner){					
									info[homeTeam].overallRecord[1] += 1
									info[roadTeam].overallRecord[0] += 1

									info[homeTeam].games[i] = {
										isCompleted: true,
										result: "loss",
										score: parseInt(game.competitions[0].competitors[0].score),
										opponent: roadTeam,
										oppScore: parseInt(game.competitions[0].competitors[1].score),
									}

									info[roadTeam].games[i] = {
										isCompleted: true,
										result: "win",
										score: parseInt(game.competitions[0].competitors[1].score),
										opponent: homeTeam,
										oppScore: parseInt(game.competitions[0].competitors[0].score),
									}
								}
							}
						// Incomplete Game
						} else {
							info[homeTeam].games[i] = {
								isCompleted: false,
								result: "",
								score: 0,
								opponent: roadTeam,
								oppScore: 0,
							}

							info[roadTeam].games[i] = {
								isCompleted: false,
								result: "",
								score: 0,
								opponent: homeTeam,
								oppScore: 0,
							}
						}
        	})
      	})
      .catch((error) => {
        //TODO
        alert('Failed to retrieve movie data')
        console.error('Failed to retrieve movie data')
        console.error(error)
      })
		}
	}, [info]);


      return info
}

const getDivisionStandings = (teamInfo) => {
	const teams = []
	console.log(teamInfo)
	for (const team of Object.keys(teamInfo)) {
		if(teamInfo[team].conference === "NFC" && teamInfo[team].division === "East"){
			console.log(teamInfo[team])
			teams.push(teamInfo[team])
	  	//teams[team] = teamInfo[team]
	  }
	}

	return teams
    // ...use `element`...
//});
}


const getAllInfo = () => {

	const info = getTeamRecordInfo()
	const data = {
    version: "1.0",
    time: "",
    teamInfo: info,
    nfcDivisionChamps: [],
    nfcWildCardTeams: [],
    nfcEastStandings: getDivisionStandings(info),
    nfcNorthStandings: [],
    nfcSouthStandings: [],
    nfcWestStandings: [],
    afcDivisionChamps: [],
    afcWildCardTeams: [],
    afcEastStandings: [],
    afcNorthStandings: [],
    afcSouthStandings: [],
    afcWestStandings: []
  }

	return data
}


export default getAllInfo;