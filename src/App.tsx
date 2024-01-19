import { useState } from 'react'
import './App.css'

import "./assets/fonts/NeulisAlt-Light.otf"
import "./assets/fonts/Peachi-Bold.otf"
import "./assets/fonts/Peachi-Medium.otf"

import Intro from './components/intro'
import Project from './components/project'
import { Grid } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Grid>
      <Intro />
      <Project />
    </Grid>
  )
}

export default App
