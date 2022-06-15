import React from 'react'
import PropTypes from 'prop-types'
import { AlternateEmail} from "@mui/icons-material";
import { Paper, Grid, Container } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'

import CompletedRoadWin from './CompletedRoadWin'
import CompletedHomeWin from './CompletedHomeWin'

export default function CompletedTieGame (props) {
  const { games } = props
  
  return (
    games.roadScore > games.homeScore
      ? <CompletedRoadWin games={games} />
      : <CompletedHomeWin games={games} />
  )
}