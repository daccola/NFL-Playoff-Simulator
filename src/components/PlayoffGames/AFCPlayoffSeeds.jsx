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
// import WildCardGame from './WildCardGame'
import PlayoffGame from './PlayoffGame'
import ByeContainer from './ByeContainer';
import WildCardContainer from './WildCardContainer';



export default function ConferenceGamesTable (props) {
  return (
    <Grid container spacing={2} > 
        <Grid item xs={12} >
        {/* <h4>AFC</h4> */}
        <Typography variant="h4" align="right">
        AFC
    	    </Typography>
        </Grid>
        {/* <h4>AFC</h4> */}
        
        <Grid item xs={12} >
          <ByeContainer />
        </Grid>
        <Grid item xs={12} >
          <WildCardContainer />
        </Grid>
    </Grid>
  )  
}

ConferenceGamesTable.propTypes = {
// TODO Add PropTypes
}