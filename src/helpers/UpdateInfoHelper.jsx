import { getDivisionStandings } from './DivisionHelpers.jsx'
import { getDivisionChampionsStandings } from './DivisionChampionsHelpers.jsx'
import { getWildCardTeams } from './WildCardHelpers.jsx'

export default function updateInfoHelper(info, week, index, newState) {
  const newInfo = JSON.parse(info)

  const roadTeam = newInfo.gameInfoToDate[week][index].roadTeam
  const homeTeam = newInfo.gameInfoToDate[week][index].homeTeam

  // Clears the previous state for the game
  if(newInfo.gameInfoToDate[week][index].tempState === "RoadWin"){
    newInfo.teamInfoToDate[roadTeam].overallRecord[0]--
    newInfo.teamInfoToDate[roadTeam].games[week].result = ""

    newInfo.teamInfoToDate[homeTeam].overallRecord[1]--
    newInfo.teamInfoToDate[homeTeam].games[week].result = ""
		//TODO Update conference, Division Records
    
	} else if(newInfo.gameInfoToDate[week][index].tempState === "HomeWin"){
    newInfo.teamInfoToDate[roadTeam].overallRecord[1]--
    newInfo.teamInfoToDate[roadTeam].games[week].result = ""

    newInfo.teamInfoToDate[homeTeam].overallRecord[0]--
    newInfo.teamInfoToDate[homeTeam].games[week].result = ""
    //TODO Update conference, Division Records

    } else if(newInfo.gameInfoToDate[week][index].tempState === "Tie"){
    newInfo.teamInfoToDate[roadTeam].overallRecord[2]--
    newInfo.teamInfoToDate[roadTeam].games[week].result = ""

    newInfo.teamInfoToDate[homeTeam].overallRecord[2]--
    newInfo.teamInfoToDate[homeTeam].games[week].result = ""
    //TODO Update conference, Division Records
  }

  newInfo.gameInfoToDate[week][index].tempState = newState


  if(newState === "RoadWin"){
    newInfo.teamInfoToDate[roadTeam].overallRecord[0]++
    newInfo.teamInfoToDate[roadTeam].games[week].result = "win"

    newInfo.teamInfoToDate[homeTeam].overallRecord[1]++
    newInfo.teamInfoToDate[homeTeam].games[week].result = "loss"
    //TODO Update conference, Division Records
    
	} else if (newState === "HomeWin"){
    newInfo.teamInfoToDate[roadTeam].overallRecord[1]++
    newInfo.teamInfoToDate[roadTeam].games[week].result = "loss"

    newInfo.teamInfoToDate[homeTeam].overallRecord[0]++
    newInfo.teamInfoToDate[homeTeam].games[week].result = "win"
    //TODO Update conference, Division Records

  } else if (newState === "Tie"){
    newInfo.teamInfoToDate[roadTeam].overallRecord[2]++
    newInfo.teamInfoToDate[roadTeam].games[week].result = "tie"

    newInfo.teamInfoToDate[homeTeam].overallRecord[2]++
    newInfo.teamInfoToDate[homeTeam].games[week].result = "tie"
    //TODO Update conference, Division Records
  }

	//Doesn't always sort correctly when record is 2-0 vs 3-0
	//Or when its 0-1 and 0-2

	newInfo.nfcEastStandings = getDivisionStandings('NFC', 'East', newInfo.teamInfoToDate)  
	newInfo.nfcNorthStandings = getDivisionStandings('NFC', 'North', newInfo.teamInfoToDate)  
	newInfo.nfcSouthStandings = getDivisionStandings('NFC', 'South', newInfo.teamInfoToDate)  
	newInfo.nfcWestStandings = getDivisionStandings('NFC', 'West', newInfo.teamInfoToDate)  

	newInfo.afcEastStandings = getDivisionStandings('AFC', 'East', newInfo.teamInfoToDate)  
	newInfo.afcNorthStandings = getDivisionStandings('AFC', 'North', newInfo.teamInfoToDate)  
	newInfo.afcSouthStandings = getDivisionStandings('AFC', 'South', newInfo.teamInfoToDate)  
	newInfo.afcWestStandings = getDivisionStandings('AFC', 'West', newInfo.teamInfoToDate) 
	
	newInfo.nfcDivisionChamps = getDivisionChampionsStandings([newInfo.nfcEastStandings[0], newInfo.nfcNorthStandings[0], newInfo.nfcSouthStandings[0], newInfo.nfcWestStandings[0]])
	newInfo.afcDivisionChamps = getDivisionChampionsStandings([newInfo.afcEastStandings[0], newInfo.afcNorthStandings[0], newInfo.afcSouthStandings[0], newInfo.afcWestStandings[0]])

	newInfo.nfcWildCardTeams = getWildCardTeams('NFC', newInfo.nfcDivisionChamps, newInfo.teamInfoToDate)
	newInfo.afcWildCardTeams  = getWildCardTeams('AFC', newInfo.afcDivisionChamps, newInfo.teamInfoToDate)
    
  return JSON.stringify(newInfo)
}