import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState} from 'react';

import { Paper, Grid, Container, Button, Tabs, Tab, Card, Box, AppBar } from '@mui/material'

import RegularSeasonGame from './RegularSeasonGame.jsx'

export default function RegularSeasonGamesTable(props) {
  const { info, updateFunction } = props

  const [tabValue, setTabValue] = React.useState("1")
  const [gameInfo, setGameInfo] = React.useState(JSON.parse(info).gameInfoToDate)

  useEffect(() => {
    setGameInfo(JSON.parse(info).gameInfoToDate)
  }, [info])
 
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  }

  return (
    <Grid container spacing={1} columns={144} > 
      <Grid item xs={144} >
        <Tabs value={tabValue} onChange={handleTabChange} variant="scrollable" scrollButtons textColor="secondary" indicatorColor="secondary">
          <Tab label="Week 1" value="1" />
          <Tab label="Week 2" value="2" />
          <Tab label="Week 3" value="3" />
          <Tab label="Week 4" value="4" />
          <Tab label="Week 5" value="5" />
          <Tab label="Week 6" value="6" />
          <Tab label="Week 7" value="7" />
          <Tab label="Week 8" value="8" />
          <Tab label="Week 9" value="9" />
          <Tab label="Week 10" value="10" />
          <Tab label="Week 11" value="11" />
          <Tab label="Week 12" value="12" />
          <Tab label="Week 13" value="13" />
          <Tab label="Week 14" value="14" />
          <Tab label="Week 15" value="15" />
          <Tab label="Week 16" value="16" />
          <Tab label="Week 17" value="17" />
          <Tab label="Week 18" value="18" />
        </Tabs>       
      </Grid>

      {tabValue === "1" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={1} index={0} game={gameInfo[1][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={1} index={1} game={gameInfo[1][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={1} index={2} game={gameInfo[1][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={1} index={3} game={gameInfo[1][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={1} index={4} game={gameInfo[1][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={1} index={5} game={gameInfo[1][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={1} index={6} game={gameInfo[1][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={1} index={7} game={gameInfo[1][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={1} index={8} game={gameInfo[1][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={1} index={9} game={gameInfo[1][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={1} index={10} game={gameInfo[1][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={1} index={11} game={gameInfo[1][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={1} index={12} game={gameInfo[1][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={1} index={13} game={gameInfo[1][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={1} index={14} game={gameInfo[1][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={1} index={15} game={gameInfo[1][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}

      {tabValue === "2" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={2} index={0} game={gameInfo[2][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={2} index={1} game={gameInfo[2][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={2} index={2} game={gameInfo[2][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={2} index={3} game={gameInfo[2][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={2} index={4} game={gameInfo[2][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={2} index={5} game={gameInfo[2][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={2} index={6} game={gameInfo[2][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={2} index={7} game={gameInfo[2][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={2} index={8} game={gameInfo[2][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={2} index={9} game={gameInfo[2][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={2} index={10} game={gameInfo[2][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={2} index={11} game={gameInfo[2][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={2} index={12} game={gameInfo[2][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={2} index={13} game={gameInfo[2][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={2} index={14} game={gameInfo[2][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={2} index={15} game={gameInfo[2][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}

      {tabValue === "3" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={3} index={0} game={gameInfo[3][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={3} index={1} game={gameInfo[3][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={3} index={2} game={gameInfo[3][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={3} index={3} game={gameInfo[3][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={3} index={4} game={gameInfo[3][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={3} index={5} game={gameInfo[3][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={3} index={6} game={gameInfo[3][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={3} index={7} game={gameInfo[3][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={3} index={8} game={gameInfo[3][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={3} index={9} game={gameInfo[3][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={3} index={10} game={gameInfo[3][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={3} index={11} game={gameInfo[3][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={3} index={12} game={gameInfo[3][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={3} index={13} game={gameInfo[3][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={3} index={14} game={gameInfo[3][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={3} index={15} game={gameInfo[3][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}

      {tabValue === "4" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={4} index={0} game={gameInfo[2][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={4} index={1} game={gameInfo[4][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={4} index={2} game={gameInfo[4][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={4} index={3} game={gameInfo[4][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={4} index={4} game={gameInfo[4][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={4} index={5} game={gameInfo[4][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={4} index={6} game={gameInfo[4][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={4} index={7} game={gameInfo[4][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={4} index={8} game={gameInfo[4][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={4} index={9} game={gameInfo[4][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={4} index={10} game={gameInfo[4][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={4} index={11} game={gameInfo[4][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={4} index={12} game={gameInfo[4][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={4} index={13} game={gameInfo[4][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={4} index={14} game={gameInfo[4][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={4} index={15} game={gameInfo[4][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}

      {tabValue === "5" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={5} index={0} game={gameInfo[5][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={5} index={1} game={gameInfo[5][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={5} index={2} game={gameInfo[5][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={5} index={3} game={gameInfo[5][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={5} index={4} game={gameInfo[5][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={5} index={5} game={gameInfo[5][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={5} index={6} game={gameInfo[5][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={5} index={7} game={gameInfo[5][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={5} index={8} game={gameInfo[5][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={5} index={9} game={gameInfo[5][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={5} index={10} game={gameInfo[5][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={5} index={11} game={gameInfo[5][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={5} index={12} game={gameInfo[5][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={5} index={13} game={gameInfo[5][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={5} index={14} game={gameInfo[5][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={5} index={15} game={gameInfo[5][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}

      {tabValue === "6" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={6} index={0} game={gameInfo[6][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={6} index={1} game={gameInfo[6][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={6} index={2} game={gameInfo[6][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={6} index={3} game={gameInfo[6][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={6} index={4} game={gameInfo[6][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={6} index={5} game={gameInfo[6][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={6} index={6} game={gameInfo[6][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={6} index={7} game={gameInfo[6][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={6} index={8} game={gameInfo[6][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={6} index={9} game={gameInfo[6][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={6} index={10} game={gameInfo[6][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={6} index={11} game={gameInfo[6][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={6} index={12} game={gameInfo[6][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={6} index={13} game={gameInfo[6][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={6} index={14} game={gameInfo[6][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={6} index={15} game={gameInfo[6][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}

      {tabValue === "7" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={7} index={0} game={gameInfo[6][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={7} index={1} game={gameInfo[7][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={7} index={2} game={gameInfo[7][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={7} index={3} game={gameInfo[7][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={7} index={4} game={gameInfo[7][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={7} index={5} game={gameInfo[7][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={7} index={6} game={gameInfo[7][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={7} index={7} game={gameInfo[7][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={7} index={8} game={gameInfo[7][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={7} index={9} game={gameInfo[7][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={7} index={10} game={gameInfo[7][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={7} index={11} game={gameInfo[7][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={7} index={12} game={gameInfo[7][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={7} index={13} game={gameInfo[7][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={7} index={14} game={gameInfo[7][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={7} index={15} game={gameInfo[7][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}

      {tabValue === "8" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={8} index={0} game={gameInfo[8][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={8} index={1} game={gameInfo[8][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={8} index={2} game={gameInfo[8][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={8} index={3} game={gameInfo[8][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={8} index={4} game={gameInfo[8][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={8} index={5} game={gameInfo[8][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={8} index={6} game={gameInfo[8][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={8} index={7} game={gameInfo[8][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={8} index={8} game={gameInfo[8][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={8} index={9} game={gameInfo[8][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={8} index={10} game={gameInfo[8][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={8} index={11} game={gameInfo[8][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={8} index={12} game={gameInfo[8][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={8} index={13} game={gameInfo[8][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={8} index={14} game={gameInfo[8][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={8} index={15} game={gameInfo[8][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}

      {tabValue === "9" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={9} index={0} game={gameInfo[9][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={9} index={1} game={gameInfo[9][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={9} index={2} game={gameInfo[9][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={9} index={3} game={gameInfo[9][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={9} index={4} game={gameInfo[9][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={9} index={5} game={gameInfo[9][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={9} index={6} game={gameInfo[9][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={9} index={7} game={gameInfo[9][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={9} index={8} game={gameInfo[9][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={9} index={9} game={gameInfo[9][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={9} index={10} game={gameInfo[9][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={9} index={11} game={gameInfo[9][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={9} index={12} game={gameInfo[9][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={9} index={13} game={gameInfo[9][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={9} index={14} game={gameInfo[9][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={9} index={15} game={gameInfo[9][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}

      {tabValue === "10" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={10} index={0} game={gameInfo[10][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={10} index={1} game={gameInfo[10][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={10} index={2} game={gameInfo[10][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={10} index={3} game={gameInfo[10][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={10} index={4} game={gameInfo[10][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={10} index={5} game={gameInfo[10][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={10} index={6} game={gameInfo[10][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={10} index={7} game={gameInfo[10][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={10} index={8} game={gameInfo[10][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={10} index={9} game={gameInfo[10][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={10} index={10} game={gameInfo[10][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={10} index={11} game={gameInfo[10][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={10} index={12} game={gameInfo[10][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={10} index={13} game={gameInfo[10][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={10} index={14} game={gameInfo[10][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={10} index={15} game={gameInfo[10][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}

      {tabValue === "11" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={11} index={0} game={gameInfo[11][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={11} index={1} game={gameInfo[11][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={11} index={2} game={gameInfo[11][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={11} index={3} game={gameInfo[11][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={11} index={4} game={gameInfo[11][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={11} index={5} game={gameInfo[11][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={11} index={6} game={gameInfo[11][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={11} index={7} game={gameInfo[11][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={11} index={8} game={gameInfo[11][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={11} index={9} game={gameInfo[11][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={11} index={10} game={gameInfo[11][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={11} index={11} game={gameInfo[11][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={11} index={12} game={gameInfo[11][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={11} index={13} game={gameInfo[11][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={11} index={14} game={gameInfo[11][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={11} index={15} game={gameInfo[11][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}

      {tabValue === "12" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={12} index={0} game={gameInfo[12][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={12} index={1} game={gameInfo[12][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={12} index={2} game={gameInfo[12][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={12} index={3} game={gameInfo[12][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={12} index={4} game={gameInfo[12][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={12} index={5} game={gameInfo[12][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={12} index={6} game={gameInfo[12][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={12} index={7} game={gameInfo[12][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={12} index={8} game={gameInfo[12][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={12} index={9} game={gameInfo[12][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={12} index={10} game={gameInfo[12][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={12} index={11} game={gameInfo[12][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={12} index={12} game={gameInfo[12][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={12} index={13} game={gameInfo[12][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={12} index={14} game={gameInfo[12][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={12} index={15} game={gameInfo[12][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}

      {tabValue === "13" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={13} index={0} game={gameInfo[13][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={13} index={1} game={gameInfo[13][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={13} index={2} game={gameInfo[13][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={13} index={3} game={gameInfo[13][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={13} index={4} game={gameInfo[13][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={13} index={5} game={gameInfo[13][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={13} index={6} game={gameInfo[13][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={13} index={7} game={gameInfo[13][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={13} index={8} game={gameInfo[13][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={13} index={9} game={gameInfo[13][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={13} index={10} game={gameInfo[13][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={13} index={11} game={gameInfo[13][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={13} index={12} game={gameInfo[13][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={13} index={13} game={gameInfo[13][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={13} index={14} game={gameInfo[13][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={13} index={15} game={gameInfo[13][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}

      {tabValue === "14" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={14} index={0} game={gameInfo[14][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={14} index={1} game={gameInfo[14][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={14} index={2} game={gameInfo[14][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={14} index={3} game={gameInfo[14][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={14} index={4} game={gameInfo[14][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={14} index={5} game={gameInfo[14][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={14} index={6} game={gameInfo[14][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={14} index={7} game={gameInfo[14][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={14} index={8} game={gameInfo[14][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={14} index={9} game={gameInfo[14][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={14} index={10} game={gameInfo[14][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={14} index={11} game={gameInfo[14][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={14} index={12} game={gameInfo[14][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={14} index={13} game={gameInfo[14][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={14} index={14} game={gameInfo[14][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={14} index={15} game={gameInfo[14][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}

      {tabValue === "15" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={15} index={0} game={gameInfo[15][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={15} index={1} game={gameInfo[15][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={15} index={2} game={gameInfo[15][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={15} index={3} game={gameInfo[15][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={15} index={4} game={gameInfo[15][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={15} index={5} game={gameInfo[15][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={15} index={6} game={gameInfo[15][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={15} index={7} game={gameInfo[15][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={15} index={8} game={gameInfo[15][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={15} index={9} game={gameInfo[15][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={15} index={10} game={gameInfo[15][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={15} index={11} game={gameInfo[15][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={15} index={12} game={gameInfo[15][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={15} index={13} game={gameInfo[15][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={15} index={14} game={gameInfo[15][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={15} index={15} game={gameInfo[15][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}

      {tabValue === "16" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={16} index={0} game={gameInfo[16][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={16} index={1} game={gameInfo[16][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={16} index={2} game={gameInfo[16][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={16} index={3} game={gameInfo[16][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={16} index={4} game={gameInfo[16][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={16} index={5} game={gameInfo[16][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={16} index={6} game={gameInfo[16][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={16} index={7} game={gameInfo[16][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={16} index={8} game={gameInfo[16][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={16} index={9} game={gameInfo[16][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={16} index={10} game={gameInfo[16][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={16} index={11} game={gameInfo[16][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={16} index={12} game={gameInfo[16][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={16} index={13} game={gameInfo[16][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={16} index={14} game={gameInfo[16][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={16} index={15} game={gameInfo[16][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}

      {tabValue === "17" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={17} index={0} game={gameInfo[17][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={17} index={1} game={gameInfo[17][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={17} index={2} game={gameInfo[17][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={17} index={3} game={gameInfo[17][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={17} index={4} game={gameInfo[17][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={17} index={5} game={gameInfo[17][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={17} index={6} game={gameInfo[17][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={17} index={7} game={gameInfo[17][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={17} index={8} game={gameInfo[17][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={17} index={9} game={gameInfo[17][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={17} index={10} game={gameInfo[17][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={17} index={11} game={gameInfo[17][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={17} index={12} game={gameInfo[17][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={17} index={13} game={gameInfo[17][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={17} index={14} game={gameInfo[17][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={17} index={15} game={gameInfo[17][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}

      {tabValue === "18" && gameInfo.length !== 0 && (
        <>
          <Grid item xs={18}>
            <RegularSeasonGame week={18} index={0} game={gameInfo[18][0]} updateFunction={updateFunction} />
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={18} index={1} game={gameInfo[18][1]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={18} index={2} game={gameInfo[18][2]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={18} index={3} game={gameInfo[18][3]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={18} index={4} game={gameInfo[18][4]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={18} index={5} game={gameInfo[18][5]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={18} index={6} game={gameInfo[18][6]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={18} index={7} game={gameInfo[18][7]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={18} index={8} game={gameInfo[18][8]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={18} index={9} game={gameInfo[18][9]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={18} index={10} game={gameInfo[18][10]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={18} index={11} game={gameInfo[18][11]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={18} index={12} game={gameInfo[18][12]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={18} index={13} game={gameInfo[18][13]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={18} index={14} game={gameInfo[18][14]} updateFunction={updateFunction}/>
          </Grid>
          <Grid item xs={18}>
            <RegularSeasonGame week={18} index={15} game={gameInfo[18][15]} updateFunction={updateFunction}/>
          </Grid>
        </>
      )}
    </Grid>
  )
}

RegularSeasonGamesTable.propTypes = {
// TODO Add PropTypes
}