import React from 'react'
import PropTypes from 'prop-types'
import { AlternateEmail} from "@mui/icons-material";
import { Paper, Grid, Container } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import CompletedGame from './CompletedGame';
import IncompleteGame from './IncompletedGame';

export default function RegularSeasonGame (props) {
  const { games } = props

  const [flag, setFlag] = React.useState(true);

  handleClick = () => {
    setFlag(!flag)
  }

  if(games) {
    return (
  	  games.completed
      ? <CompletedGame games={games} />
      : <IncompleteGame games={games} />
    )  
  }

  return null
}

RegularSeasonGame.propTypes = {
// TODO Add PropTypes
}