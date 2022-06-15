import React from 'react'
import PropTypes from 'prop-types'
import { AlternateEmail} from "@mui/icons-material";
import { Paper, Grid, Container } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'

export default function CompletedTieGame (props) {
  const { games } = props
  
  return (
		<Grid container alignItems="center">
      <Grid item xs={5} onClick={handleClick} sx={{px:1.5, borderBottom: 4, borderColor: 'gray'}}>
        <img src={games.roadImage} alt="TODO" className = 'col-12'></img>
      </Grid>
      <Grid item xs={2} sx={{px:0.25}}>
        <AlternateEmail sx={{ width: '100%' }} />
      </Grid>
      <Grid item xs={5} sx={{px:1.5}}>
        <img src={games.homeImage} alt="TODO" className = 'col-12'></img>
      </Grid>
    </ Grid>
  )
}