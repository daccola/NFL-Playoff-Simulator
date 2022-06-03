import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Grid, Container } from '@mui/material'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
export default function MuiGame (props) {
  const { game } = props

//   if(game) {
    return (
    	<Card variant="outlined" >
          <CardContent sx={{p:0,'&:last-child': { pb: 0 }}}>  
            <Grid container>
              <Grid item xs={5}>
                <Card>
          	      <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/gb.png" alt="TODO" className = 'col-12'></img>
                </Card>
              </ Grid>
              <Grid item xs={2} >
                <Card>
                  {/* TODO @ */}
                </Card>
              </ Grid>
              <Grid item xs={5}>
                <Card>
          	      <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/gb.png" alt="TODO" className = 'col-12'></img>
                </Card>
              </ Grid>  
				    </ Grid>
          </CardContent>
        </Card>
    )
  
}

MuiGame.propTypes = {
// TODO Add PropTypes
}