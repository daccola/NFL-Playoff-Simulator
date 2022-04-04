//import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import reactDOM from 'react-dom'
import Simulator from './Simulator'

// Bring in custom components
//import GameBrowser from './GameBrowser.jsx'

reactDOM.render(
   <Simulator />,
   document.getElementById('root')
)
