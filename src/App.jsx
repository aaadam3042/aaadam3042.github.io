import './App.css'
import './assets/fonts/AwalFont.css'
import { useMediaQuery } from 'react-responsive'
import { AppBar, Box, Button, Container, Card, CardContent, Chip, Divider, Grid, Paper, Stack, Toolbar, Typography } from '@mui/material'
import Header from './components/Header'
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
      image: "/Eyestrain-manager.png",
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
      image: "/Personal-website.png",
      githubURL: "https://github.com/aaadam3042/aaadam3042.github.io",
      appURL: "",
      devDate: "2024",
      status:"Complete",
    },
    {
      title: "Expense Tracker",
      platform: "IOS",
      description: "DIY app to help track daily expenses.",
      tags: ["Swift", "SwiftUI"],
      image: "",
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
      image: "/HFS.png",
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
      image: "/Pythonic-hangman.png",
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
      image: "/Rusty-Hangman.png",
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
    <Card sx={{height: '350px', mx: '20px', minWidth: '250px', borderRadius: '10px', 
        backgroundImage: `url(/src/assets/images/projects/${project.image ? project.image : "/Default.png"})`, backgroundSize: 'cover', backgroundPosition: 'center',
        position: 'relative', overflow: 'hidden'}}>

        <Box style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(3px)', zIndex: 1,}} sx={{WebkitBackdropFilter: 'blur(3px)'}} />

        <Box style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
            background: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))', backdropFilter: 'blur(3px)', zIndex: 2}} 
            sx={{className: 'cardSlide', WebkitBackdropFilter: 'blur(3px)'}} />

        <CardContent className='cardSlide' sx={{position: 'relative', height: 305, zIndex: 5, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Typography fontWeight='bold' fontSize='large'> {project.title} </Typography>
            <Box height={5} width={150} borderRadius={2} bgcolor='green' mb={1} />
            <Typography> {project.devDate} - {project.status} </Typography>
            <Chip label="Tags" size='small' color='warning' sx={{px: 1,}} />
            <Typography display='-webkit-box' sx={{WebkitLineClamp: 4, WebkitBoxOrient: 'vertical'}} textOverflow='ellipsis' overflow='hidden' py={2} maxHeight='9ch'> {project.description} </Typography>
          <Button variant='outlined' sx={{borderColor: 'lightblue', color: 'lightblue'}}> More </Button> {/* Restrict size of description, add ..., full description in popup with links */}
        </CardContent>
    </Card>
    </>

)

  const gameGallery = projects.map(game =>
    <>
    <Card>

    </Card>
    </>
  )

  return (
    <>
      <Box id="BasePage">
        <Header />
        <Paper square elevation={5} sx={{width: '100vw', height: '100vh', top:0, left:0, right:0, bottom:0, 
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

        </Paper>
      </Box>
    </>
  )
}

export default App;
