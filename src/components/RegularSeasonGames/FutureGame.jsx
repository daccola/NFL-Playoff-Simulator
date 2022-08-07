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
  const { week, index, game, updateFunction } = props

  const [isTie, setIsTie] = React.useState(game.tempState === "Tie");
  const [isRoadWin, setIsRoadWin] = React.useState(game.tempState === "RoadWin");
  const [isHomeWin, setIsHomeWin] = React.useState(game.tempState === "HomeWin");

  isTieClick = () => {
    setIsTie(!isTie)
    setIsRoadWin(false)
    setIsHomeWin(false)

    if(isTie) {
      updateFunction(week, index, "Default")
    } else {
      updateFunction(week, index, "Tie")
    }
  }

  isRoadWinClick = () => {
    setIsRoadWin(!isRoadWin)
    setIsTie(false)
    setIsHomeWin(false)

    if(isRoadWin) {
      updateFunction(week, index, "Default")

    } else {
      updateFunction(week, index, "RoadWin")
    }
  }

  isHomeWinClick = () => {
    setIsHomeWin(!isHomeWin)
    setIsRoadWin(false)
    setIsTie(false)

    if(isHomeWin) {
      updateFunction(week, index, "Default")

    } else {
      updateFunction(week, index, "HomeWin")
    }
  }

  if(game.tempState === "Tie") {
    return <FutureTie game={game} isTieClick={isTieClick} isRoadWinClick={isRoadWinClick} isHomeWinClick={isHomeWinClick} />
  }
  else if (game.tempState === "RoadWin") {
    return <FutureRoadWin game={game} isTieClick={isTieClick} isRoadWinClick={isRoadWinClick} isHomeWinClick={isHomeWinClick} />
  }
  else if (game.tempState === "HomeWin"){
    return <FutureHomeWin game={game} isTieClick={isTieClick} isRoadWinClick={isRoadWinClick} isHomeWinClick={isHomeWinClick} />
  }
  else {
    return <FutureDefaultGame game={game} isTieClick={isTieClick} isRoadWinClick={isRoadWinClick} isHomeWinClick={isHomeWinClick} />
  } 
}
