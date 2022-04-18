import React from 'react'
import PropTypes from 'prop-types'

import WildCardGame from './WildCardGame'

export default function WildCardGamesTable (props) {
  const { game } = props

  return (
	  <div className="row" style={{backgroundColor: 'purple'}}>
      <small>WILD-CARD GAMES</small>
      <div className="col-12">
        <WildCardGame />
      </div>
      <div className="col-12">
        <WildCardGame />
      </div>
      <div className="col-12">
        <WildCardGame />
      </div>
    </div>
  )
}

WildCardGamesTable.propTypes = {
//   game: PropTypes.shape({
//     gameID: PropTypes.string.isRequired,
//     gameName: PropTypes.string.isRequired,
//     gameYear: PropTypes.number.isRequired
//   }).isRequired
}