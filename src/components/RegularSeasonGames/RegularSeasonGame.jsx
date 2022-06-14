import React from 'react'
import PropTypes from 'prop-types'
import { AlternateEmail} from "@mui/icons-material";
import { Paper, Grid, Container } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'

export default function RegularSeasonGame (props) {
  const { games } = props

if(games) {
  return (
  	<Card variant="outlined" >
      <Grid container>
        <Grid item xs={12}>
          <Card sx={{px:0}}>
            <Grid container alignItems="center">
              <Grid item xs={5} sx={{px:1.5, borderBottom: 4, borderColor: 'green'}}>
                <img src={games.roadImage} alt="TODO" className = 'col-12'></img>
              </Grid>
              <Grid item xs={2} sx={{px:0.25}}>
                <AlternateEmail sx={{ width: '100%' }} />
              </Grid>
              <Grid item xs={5} sx={{px:1.5, borderBottom: 4, borderColor: 'green'}}>
                <img src={games.homeImage} alt="TODO" className = 'col-12'></img>
              </Grid>
            </ Grid>
          </ Card>
        </ Grid>
      </ Grid>
      <Grid container>
        <Grid item >
          <Typography variant="body2" >
            FINAL
          </Typography>
          <Typography variant="body2" >
            December 24, 2022
          </Typography>
        </Grid>
      </Grid>
    </Card>
  )  
}

else {
  return <div></div>
}
}

RegularSeasonGame.propTypes = {
// TODO Add PropTypes
}