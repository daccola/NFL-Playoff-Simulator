import React from 'react'
import PropTypes from 'prop-types'

export default function TeamInfoRight (props) {
  //TODO Does it make sense to pass an object or series of variables?
  const { seed, team, wins, losses, ties } = props
  let seedString = ''
 
  switch(seed) {
    case 1:
      seedString = '1st Seed'
      break;
    case 2:
      seedString = '2nd Seed'
      break;
    case 3:
      seedString = '3rd Seed'
      break;
    default:
      seedString = seed + 'th Seed'
  }

  return (
    <div className="row" style={{backgroundColor: 'yellow'}}>
      <div className="col-8">
        <div className="row">
          <small className='col-12'>{seedString}</small>
          <small className='col-12'>{team}</small>
          { ties === 0 
            ? <small className='col-12'>{wins}-{losses}</small>
            : <small className='col-12'>{wins}-{losses}-{ties}</small>
          }
        </div>
      </div>
      <div className="col-4">
        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/gb.png" alt="TODO" className = 'col-12'></img>
      </div>
    </div>
  )
}

TeamInfoRight.propTypes = {
// TODO Add PropTypes
}