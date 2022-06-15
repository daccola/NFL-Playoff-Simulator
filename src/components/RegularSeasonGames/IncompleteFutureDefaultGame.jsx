import React from 'react'
import PropTypes from 'prop-types'
import { AlternateEmail} from "@mui/icons-material";
import { Paper, Grid, Container } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'

export default function IncompleteFutureDefaultGame (props) {
  const { games, isTieClick, isRoadWinClick, isHomeWinClick } = props

  return (
    <Grid container alignItems="center">
        <Grid item xs={5} onClick={isRoadWinClick} sx={{px:1.5, borderBottom: 4, borderColor: '#fff'}}>
          <img src={games.roadImage} alt="TODO" className = 'col-12'></img>
        </Grid>
        <Grid item xs={2} sx={{px:0.25}} onClick={isTieClick}>
          <AlternateEmail sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={5} onClick={isHomeWinClick} sx={{px:1.5, borderBottom: 4, borderColor: '#fff'}}>
          <img src={games.homeImage} alt="TODO" className = 'col-12'></img>
        </Grid>
      </ Grid>
    )
}