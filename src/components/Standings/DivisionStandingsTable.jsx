import React from 'react'
import PropTypes from 'prop-types'

import DivisionStandings from './DivisionStandings.jsx';
 
export default class DivisionStandingsTable extends React.Component {
  render () {
    //TODO Update Props
    const { game } = this.props

    return (
        //TODO Update ALL
        <table className="table table-striped">
        <thead>
          {/* <tr>
            <th scope="col">NFC NORTH</th>
            <th scope="col">RECORD</th>
          </tr> */}
        </thead>
        <tbody>
          <tr>
            <td><DivisionStandings/></td>
            <td><DivisionStandings/></td>
            <td><DivisionStandings/></td>
            <td><DivisionStandings/></td>
          </tr>
          <tr>
            <td><DivisionStandings/></td>
            <td><DivisionStandings/></td>
            <td><DivisionStandings/></td>
            <td><DivisionStandings/></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

DivisionStandings.propTypes = {
  // TODO Add PropTypes
}