import React from 'react'
import PropTypes from 'prop-types'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Adb } from "@mui/icons-material";

import { Paper, Grid, Container } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'

export default function RegularSeasonGame (props) {
  return (
  	<Card variant="outlined" >
      <CardContent sx={{p:0,'&:last-child': { pb: 0 }}}>  
        <Grid container>
          <Grid item xs={5}>
            <Card sx={{px:1.5, borderBottom: 4, borderColor: 'red' }}>
      	      <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/det.png" alt="TODO" className = 'col-12'></img>
            </Card>
          </ Grid>
          <Grid item xs={2} >
            <Card sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
            <Adb />

              {/* TODO @ */}
            </Card>
          </ Grid>
          <Grid item xs={5}>
            <Card sx={{px:1.5, borderBottom: 2, borderColor: 'purple' }}>
              <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/gb.png" alt="TODO" className = 'col-12'></img>
            </Card>
          </ Grid> 
		    </ Grid>
        <Grid container>
          <Grid item >
            <Typography variant="body2" >
              FINAL
            </Typography>
            {/* <AlternateEmailIcon /> */}
            {/* <svg data-testid="AlternateEmailIcon"></svg> */}
{/* <AlternateEmailIcon color="primary" /> */}

          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )  
}

RegularSeasonGame.propTypes = {
// TODO Add PropTypes
}