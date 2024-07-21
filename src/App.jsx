import './App.css'
import './assets/fonts/AwalFont.css'
import { useMediaQuery } from 'react-responsive'
import { AppBar, Box, Button, Container, Divider, Grid, Paper, Stack, Toolbar, Typography } from '@mui/material'
import { Default, EyestrainManager, HFS, PersonalWebsite, PythonicHangman, RustyHangman } from './assets/images/projects'
import Header from './components/Header'
import CarouselCard from './components/CarouselCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function App() {
    const isBigScreen = useMediaQuery({query: '(min-width: 1024px)'})

  const projects = [
    {
      title: "Eyestrain Manager",
      platform: "desktop",
      description: "Terminal application to help manage eye strain while sitting at your computer. Essentially an alarm to help divide up eyesight sessions.",
      tags: ["python", "health"],
      image: EyestrainManager,
      githubURL: "https://github.com/aaadam3042/EyestrainManager.png",
      appURL: "",
      devDate: "2024",
      status:"Complete",
    },
    {
      title: "Personal website",
      platform: "Web",
      description: "You're looking at it right now. This website was created using React and MaterialUI",
      tags: ["Javascript", "React", "MaterialUI"],
      image: PersonalWebsite,
      githubURL: "https://github.com/aaadam3042/aaadam3042.github.io",
      appURL: "",
      devDate: "2024",
      status:"Complete", 
    },
    {
      title: "Expense Tracker",
      platform: "IOS",
      description: "Mobile app to help track daily expenses.",
      tags: ["Swift", "SwiftUI"],
      image: Default,
      githubURL: "https://github.com/aaadam3042/Swift-Expense-Tracker",
      appURL: "",
      devDate: "2024",
      status:"Complete",
    },
    {
      title: "Halal Food Sydney App",
      platform: "Web",
      description: "Web application to find and search for Halal restaurants and butchers meeting a strict subset of rules.",
      tags: ["Javascript", "React", "Python", "Flask", "PostgreSQL"],
      image: HFS,
      githubURL: "https://github.com/aaadam3042/Halal-Food-Sydney-App",
      appURL: "",
      devDate: "2023",
      status:"In development",
    },
  ];

  const games = [
    {
      title: "Pythonic Hangman",
      platform: "desktop",
      description: "Classic hangman game implemented in Python.",
      tags: ["python", "game"],
      image: PythonicHangman,
      githubURL: "https://github.com/aaadam3042/Pythonic-Hangman",
      appURL: "",
      devDate: "2024",
      status:"Complete",
    },
    {
      title: "Rusty Hangman",
      platform: "macOS",
      description: "Classic hangman game implemented in Rust.",
      tags: ["Rust", "game"],
      image: RustyHangman,
      githubURL: "https://github.com/aaadam3042/rusty-hangman",
      appURL: "",
      devDate: "2024",
      status:"Complete",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const projectGallery = projects.map(project => 
    <>
    < CarouselCard project={project} />
    </>

)

  const gameGallery = games.map(game =>
    <>
    < CarouselCard project={game} />
    </>
  )

  return (
    <>
      <Box id="BasePage">
        <Header />
        <Paper square elevation={5} sx={{width: '100vw', height: 'auto', top:0, left:0, right:0, bottom:0, 
            margin:0, padding:0, marginTop: "100vh;", bgcolor: "#1a181b", display: 'flex', flexDirection: 'column',
            justifyContent:'start', alignItems:'center'
            }}>
        
            <Box width='90vw' mt={5} mb={7}>
                <Typography color='white' variant='h4'> About Me </Typography>
                <Box width='100%' display="flex" justifyContent="center" my={1}>
                    <Divider variant='middle' sx={{bgcolor: 'white', width: '60vw'}}></Divider>
                </Box>
                    
                <Typography color="#efeff0" variant='h5' style={{display: 'inline-block', whiteSpace: 'pre-line', wordWrap: 'break-word'}} align="center" paddingX={1}> 
                Hi! I'm Ahmad. I'm an Honours year student at {}
                <b style={{color: 'orange', whiteSpace: 'nowrap'}}> The University of Sydney </b>
                {} studying a bachelors of Engineering (Software).
                </Typography>
            </Box>

            <Box width='90vw' sx={{class: 'CarouselContainer'}} display='flex' flexDirection='column' alignItems='center'>
                <a name='projects'></a>
                <Typography color='white' variant='h4'> Projects </Typography>
                <Box width='100%' display="flex" justifyContent="center" my={1} mb={4}>
                    <Divider variant='middle' sx={{bgcolor: 'white', width: '60vw'}}></Divider>
                </Box>

                <Box width='100%'>
                    <Carousel responsive={responsive}
                    swipeable draggable infinite showDots 
                    centerMode={isBigScreen} autoPlay={isBigScreen} autoPlaySpeed={5000}
                    containerClass='container-style' itemClass='item-style' 
                    >
                        {projectGallery}
                    </Carousel>
                </Box>
            </Box>

            <Box width='90vw' sx={{class: 'CarouselContainer'}} display='flex' flexDirection='column' alignItems='center' my={10}>
                <a name='projects'></a>
                <Typography color='white' variant='h4'> Games </Typography>
                <Box width='100%' display="flex" justifyContent="center" my={1} mb={4}>
                    <Divider variant='middle' sx={{bgcolor: 'white', width: '60vw'}}></Divider>
                </Box>

                <Box width='100%'>
                    <Carousel responsive={responsive}
                    swipeable draggable infinite showDots 
                    centerMode={isBigScreen} autoPlay={isBigScreen} autoPlaySpeed={5000}
                    containerClass='container-style' itemClass='item-style' 
                    >
                        {gameGallery}
                    </Carousel>
                </Box>
            </Box>

        </Paper>
      </Box>
    </>
  )
}

export default App;
