import React from 'react'
import PropTypes from 'prop-types'
import { AlternateEmail} from "@mui/icons-material";
import { Paper, Grid, Container } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'

import CompletedTieGame from './CompletedTieGame'
import CompletedNonTieGame from './CompletedNonTieGame'

export default function CompletedGame (props) {
  const { games } = props

  if(games.roadScore === games.homeScore) {

  }
  else if (games.roadScore > games.homeScore)
  {

  }
  else if (games.roadScore < games.homeScore)
  {
    
  }
  return (
    <Card variant="outlined" >
      <Grid container>
        <Grid item xs={12}>
          <Card sx={{px:0}}>
            {games.roadScore === games.homeScore
              ? <CompletedTieGame games={games}/>
              : <CompletedNonTieGame games={games}/>
            }
          </ Card>
        </ Grid>
      </ Grid>
      <Grid container>
        <Grid item >
          <Typography variant="body2" >
            {games.roadScore} - {games.homeScore}
          </Typography>
          <Typography variant="body2" >
            FINAL
          </Typography>
        </Grid>
      </Grid>
    </Card>
	)
}