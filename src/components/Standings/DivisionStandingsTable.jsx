import React from 'react'
import PropTypes from 'prop-types'

import DivisionStandings from './DivisionStandings.jsx';
 
export default function DivisionStandingsTable (props) {
  const { teams } = props

  return (
    <table className="table">
      <tbody>
        <tr>
          <td><DivisionStandings conference='AFC' division='East'/></td>
          <td><DivisionStandings conference='AFC' division='North'/></td>
          <td><DivisionStandings conference='NFC' division='East'/></td>
          <td><DivisionStandings conference='NFC' division='North'/></td>
        </tr>
        <tr>
          <td><DivisionStandings conference='AFC' division='West'/></td>
          <td><DivisionStandings conference='AFC'division='South'/></td>
          <td><DivisionStandings conference='NFC' division='West'/></td>
          <td><DivisionStandings conference='NFC' division='South'/></td>
        </tr>
      </tbody>
    </table>
  )
}

DivisionStandings.propTypes = {
  // TODO Add PropTypes
}