import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Grid, Container } from '@mui/material'


import RegularSeasonGame from './RegularSeasonGame.jsx'

export default function RegularSeasonGamesTable(props) {
  const { games } = props
  return (
    <>
   
  	<Grid container spacing={1} columns={144}>
      {/* <Grid item xs={8}>
        <Button variant="outlined">1</Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined">2</Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined">3</Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined">4</Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined">5</Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined">6</Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined">7</Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined">8</Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined">9</Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined">10</Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined">11</Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined">12</Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined">13</Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined">14</Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined">15</Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined">16</Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined">17</Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined">18</Button>
      </Grid> */}
      
      <Grid item xs={18}>
        <RegularSeasonGame />
      </Grid>
      <Grid item xs={18}>
        <RegularSeasonGame />
      </Grid>
      <Grid item xs={18}>
        <RegularSeasonGame />
      </Grid>
      <Grid item xs={18}>
        <RegularSeasonGame />
      </Grid>
      <Grid item xs={18}>
        <RegularSeasonGame />
      </Grid>
      <Grid item xs={18}>
        <RegularSeasonGame />
      </Grid>
      <Grid item xs={18}>
        <RegularSeasonGame />
      </Grid>
      <Grid item xs={18}>
        <RegularSeasonGame />
      </Grid>
      <Grid item xs={18}>
        <RegularSeasonGame />
      </Grid>
      <Grid item xs={18}>
        <RegularSeasonGame />
      </Grid>
      <Grid item xs={18}>
        <RegularSeasonGame />
      </Grid>
      <Grid item xs={18}>
        <RegularSeasonGame />
      </Grid>
      <Grid item xs={18}>
        <RegularSeasonGame />
      </Grid>
      <Grid item xs={18}>
        <RegularSeasonGame />
      </Grid>
      <Grid item xs={18}>
        <RegularSeasonGame />
      </Grid>
      <Grid item xs={18}>
        <RegularSeasonGame />
      </Grid>

      

		</Grid>
      </>
  )
}

RegularSeasonGamesTable.propTypes = {
// TODO Add PropTypes
}