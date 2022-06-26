import React from 'react'
import PropTypes from 'prop-types'
import { AlternateEmail} from "@mui/icons-material";
import { Paper, Grid, Container } from '@mui/material'

import Typography from '@mui/material/Typography'

export default function CompletedTieGame (props) {
    const { games } = props
  
  return (
    <Grid container spacing={0} alignItems="center" >
        <Grid item xs={5} sx={{px:1.5}}>
          <img src={games.roadImage} alt="TODO" className = 'col-12'></img>
        </Grid>
        <Grid item xs={2} sx={{px:0.25}}>
          <AlternateEmail sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={5} sx={{px:1.5 }}>
          <img src={games.homeImage} alt="TODO" className = 'col-12'></img>
        </Grid>
        <Grid item xs={5} sx={{px:1.5, borderBottom: 4, borderColor: '#1b48e0' }}>
          <Typography variant="body2" align="center">
            {games.roadScore}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{px:0.25}}>
        </Grid>
        <Grid item xs={5} sx={{px:1.5, borderBottom: 4, borderColor: '#1b48e0', mb:0.5 }}>
          <Typography variant="body2" align="center">
            {games.roadScore}
          </Typography>
        </Grid>
      </ Grid>  
  )
}