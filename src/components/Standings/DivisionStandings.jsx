import React from 'react'
import PropTypes from 'prop-types'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useEffect, useState} from 'react';


export default function DivisionStandings (props) {
  const { conference, division, standings } = props

  let divisionStandings = null

  if(standings) {
    if(conference === 'AFC') {
      if(division === 'North') {
        divisionStandings = standings.afcNorthStandings

      } else if(division === 'South') {
        divisionStandings = standings.afcSouthStandings

      } else if (division === 'East') {
        divisionStandings = standings.afcEastStandings

      } else if (division === 'West') {
        divisionStandings = standings.afcWestStandings

      }
    } else if (conference === 'NFC') {

      if(division === 'North') {
        divisionStandings = standings.nfcNorthStandings

      } else if(division === 'South') {
        divisionStandings = standings.nfcSouthStandings

      } else if (division === 'East') {
        divisionStandings = standings.nfcEastStandings

      } else if (division === 'West') {
        divisionStandings = standings.nfcWestStandings

      }
    }
  }

  if(standings) {
    return (
			<Table size="small" >
        <TableHead>
          <TableRow>
            <TableCell sx={{p:0, pt:2, px:0.25, fontWeight: 'bold'}}>{conference} {division}</TableCell>
            <TableCell sx={{p:0, pt:2, px:0.25, fontWeight: 'bold'}}>RECORD</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{p:0, m:0}}>
            <TableCell sx={{p:0.25}}>
              {divisionStandings[0].location}
            </TableCell>
            <TableCell sx={{p:0.25}}>
              {divisionStandings[0].overallRecord[0] + '-' + divisionStandings[0].overallRecord[1]}
              {divisionStandings[0].overallRecord[2] !== 0 ? '-' + divisionStandings[0].overallRecord[2] : ''}
            </TableCell>
          </TableRow>
					<TableRow>
            <TableCell sx={{p:0.25}}>
              {divisionStandings[1].location}
            </TableCell>
            <TableCell sx={{p:0.25}}>
              {divisionStandings[1].overallRecord[0] + '-' + divisionStandings[1].overallRecord[1]}
              {divisionStandings[1].overallRecord[2] !== 0 ? '-' + divisionStandings[1].overallRecord[2] : ''}
            </TableCell>
          </TableRow>
					<TableRow>
            <TableCell sx={{p:0.25}}>
              {divisionStandings[2].location}
            </TableCell>
            <TableCell sx={{p:0.25}}>
              {divisionStandings[2].overallRecord[0] + '-' + divisionStandings[2].overallRecord[1]}
              {divisionStandings[2].overallRecord[2] !== 0 ? '-' + divisionStandings[2].overallRecord[2] : ''}
            </TableCell>
          </TableRow>
					<TableRow>
            <TableCell sx={{p:0.25}}>
              {divisionStandings[3].location}
            </TableCell>
            <TableCell sx={{p:0.25}}>
              {divisionStandings[3].overallRecord[0] + '-' + divisionStandings[3].overallRecord[1]}
              {divisionStandings[3].overallRecord[2] !== 0 ? '-' + divisionStandings[3].overallRecord[2] : ''}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>         
    )
  } else {
    return (
      <Table size="small" >
        <TableHead>
          <TableRow>
            <TableCell sx={{p:0, pt:2, px:0.25, fontWeight: 'bold'}}>{conference} {division}</TableCell>
            <TableCell sx={{p:0, pt:2, px:0.25, fontWeight: 'bold'}}>RECORD</TableCell> 
          </TableRow>
        </TableHead>
      </Table>  
    )
  }
}

DivisionStandings.propTypes = {
// TODO Add PropTypes
}