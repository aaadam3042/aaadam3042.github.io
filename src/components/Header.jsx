import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import { Box, Button, Divider, Paper, Toolbar, Typography, Stack, styled } from '@mui/material'
import banner from '../assets/images/Banner4.jpg'
import { LinkedIn, Email, KeyboardArrowDown } from "@mui/icons-material"

export function Header() {
    const Offset = styled('div')(({ theme }) => theme.mixins.Box);

    const [showButton, setShowButton] = useState(true);

	const isBigScreen = useMediaQuery({query: '(min-width: 1024px)'})
    let scrollSpeed = "-1"
    if (isBigScreen) {
		scrollSpeed = "-2"
	}		

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const speedFactor = scrollSpeed; // Adjust this factor to make the background scroll faster or slower
            const backgroundElement = document.getElementById('background-box');
            backgroundElement.style.backgroundPositionY = `${scrollPosition * speedFactor}px`;
            console.log(scrollPosition)
            if (scrollPosition > 250) {
                setShowButton(false)
            } else {
                setShowButton(true)
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return(
    <>
        <Paper elevation={3} square sx={{bgcolor: 'black', position: "absolute", top: 0, left:0, right: 0, 
            width: "100vw", height: "100vh" , alignContent: "center", justifyContent: "center",
            alignItems: "center", alignSelf: "center", justifyItems: "center"
            }}>
            <Box id="background-box" 
                position="absolute" top="0px" bottom="0px" left="0px" right="0px" zIndex={1} 
                style={{backgroundImage:`url(${banner})`, backgroundPosition: "center top", backgroundRepeat: "no-repeat",
                backgroundSize: "300vh", backgroundAttachment: 'fixed', filter: "blur(0px)", willChange: 'transform'}
            } />
            <Stack direction="column" style={{position: "relative", zIndex: 3}} paddingTop={2} display='flex' alignContent='center'>
                <Typography fontFamily='AwalRamadhan' color="white" variant='h1' textAlign="center" alignSelf="center" justifySelf="center" zIndex={4}> Ahmad Adam <span style={{whiteSpace: 'nowrap', fontSize: '65px'}}> 💻 </span> </Typography> 
                <Box width='50vw' alignSelf='center'>
                    <Divider variant="middle" sx={{bgcolor: 'white'}} />
                </Box>
                <Typography paddingY={2} fontWeight='bold' color="white"> Honours year <b style={{color: 'orange'}}> Software Engineering </b> student </Typography>
                <Stack direction="row" position="relative" alignSelf="center" alignContent="center" >
                <Button endIcon={<LinkedIn />} variant='contained' sx={{paddingX: 2, marginX: 2}} href='https://www.linkedin.com/in/ahmad-a-adam/'> Connect </Button>
                <Button startIcon={<Email />} variant='contained' sx={{paddingX: 2, marginX: 2}}> Contact </Button>
                </Stack>
            </Stack>

            <Box position='fixed' bottom='20px' width='100vw' zIndex={5} display='flex' justifyContent='center'>
                <Paper elevation={5} sx={{borderRadius: 5, textAlign: 'center', maxWidth:'170px', display:'flex', paddingX: 1,
                     opacity: showButton ? 1 : 0, transition: 'opacity 0.3s ease-in-out'}}>
                    <KeyboardArrowDown sx={{alignSelf: 'center'}} />
                    <Button sx={{py: 1}} href="#projects"> Projects </Button>
                </Paper>
            </Box>
            
            <Offset />
        </Paper>
    </>
    )
}

export default Header;