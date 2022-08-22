import { sortOnlyByRecord } from './GeneralHelpers.jsx'

export function getDivisionChampionsStandings(teams) {
	const sortedDivisionChampions = sortOnlyByRecord(teams)

  return sortedDivisionChampions
}