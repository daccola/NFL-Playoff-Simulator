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

import IncompleteFutureGame from './IncompleteFutureGame'


export default function RegularSeasonGame (props) {
  const { games } = props

  // const [flag, setFlag] = React.useState(true);

  // handleClick = () => {
  //   setFlag(!flag)
  // }

  if(games) {
    if (games.completed){
      return <CompletedGame games={games} />
    }
    else if (games.state === "pre"){
      return (
        <Card variant="outlined" >
          <Grid container>
            <Grid item xs={12}>
              <Card sx={{px:0}}>
                <IncompleteFutureGame games={games} />
              </ Card>
            </ Grid>
          </ Grid>
          <Grid container>
            <Grid item >
              <Typography variant="body2" >
                0-0
              </Typography>
              <Typography variant="body2" >
                SUN 3:25 PM
              </Typography>
            </Grid>
          </Grid>
        </Card>
      )
    }
    else if (games.state === "in"){
      <h4>drew</h4>
    }
  }

  return null
}

RegularSeasonGame.propTypes = {
// TODO Add PropTypes
}