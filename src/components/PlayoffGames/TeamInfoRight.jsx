import React from 'react'
import PropTypes from 'prop-types'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, Grid, Container, Stack, Typography } from '@mui/material'


export default function TeamInfoRight (props) {
  return (
    <Grid container columns={24} alignItems="center">
      <Grid item xs={17} sx={{pr:1}}>
				<Grid container>
					<Grid item xs={17}>
						<Typography variant="body2" align="right">
          		1st Seed
        		</Typography>
					</Grid>
					<Grid item xs={17}>
						<Typography variant="body2" align="right">
        			San Francisco
        		</Typography>
					</Grid>
					<Grid item xs={17}>
						<Typography variant="body2" align="right">
    					Record: 16-0-0
  					</Typography>
					</Grid>
				</Grid>
      </Grid>
			<Grid item xs={7}>
				<img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/gb.png" alt="TODO" className = 'col-12'></img>
      </Grid>
    </Grid>
  )
}