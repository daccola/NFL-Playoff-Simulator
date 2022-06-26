import React from 'react'
import PropTypes from 'prop-types'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function DivisionStandings (props) {
  return (
			<Table size="small" >
        <TableHead>
          <TableRow>
            <TableCell sx={{p:0, pt:2, px:0.25, fontWeight: 'bold'}}>NFC NORTH</TableCell>
            <TableCell sx={{p:0, pt:2, px:0.25, fontWeight: 'bold'}}>RECORD</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{p:0, m:0}}>
            <TableCell sx={{p:0.25}}>San Francisco</TableCell>
            <TableCell sx={{p:0.25}}>16-0-0</TableCell>
          </TableRow>
					<TableRow>
            <TableCell sx={{p:0.25}}>Green Bay</TableCell>
            <TableCell sx={{p:0.25}}>16-0</TableCell>
          </TableRow>
					<TableRow>
            <TableCell sx={{p:0.25}}>Green Bay</TableCell>
            <TableCell sx={{p:0.25}}>16-0</TableCell>
          </TableRow>
					<TableRow>
            <TableCell sx={{p:0.25}}>Green Bay</TableCell>
            <TableCell sx={{p:0.25}}>16-0</TableCell>
          </TableRow>
        </TableBody>
      </Table>         
  )
}

DivisionStandings.propTypes = {
// TODO Add PropTypes
}