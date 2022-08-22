import React from 'react'
import PropTypes from 'prop-types'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useEffect, useState} from 'react';


export default function DivisionStandings (props) {
  const { conference, division, info } = props
  const [divisionStandings, setDivisionStandings] = useState([])

  useEffect(() => {
    if(conference === 'AFC') {
      if(division === 'North') {
        setDivisionStandings(JSON.parse(info).afcNorthStandings)
      } else if(division === 'South') {
        setDivisionStandings(JSON.parse(info).afcSouthStandings)
      } else if (division === 'East') {
        setDivisionStandings(JSON.parse(info).afcEastStandings)
      } else if (division === 'West') {
        setDivisionStandings(JSON.parse(info).afcWestStandings)
      }
    } else if (conference === 'NFC') {
      if(division === 'North') {
        setDivisionStandings(JSON.parse(info).nfcNorthStandings)
      } else if(division === 'South') {
        setDivisionStandings(JSON.parse(info).nfcSouthStandings)
      } else if (division === 'East') {
        setDivisionStandings(JSON.parse(info).nfcEastStandings)
      } else if (division === 'West') {
        setDivisionStandings(JSON.parse(info).nfcWestStandings)
      }
    }
  }, [info])

  return (
    <Table size="small" >
      <TableHead>
        <TableRow>
          <TableCell xs={2} sx={{p:0, pt:2, px:0.25, fontWeight: 'bold'}}>{conference} {division}</TableCell>
          <TableCell sx={{p:0, pt:2, px:0.25, fontWeight: 'bold'}}>RECORD</TableCell> 
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow sx={{p:0, m:0}}>
          <TableCell sx={{p:0.25}}>
            {divisionStandings.length !== 0 ? divisionStandings[0].location : '' }
          </TableCell>
          <TableCell sx={{p:0.25}}>
            {divisionStandings.length !== 0 ? divisionStandings[0].overallRecord[0] + '-' + divisionStandings[0].overallRecord[1] : '' }
            {divisionStandings.length !== 0  && divisionStandings[0].overallRecord[2] !== 0 ? '-' + divisionStandings[0].overallRecord[2] : '' }
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{p:0.25}}>
            {divisionStandings.length !== 0 ? divisionStandings[1].location : '' }
          </TableCell>
          <TableCell sx={{p:0.25}}>
            {divisionStandings.length !== 0 ? divisionStandings[1].overallRecord[0] + '-' + divisionStandings[1].overallRecord[1] : '' }
            {divisionStandings.length !== 0  && divisionStandings[1].overallRecord[2] !== 0 ? '-' + divisionStandings[1].overallRecord[2] : '' }
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{p:0.25}}>
            {divisionStandings.length !== 0 ? divisionStandings[2].location : '' }
          </TableCell>
          <TableCell sx={{p:0.25}}>
            {divisionStandings.length !== 0 ? divisionStandings[2].overallRecord[0] + '-' + divisionStandings[2].overallRecord[1] : '' }
            {divisionStandings.length !== 0  && divisionStandings[2].overallRecord[2] !== 0 ? '-' + divisionStandings[2].overallRecord[2] : '' }
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{p:0.25}}>
            {divisionStandings.length !== 0 ? divisionStandings[3].location : '' }
          </TableCell>
          <TableCell sx={{p:0.25}}>
            {divisionStandings.length !== 0 ? divisionStandings[3].overallRecord[0] + '-' + divisionStandings[3].overallRecord[1] : '' }
            {divisionStandings.length !== 0  && divisionStandings[3].overallRecord[2] !== 0 ? '-' + divisionStandings[3].overallRecord[2] : '' }
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>         
  )
}

DivisionStandings.propTypes = {
// TODO Add PropTypes
}