import React from 'react'
import PropTypes from 'prop-types'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, Grid, Container, Stack, Typography } from '@mui/material'
import TeamInfoRight from './TeamInfoRight';
import TeamInfoLeft2 from './TeamInfoLeft';
import PlayoffGame from './PlayoffGame'

export default function WildCardContainerNFC (props) {
  return (
    <Grid container >
      <Grid item xs={12} sx={{pt:0}}>
        <Typography variant="body2" align="right" sx={{px:1}}>
          WILD-CARD GAMES
    	</Typography>
      </Grid>

      
      <Grid item xs={12} sx={{pb:1}}>
				<PlayoffGame />
      </Grid>     
			<Grid item xs={12} sx={{pb:1}}>
				<PlayoffGame />
      </Grid>    
			<Grid item xs={12}>
				<PlayoffGame />
      </Grid>        
    </Grid>
  )
}