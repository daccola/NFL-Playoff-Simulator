import React from 'react'
import PropTypes from 'prop-types'
import { AlternateEmail} from "@mui/icons-material";
import { Paper, Grid, Container } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'

import CompletedTieGame from './CompletedTieGame'
import CompletedRoadWin from './CompletedRoadWin'
import CompletedHomeWin from './CompletedHomeWin'


//import CompletedNonTieGame from './CompletedNonTieGame'

export default function CompletedGame (props) {
  const { games } = props

  if(games.roadScore === games.homeScore) {
    return <CompletedTieGame games={games} />
  }
  else if (games.roadScore > games.homeScore)
  {
    return <CompletedRoadWin games={games} />
  }
  else if (games.roadScore < games.homeScore)
  {
    return <CompletedHomeWin games={games} />
  }
}