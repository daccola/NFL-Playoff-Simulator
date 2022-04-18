import React from 'react'
import PropTypes from 'prop-types'

export default function RegularSeasonGame (props) {
  const { game } = props

  if(game) {
    return (
      <div className="row">
        <div className="col-6">
          <img src={game.roadImage} alt="TODO" className = 'col-12'></img>
        </div>
        <div className="col-6">
          <img src={game.homeImage} alt="TODO" className = 'col-12'></img>
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

RegularSeasonGame.propTypes = {
// TODO Add PropTypes
}