import React from 'react'
import PropTypes from 'prop-types'

import WildCardGame from './WildCardGame'
import ByeTeamGame from './ByeTeamGame'

export default class ConferenceGamesTable extends React.Component {
  render () {
    //TODO Update Props
    const { game } = this.props

    return (
        //TODO Update 
        <div className="row">
            <div className="col-12">
                <ByeTeamGame />
            </div>
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
}

ConferenceGamesTable.propTypes = {
// TODO Add PropTypes
}