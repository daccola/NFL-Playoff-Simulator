import React from 'react'

import AppBar from '@mui/material/AppBar';
import { IconButton, Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {
  return (
      <AppBar position="static" sx={{ bgcolor: '#013369' }}>
        <Toolbar>
				  <Box>
            <IconButton sx={{ p: 0 }}>
              <Avatar src="https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg" alt="NFL Logo" />
            </IconButton>   
          </Box>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            NFL Playoff Seeder 2022
          </Typography>
          <Button color="inherit">Reset</Button>
        </Toolbar>
      </AppBar>
  )
}

					
