import { useRef, useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, Chip, Dialog, IconButton, Stack, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'

export function CarouselCard({ project }) {
    const parentRef = useRef(null);
    const childRef = useRef(null);
    const buttonRef = useRef(null);
    const [translateY, setTranslateY] = useState(0);
    const [openCard, setOpenCard] = useState(false);

    useEffect(() => {
    if (parentRef.current && childRef.current) {
        const parentHeight = parentRef.current.offsetTop;
        const childHeight = childRef.current.offsetTop;
        setTranslateY(parentHeight - childHeight + 335);
    }
    }, []);

    const tags = project.tags.map(tag => 
        <>
        <Chip label={tag} size='small' color='warning' sx={{px: 1, mx: 0.5}} />
        </>
    )

    const handleOpenCard = () => {
        setOpenCard(true);
        buttonRef.current.blur();
    }

    const handleCloseCard = (event, reason) => {
        setOpenCard(false)
    }

    return(<>
    <Dialog 
        sx={{ color: '#fff', zIndex: 10}}
        open={openCard}
        onClose={handleCloseCard}>
        <Card sx={{width: '40vw', height: '50vh'}}> 
            <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                <Stack direction='row' justifyContent='space-between' alignItems='start'>
                    <Typography variant='h4' mb={1}>
                        {project.title}
                    </Typography>
                    <IconButton onClick={handleCloseCard}>
                        <Close />
                    </IconButton>
                </Stack>

                <Typography fontStyle='italic'>
                    {project.devDate} - {project.status}
                </Typography>

                <Stack  direction='row' overflow='hidden'>
                    {tags}
                </Stack>
                
                <Typography my={2}>
                    {project.description}
                </Typography>

                <Stack direction='row' overflow='hidden' alignSelf='center'>
                    <Button variant='outlined' sx={{mx: "10px"}} href={project.githubURL}> Github </Button>
                    <Button variant='outlined' sx={{mx: "10px"}} href={project.appURL} disabled={project.appURL=="" ? true:false}> View App </Button>
                </Stack>
            </CardContent>
        </Card>

    </Dialog>

    <Card className='cardSlide' sx={{height: '350px', mx: '20px', my: '10px', minWidth: '250px', borderRadius: '10px', 
        backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center',
        '&:hover .cardLine': {transform: 'scaleX(1.3)'}, '&:hover .cardContentSlide': {transform: 'translateY(0)'}, 
        '&:hover .cardBgSlide': {transform: 'translateY(0)'}, ':focus-within .cardContentSlide': {},
        position: 'relative', overflow: 'hidden',}}>

        <Box style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.1)', zIndex: 1,}} />

        <Box style={{
            position: 'fixed', top: 0, right: 0, bottom: 0, left: 0,
            backdropFilter: 'blur(1px)', zIndex: 2,}} sx={{WebkitBackdropFilter: 'blur(1px)'}} />

        <Box className="cardBgSlide" style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
            background: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))', backdropFilter: 'blur(3px)', zIndex: 3}} 
            sx={{WebkitBackdropFilter: 'blur(3px)', transform: 'translateY(350px)', transition: 'transform 350ms ease-in-out'}} />

        <CardContent className='cardContentSlide' sx={{position: 'relative', height: 305, zIndex: 5, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transform: `translateY(${translateY}px)`, transition: 'transform 350ms ease-in-out'}} ref={parentRef}>
            <Typography fontWeight='bold' fontSize='large'> {project.title} </Typography>
            <Box className='cardLine' height={5} width={150} borderRadius={2} bgcolor='#44df81' mb={1} 
                sx={{transition: 'transform 500ms ease-in-out', transform: 'scaleX(0.5)',}} />
            <Typography fontStyle='italic'> {project.status} </Typography>
            <Stack  direction='row' overflow='hidden'>
                {tags}
            </Stack>
            <Typography display='-webkit-box' sx={{WebkitLineClamp: 4, WebkitBoxOrient: 'vertical'}} textOverflow='ellipsis' overflow='hidden' py={2} maxHeight='9ch' ref={childRef}> {project.description} </Typography>
            <Button variant='outlined' onClick={handleOpenCard} sx={{borderColor: 'lightblue', color: 'lightblue'}} ref={buttonRef}> More </Button> 
        </CardContent>
    </Card>
    </>);
}

export default CarouselCard;