import React from 'react'
import PropTypes from 'prop-types'

import { Paper, Grid, Container } from '@mui/material'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'

import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import WildCardGame from './WildCardGame'


export default function MuiPlay (props) {

    return (
			<>
		    <h4>NFC</h4>
				<Card variant="outlined" sx={{bgcolor: '#d50a0a' }}>
          <CardContent >  
            <WildCardGame />
						<WildCardGame />
            <WildCardGame />
            <WildCardGame />

          </CardContent>
        </Card>
				</>
    )
  
}

MuiPlay.propTypes = {
// TODO Add PropTypes
}