import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Grid, Container } from '@mui/material'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'

import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack'
import MuiStandingsTable from './MUI_DIVISION_STANDINGS_TABLE';

export default function MuiTableGroup (props) {
  const { game } = props

//   if(game) {
    return (
        <>
        <Stack spacing={2}>
        <MuiStandingsTable />
        <MuiStandingsTable />
        <MuiStandingsTable />
        <MuiStandingsTable />
</Stack>
        	
        </>		
    )
  
}

MuiStandingsTable.propTypes = {
// TODO Add PropTypes
}