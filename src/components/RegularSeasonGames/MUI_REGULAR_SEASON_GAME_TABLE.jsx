import React from 'react'
import PropTypes from 'prop-types'

import RegularSeasonGame from './RegularSeasonGame'

import { Paper, Grid, Container } from '@mui/material'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/Button';

import Typography from '@mui/material/Typography'
import MuiGame from './MUI_REGULAR_SEASON_GAME.jsx'

export default function MuiTable(props) {
  const { games } = props
  return (
    <>
    {/* <ButtonGroup variant="outlined" size="small" >
      <Button variant="outlined">1</Button>
      <Button variant="outlined">2</Button>
      <Button>3</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>10</Button>
      <Button>11</Button>
      <Button>12</Button>
      <Button>13</Button>
      <Button>14</Button>
      <Button>15</Button>
      <Button>16</Button>
      <Button>17</Button>
      <Button>18</Button>
    </ButtonGroup> */}
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
        <MuiGame />
      </Grid>
      <Grid item xs={18}>
        <MuiGame />
      </Grid>
      <Grid item xs={18}>
        <MuiGame />
      </Grid>
      <Grid item xs={18}>
        <MuiGame />
      </Grid>
      <Grid item xs={18}>
        <MuiGame />
      </Grid>
      <Grid item xs={18}>
        <MuiGame />
      </Grid>
      <Grid item xs={18}>
        <MuiGame />
      </Grid>
      <Grid item xs={18}>
        <MuiGame />
      </Grid>
      <Grid item xs={18}>
        <MuiGame />
      </Grid>
      <Grid item xs={18}>
        <MuiGame />
      </Grid>
      <Grid item xs={18}>
        <MuiGame />
      </Grid>
      <Grid item xs={18}>
        <MuiGame />
      </Grid>
      <Grid item xs={18}>
        <MuiGame />
      </Grid>
      <Grid item xs={18}>
        <MuiGame />
      </Grid>
      <Grid item xs={18}>
        <MuiGame />
      </Grid>
      <Grid item xs={18}>
        <MuiGame />
      </Grid>

      

		</Grid>
      </>
  )
}

MuiTable.propTypes = {
// TODO Add PropTypes
}