import React from 'react'
import PropTypes from 'prop-types'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function DivisionStandings (props) {
  return (
		<>
			<Table size="small" >
        <TableHead>
          <TableRow>
            <TableCell>NF NORTH</TableCell>
            <TableCell>RECORD</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Green Bay</TableCell>
            <TableCell>16-0-0</TableCell>
          </TableRow>
					<TableRow>
            <TableCell>Green Bay</TableCell>
            <TableCell>16-0</TableCell>
          </TableRow>
					<TableRow>
            <TableCell>Green Bay</TableCell>
            <TableCell>16-0</TableCell>
          </TableRow>
					<TableRow>
            <TableCell>Green Bay</TableCell>
            <TableCell>16-0</TableCell>
          </TableRow>
        </TableBody>
      </Table>         
	  </>	    
  )
}

DivisionStandings.propTypes = {
// TODO Add PropTypes
}