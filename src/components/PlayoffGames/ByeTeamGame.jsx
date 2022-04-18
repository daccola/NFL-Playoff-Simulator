import React from 'react'
import PropTypes from 'prop-types'

import TeamInfoLeft from './TeamInfoLeft'

export default function ByeTeamGame(props) {
  const { game } = props

  return (
    <div className="row">
      <div className="col-6">
        <TeamInfoLeft seed={1} wins={16} losses={0} ties={0} team={'Green Bay'}/>
      </div>
      <div className="col-6">
        {/* TODO NOTHING */}
      </div>
    </div>
  )  
}

ByeTeamGame.propTypes = {
// TODO Add PropTypes
}