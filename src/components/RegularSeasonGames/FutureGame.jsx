import React from 'react'
import PropTypes from 'prop-types'
import { AlternateEmail} from "@mui/icons-material";
import { Paper, Grid, Container } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'

import FutureTie from './FutureTie';
import FutureRoadWin from './FutureRoadWin';
import FutureHomeWin from './FutureHomeWin';
import FutureDefaultGame from './FutureDefaultGame'

export default function FutureGame (props) {
  const { games } = props

  const [isTie, setIsTie] = React.useState(false);
  const [isRoadWin, setIsRoadWin] = React.useState(false);
  const [isHomeWin, setIsHomeWin] = React.useState(false);

  isTieClick = () => {
    setIsTie(!isTie)
    setIsRoadWin(false)
    setIsHomeWin(false)
  }

  isRoadWinClick = () => {
    setIsRoadWin(!isRoadWin)
    setIsTie(false)
    setIsHomeWin(false)
  }

  isHomeWinClick = () => {
    setIsHomeWin(!isHomeWin)
    setIsRoadWin(false)
    setIsTie(false)
  }

  if(isTie) {
    return <FutureTie games={games} isTieClick={isTieClick} isRoadWinClick={isRoadWinClick} isHomeWinClick={isHomeWinClick} />
  }
  else if (isRoadWin) {
    return <FutureRoadWin games={games} isTieClick={isTieClick} isRoadWinClick={isRoadWinClick} isHomeWinClick={isHomeWinClick} />
  }
  else if (isHomeWin){
    return <FutureHomeWin games={games} isTieClick={isTieClick} isRoadWinClick={isRoadWinClick} isHomeWinClick={isHomeWinClick} />
  }
  else {
    return <FutureDefaultGame games={games} isTieClick={isTieClick} isRoadWinClick={isRoadWinClick} isHomeWinClick={isHomeWinClick} />
  } 
}
