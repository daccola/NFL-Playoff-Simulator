import React from 'react'
import PropTypes from 'prop-types'

export default class DivisionStandings extends React.Component {
  render () {
    //TODO Update Props
    const { game } = this.props

    return (
        //TODO Update ALL
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">NFC NORTH</th>
            <th scope="col">RECORD</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Green Bay</td>
            <td>16-0</td>
          </tr>
          <tr>
            <td>Minnesota</td>
            <td>0-16</td>
          </tr>
          <tr>
            <td>Chicago</td>
            <td>0-16</td>
          </tr>
          <tr>
            <td>Detroit</td>
            <td>0-16</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

DivisionStandings.propTypes = {
  // TODO Add PropTypes
}