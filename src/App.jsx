import './App.css'
import './assets/fonts/AwalFont.css'
import { AppBar, Box, Button, Container, Card, Chip, Divider, Grid, Paper, Stack, Toolbar, Typography } from '@mui/material'
import Header from './components/Header'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function App() {

  const projects = [
    {
      title: "Eyestrain Manager",
      platform: "desktop",
      description: "",
      tags: ["python", "health"],
      image: "/",
      githubURL: "/",
      appURL: "",
    },
    {
      title: "Personal website",
      platform: "Web",
      description: "You're looking at it right now",
      tags: ["Javascript", "React", "MaterialUI"],
      image: "/",
      githubURL: "/",
      appURL: "",
    },
    {
      title: "Expense Tracker",
      platform: "IOS",
      description: "",
      tags: ["Swift", "SwiftUI"],
      image: "/",
      githubURL: "/",
      appURL: "",
    },
    {
      title: "Halal Food Sydney App",
      platform: "Web",
      description: "",
      tags: ["Javascript", "React", "Python", "Flask", "PostgreSQL"],
      image: "/",
      githubURL: "/",
      appURL: "",
    },
  ];

  const games = [
    {
      title: "Pythonic Hangman",
      platform: "desktop",
      description: "",
      tags: ["python", "game"],
      image: "/",
      githubURL: "/",
      appURL: "",
    },
    {
      title: "Rusty Hangman",
      platform: "macOS",
      description: "",
      tags: ["Rust", "game"],
      image: "/",
      githubURL: "/",
      appURL: "",
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
    <Card>
      {project.title}
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
        
            <Box width='90vw' mt={5} mb={10}>
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

            <Box width='90vw'>
                <a name='projects'></a>
                <Typography color='white' variant='h4'> Projects </Typography>
                <Box width='100%' display="flex" justifyContent="center" my={1}>
                    <Divider variant='middle' sx={{bgcolor: 'white', width: '60vw'}}></Divider>
                </Box>

                <Carousel style={""}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={false} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    renderDotsOutside>
                    {/* {projectGallery} */}
                    <div> item1 </div>
                    <div> item2 </div>
                </Carousel>
            </Box>

        </Paper>
      </Box>
    </>
  )
}

export default App;
