import React from 'react'
import PropTypes from 'prop-types'

export default function DivisionStandings (props) {
  const { conference, division } = props

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">{conference} {division}</th>
          <th scope="col">RECORD</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Green Bay</td>
          <td>16-0</td>
        </tr>
        <tr>
          <td>Green Bay</td>
          <td>16-0</td>
        </tr>
        <tr>
          <td>Green Bay</td>
          <td>16-0</td>
        </tr>
        <tr>
          <td>Green Bay</td>
          <td>16-0</td>
        </tr>
      </tbody>
    </table>
  )
}

DivisionStandings.propTypes = {
  // TODO Add PropTypes
}