import React from 'react'

import DivisionStandingsTable from './components/Standings/DivisionStandingsTable';
import PlayoffGamesTable from './components/PlayoffGames/PlayoffGamesTable';

export default class Simulator extends React.Component {
  //TODO ALL
  constructor (props) {
    super(props)

    this.state = {
      //currentGameID: ''
    }
  }

  render () {
    return (
      <div className='container'>
        <PlayoffGamesTable />
        <DivisionStandingsTable />
      </div>
    )
  }
}
