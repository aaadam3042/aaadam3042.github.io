import { Box, Button, Card, CardContent, Chip, Typography } from '@mui/material'

export function CarouselCard({ project }) {
    return(<>
    <Card className='cardSlide' sx={{height: '350px', mx: '20px', my: '10px', minWidth: '250px', borderRadius: '10px', 
        backgroundImage: `url(./src/assets/images/projects/${project.image ? project.image : "/Default.png"})`, backgroundSize: 'cover', backgroundPosition: 'center',
        '&:hover .cardLine': {transform: 'scaleX(1.3)'}, '&:hover .cardContentSlide': {transform: 'translateY(1)'},
        position: 'relative', overflow: 'hidden'}}>

        <Box style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(3px)', zIndex: 1,}} sx={{WebkitBackdropFilter: 'blur(3px)'}} />

        <Box style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
            background: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))', backdropFilter: 'blur(3px)', zIndex: 2}} 
            sx={{className: 'cardBgSlide', WebkitBackdropFilter: 'blur(3px)'}} />

        <CardContent className='cardContentSlide' sx={{position: 'relative', height: 305, zIndex: 5, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transform: 'translateY(60%)'}}>
            <Typography fontWeight='bold' fontSize='large'> {project.title} </Typography>
            <Box className='cardLine' height={5} width={150} borderRadius={2} bgcolor='#44df81' mb={1} 
                sx={{transition: 'transform 500ms ease-in-out', transform: 'scaleX(0.5)',}} />
            <Typography fontStyle='italic'> {project.devDate} - {project.status} </Typography>
            <Chip label="Tags" size='small' color='warning' sx={{px: 1,}} />
            <Typography display='-webkit-box' sx={{WebkitLineClamp: 4, WebkitBoxOrient: 'vertical'}} textOverflow='ellipsis' overflow='hidden' py={2} maxHeight='9ch'> {project.description} </Typography>
          <Button variant='outlined' sx={{borderColor: 'lightblue', color: 'lightblue'}}> More </Button> {/* Restrict size of description, add ..., full description in popup with links */}
        </CardContent>
    </Card>
    </>);
}

export default CarouselCard;