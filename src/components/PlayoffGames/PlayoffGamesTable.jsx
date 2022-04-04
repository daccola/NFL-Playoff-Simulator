import React from 'react'
import PropTypes from 'prop-types'

import ConferenceGamesTable from './ConferenceGamesTable'

export default class PlayoffGamesTable extends React.Component {
  render () {
    //TODO Update Props
    const { game } = this.props

    return (
        // TODO Update 
        <div className="row">
            <div className="col-4">
                <ConferenceGamesTable />
            </div>
            <div className="col-4">
              {/* TODO REMOVE */}
              <img src="https://cdn.imgbin.com/24/5/8/imgbin-nfl-green-bay-packers-super-bowl-xlv-super-bowl-li-vince-lombardi-trophy-new-york-giants-silver-nfl-super-bowl-trophy-illustration-fa0m4Jmh7c0wxL07QFZyBjaC2.jpg" alt="TODO" className = 'col-12'></img>
            </div>
            <div className="col-4">
                <ConferenceGamesTable />
            </div>
        </div>
    )
  }
}

PlayoffGamesTable.propTypes = {
  // TODO Add PropTypes
}