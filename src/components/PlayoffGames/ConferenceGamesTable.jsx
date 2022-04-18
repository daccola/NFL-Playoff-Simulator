import React from 'react'
import PropTypes from 'prop-types'

import WildCardGame from './WildCardGame'
import WildCardGamesTable from './WildCardGamesTable'
//import ByeTeamGame from './ByeTeamGame'
import ByeTeamTable from './ByeTeamTable'

export default function ConferenceGamesTable (props) {
  const { game } = props

  return (
    <div className="row">
      <div className="col-12">
        <ByeTeamTable />
      </div>
      <div className="col-12">
        <WildCardGamesTable />
      </div>
    </div>
  )
}

ConferenceGamesTable.propTypes = {
// TODO Add PropTypes
}