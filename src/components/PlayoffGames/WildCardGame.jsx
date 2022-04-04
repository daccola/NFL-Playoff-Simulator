import React from 'react'
import PropTypes from 'prop-types'

import TeamInfoLeft from './TeamInfoLeft'
import TeamInfoRight from './TeamInfoRight'

export default class WildCardGame extends React.Component {
  render () {
    const { game } = this.props

    return (
        <div className="row">
            <div className="col-6">
                <TeamInfoLeft wins={16} losses={0} ties={0} seed={6} team={'Green Bay'}/>

            </div>
            <div className="col-6">
              <TeamInfoRight wins={16} losses={0} ties={0} seed={6} team={'Green Bay'}/>
            </div>
        </div>
    )
  }
}

WildCardGame.propTypes = {
//   game: PropTypes.shape({
//     gameID: PropTypes.string.isRequired,
//     gameName: PropTypes.string.isRequired,
//     gameYear: PropTypes.number.isRequired
//   }).isRequired
}