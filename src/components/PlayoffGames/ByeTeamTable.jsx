import React from 'react'
import PropTypes from 'prop-types'

import ByeTeamGame from './ByeTeamGame.jsx'

export default function ByeTeamTable (props) {
  const { game } = props

  return (
    <div className="row" style={{backgroundColor: 'purple'}}>
      <small>FIRST-ROUND BYE</small>
        <div className="col-12">
          <ByeTeamGame />
        </div>
    </div>
  )
}

ByeTeamTable.propTypes = {
//   game: PropTypes.shape({
//     gameID: PropTypes.string.isRequired,
//     gameName: PropTypes.string.isRequired,
//     gameYear: PropTypes.number.isRequired
//   }).isRequired
}