import React from 'react'
import PropTypes from 'prop-types'
import { AlternateEmail} from "@mui/icons-material";
import { Paper, Grid, Container } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import CompletedGame from './CompletedGame';
//import IncompleteGame from './IncompletedGame';

import FutureGame from './FutureGame'


export default function RegularSeasonGame (props) {
  const { game } = props

  if(game) {
    if (game.completed){
      return (
        <Card variant="outlined" sx={{bgcolor:'#eeeeee'}}>
          <Grid container>
            <Grid item xs={12}>
              {/* <IncompleteFutureGame games={games} /> */}
              <CompletedGame games={game} />
            </ Grid>
          </ Grid>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="body2" align="center" sx={{ fontWeight: 'bold' }}>
                FINAL
              </Typography>
            </Grid>
          </Grid>
        </Card>
      )
    }
    else if (game.state === "pre"){
      const info = game.info.split(" ")
      const timeParts = info[4].split(":")
      //clean up with string interopation
      const centralTime = timeParts[0] === "1" ? "12:" + timeParts[1] : timeParts[0] - 1 + ":" + timeParts[1]
      const amOrpm = info[4].substring(0,2) === "12" ? "AM" : info[5]
      const dayTime = info[0].toUpperCase().substring(0,3) + " " + centralTime + " " + amOrpm
      return (
        <Card variant="outlined" sx={{bgcolor:'#eeeeee'}}>
          <Grid container>
            <Grid item xs={12}>
              <FutureGame games={game} />
            </ Grid>
          </ Grid>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="body2" align="center">
                {dayTime}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      )
    }
    else if (game.state === "in"){
      <h4>drew</h4>
    }
  }

  return null
}

RegularSeasonGame.propTypes = {
// TODO Add PropTypes
}