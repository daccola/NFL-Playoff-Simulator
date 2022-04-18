import React from 'react'
import PropTypes from 'prop-types'

import RegularSeasonGame from './RegularSeasonGame'

export default function RegularSeasonGamesTable(props) {
  const { games } = props
  return (
  	<div className="row">
    	<div className="col-6">
        <div className="row">
          <div className="col-3">
            <RegularSeasonGame game={games[0]}/>
          </div>
          <div className="col-3">
            <RegularSeasonGame game={games[1]}/>
          </div>
          <div className="col-3">
            <RegularSeasonGame game={games[2]}/>
          </div>
          <div className="col-3">
            <RegularSeasonGame game={games[3]}/>
          </div>
        </div>
      </div>
      <div className="col-6">
      	<div className="row">
          <div className="col-3">
            <RegularSeasonGame game={games[4]}/>
          </div>
          <div className="col-3">
            <RegularSeasonGame game={games[5]}/>
          </div>
      		<div className="col-3">
            <RegularSeasonGame game={games[6]}/>
          </div>
          <div className="col-3">
            <RegularSeasonGame game={games[7]}/>
          </div>
        </div>
      </div>
      <div className="col-6">
      	<div className="row">
          <div className="col-3">
            <RegularSeasonGame game={games[8]}/>
          </div>
      		<div className="col-3">
            <RegularSeasonGame game={games[9]}/>
          </div>
          <div className="col-3">
            <RegularSeasonGame game={games[10]}/>
          </div>
          <div className="col-3">
            <RegularSeasonGame game={games[11]}/>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="row">
          <div className="col-3">
            <RegularSeasonGame game={games[12]}/>
      	  </div>
          <div className="col-3">
            <RegularSeasonGame game={games[13]}/>
          </div>
          <div className="col-3">
            <RegularSeasonGame game={games[14]}/>
          </div>
          <div className="col-3">
            <RegularSeasonGame game={games[15]}/>
          </div>
        </div>
      </div>
    </div>
  )
}

RegularSeasonGamesTable.propTypes = {
// TODO Add PropTypes
}