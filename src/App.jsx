import './App.css'
import './assets/fonts/AwalFont.css'
import { AppBar, Box, Button, Container, Card, Chip, Divider, Grid, Paper, Stack, Toolbar, Typography } from '@mui/material'
import Header from './components/Header'
import cardBG from './assets/images/Cardbg.png'

function App() {
  return (
    <>
      <Header />
      <Paper square elevation={5} sx={{width: '100vw', height: '100vh', top:0, left:0, right:0, bottom:0, margin:0, padding:0, marginTop: "45vh", bgcolor: "#1a181b"}}>

      <Typography color="#efeff0" variant='body1' style={{display: 'inline-block', whiteSpace: 'pre-line'}} align="justify" paddingX={2}> 
       Hi! I'm Ahmad. I'm an Honours year student at 
      <b style={{color: 'orange', whiteSpace: 'nowrap'}}> The University of Sydney </b>
       studying a bachelors of Engineering (Software).
      </Typography>

      </Paper>
    </>
  )
}

export default App;
