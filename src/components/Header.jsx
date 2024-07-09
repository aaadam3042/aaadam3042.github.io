import { Box, Button, Paper, Toolbar, Typography, Stack, styled } from '@mui/material'
import banner from '../assets/images/Banner4.jpg'
import { LinkedIn, Email } from "@mui/icons-material"

export function Header() {
    const Offset = styled('div')(({ theme }) => theme.mixins.Box);

    return(
    <>
        <Paper elevation={3} square sx={{bgcolor: 'black', position: "absolute", top: 0, left:0, right: 0, width: "100vw", height: "40vh" , alignContent: "center", justifyContent: "center", alignItems: "center", alignSelf: "center", justifyItems: "center"}}>
          <Box position="absolute" top="0px" bottom="0px" left="0px" right="0px" zIndex={1} style={{backgroundImage:`url(${banner})`, backgroundPosition: "center", backgroundSize: "cover", filter: "blur(2px)"}} />
          <Stack direction="column" style={{position: "relative", zIndex: 3}} paddingTop={2}>
            <Typography fontFamily='AwalRamadhan' color="white" variant='h1' textAlign="center" alignSelf="center" justifySelf="center" zIndex={3}> Ahmad Adam </Typography>
            <Stack direction="row" position="relative" alignSelf="center" alignContent="center" >
              <Button endIcon={<LinkedIn />} variant='contained' sx={{paddingX: 2, marginX: 2}} href='https://www.linkedin.com/in/ahmad-a-adam/'> Connect </Button>
              <Button startIcon={<Email />} variant='contained' sx={{paddingX: 2, marginX: 2}}> Contact </Button>
            </Stack>
          </Stack>
        <Offset />
        </Paper>
    </>
    )
}

export default Header;