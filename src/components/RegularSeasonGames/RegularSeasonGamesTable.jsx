import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Grid, Container, Button, Tabs, Tab, Card, Box, AppBar } from '@mui/material'


import RegularSeasonGame from './RegularSeasonGame.jsx'

export default function RegularSeasonGamesTable(props) {
  const { games } = props
  return (
    <>
    
      	{/* <Grid container spacing={2} columns={144}> */}

    {/* <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}> */}
   {/* <Tabs value="3"
   variant="scrollable"
  scrollButtons
  allowScrollButtonsMobile>
    <Tab label="1" />
    <Tab label="2" />
    <Tab label="3" value="3" />
    <Tab label="4" />
    <Tab label="5" />
    <Tab label="6" />
    <Tab label="7" />
    <Tab label="8" />
    <Tab label="9" />
    <Tab label="10" />
    <Tab label="11" />
    <Tab label="12" />
    <Tab label="13" />
    <Tab label="14" />
    <Tab label="15" />
    <Tab label="16" />
    <Tab label="17" />
    <Tab label="18" />
  </Tabs> */}
  {/* </Box> */}
  {/* </Grid> */}
  	<Grid container spacing={2} columns={144} > 
    
      <Grid item xs={144} sx={{ width: 'inherit' }}>
      {/* <AppBar position="static" bgcolor="red"> */}
        <Tabs value="3" variant="scrollable" scrollButtons >
    <Tab label="Week 1" />
    <Tab label="Week 2" />
    <Tab label="Week 3" value="3" />
    <Tab label="Week 4" />
    <Tab label="Week 5" />
    <Tab label="Week 6" />
    <Tab label="Week 7" />
    <Tab label="Week 8" />
    <Tab label="Week 9" />
    <Tab label="Week 10" />
    




    </Tabs>
      {/* </ AppBar> */}
        {/* <Box display="flex" flexDirection="column" alignItems="stretch" sx={{bgcolor: 'green'}}>
        <Tabs value="3" variant="scrollable" scrollButtons>
    <Tab label="Week 1" />
    <Tab label="Week 2" />
    <Tab label="Week 3" value="3" />
    <Tab label="Week 4" />
    <Tab label="Week 5" />
    <Tab label="Week 6" />
    <Tab label="Week 7" />
    <Tab label="Week 8" />
    <Tab label="Week 9" />
    <Tab label="Week 10" />
    <Tab label="Week 11" />
    <Tab label="Week 12" />



    </Tabs>
        </Box> */}
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