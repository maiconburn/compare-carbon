import React from 'react'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import styles from '../styles/Projects.module.scss'


export default function Projects() {
    const [purchasingFor, setPurchasingFor] = React.useState('business')
    const [purchasingBefore, setPurchasingBefore] = React.useState('no')
    const [factorImportant, setFactorImportant] = React.useState('budget')
    const [projectPlace, setProjectPlace] = React.useState('global')
    const [projectType, setProjectType] = React.useState('social')

    const handlePurchasingFor = (event, newPurchasingFor) => {
        setPurchasingFor(newPurchasingFor)
    }
    const handlePurchasingBefore = (event, newPurchasingBefore) => {
        setPurchasingBefore(newPurchasingBefore)
    }
    const handleFactorImportant = (event, newFactorImportant) => {
        setFactorImportant(newFactorImportant)
    }
    const handleProjectPlace = (event, newProjectPlace) => {
        setProjectPlace(newProjectPlace)
    }
    const handleProjectType = (event, newProjectType) => {
        setProjectType(newProjectType)
    }
    return (
        <Container maxWidth="lg" className={styles.projects}>
            <Box xs='12'>
                <Grid container className={styles.projectsList}>
                    <Grid container xs='4' height='100%'>
                        <Card className={styles.projectsOptions}>
                            <Grid container>
                                <Grid item xs='12'>
                                    <Typography variant="h5" component="h5">
                                        Screening preferences:
                                    </Typography>
                                </Grid>
                                <Grid item xs='12'>
                                    <Typography gutterBottom variant="h6" component="h6">
                                        Who are you purchasing for?
                                    </Typography>
                                </Grid>
                                <Grid item xs='12'>
                                    <ToggleButtonGroup 
                                        value={purchasingFor}
                                        exclusive
                                        onChange={handlePurchasingFor}
                                        aria-label="Who are you purchasing for?"
                                        color="secondary" 
                                    >
                                        <ToggleButton value="business" >I’m purchasing for a business</ToggleButton>
                                        <ToggleButton value="individual" >I’m purchasing as an individual</ToggleButton>
                                    </ToggleButtonGroup>
                                </Grid>
                                <Grid item xs='12'>
                                    <Typography gutterBottom variant="h6" component="h6">
                                        Have you purchased carbon credits before?
                                    </Typography>
                                </Grid>
                                <Grid item xs='12'>
                                    <ToggleButtonGroup 
                                        value={purchasingBefore}
                                        exclusive
                                        onChange={handlePurchasingBefore}
                                        aria-label="Have you purchased carbon credits before?"
                                        color="secondary" 
                                    >
                                        <ToggleButton value="yes" >Yes</ToggleButton>
                                        <ToggleButton value="no" >No</ToggleButton>
                                    </ToggleButtonGroup>
                                </Grid>
                                <Grid item xs='12'>
                                    <Typography gutterBottom variant="h6" component="h6">
                                        Which factor is more important to you?
                                    </Typography>
                                </Grid>
                                <Grid item xs='12'>
                                    <ToggleButtonGroup 
                                        value={factorImportant}
                                        exclusive
                                        onChange={handleFactorImportant}
                                        aria-label="Which factor is more important to you?"
                                        color="secondary" 
                                    >
                                        <ToggleButton value="budget" >Budget ($6–$18 per credit)</ToggleButton>
                                        <ToggleButton value="impact" >Environmental Impact ($18–$50 per credit)</ToggleButton>
                                    </ToggleButtonGroup>
                                </Grid>
                                <Grid item xs='12'>
                                    <Typography gutterBottom variant="h6" component="h6">
                                        Would you like to support local or global projects?
                                    </Typography>
                                </Grid>
                                <Grid item xs='12'>
                                    <ToggleButtonGroup 
                                        value={projectPlace}
                                        exclusive
                                        onChange={handleProjectPlace}
                                        aria-label=" Would you like to support local or global projects?"
                                        color="secondary" 
                                    >
                                        <ToggleButton value="local" >Local Projects</ToggleButton>
                                        <ToggleButton value="global" >Global Projects</ToggleButton>
                                        <ToggleButton value="both" >Both</ToggleButton>
                                    </ToggleButtonGroup>
                                </Grid>
                                <Grid item xs='12'>
                                    <Typography gutterBottom variant="h6" component="h6">
                                        What kind of projects do you want to support?
                                    </Typography>
                                </Grid>
                                <Grid item xs='12'>
                                    <ToggleButtonGroup 
                                        value={projectType}
                                        exclusive
                                        onChange={handleProjectType}
                                        aria-label="What kind of projects do you want to support?"
                                        color="secondary" 
                                    >
                                        <ToggleButton value="Reforestation" >Reforestation</ToggleButton>
                                        <ToggleButton value="energy" >Renewable Energy</ToggleButton>
                                        <ToggleButton value="social" >Social Projects</ToggleButton>
                                    </ToggleButtonGroup>
                                </Grid>
                            </Grid>
                        </Card> 
                    </Grid>
                    <Grid container xs='8'>
                        <Card className={styles.card}>
                            <CardActionArea className={styles.actionArea}>
                                <CardMedia
                                className={styles.media}
                                component="img"
                                alt="Contemplative Reptile"
                                image="./img/amazon-project.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent className={styles.content}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Project Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit rutrum accumsan. Donec eget tortor ultricies neque placerat fringilla. Praesent at eleifend augue, quis facilisis nisi.
                                    </Typography>
                                </CardContent>
                                <CardActions className={styles.actions}>
                                    <Button size="small" color="secondary">
                                    Buy it now
                                    </Button>
                                    <Button size="small" color="secondary">
                                    Learn More
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                        <Card className={styles.card}>
                            <CardActionArea className={styles.actionArea}>
                                <CardMedia
                                className={styles.media}
                                component="img"
                                alt="Contemplative Reptile"
                                image="./img/amazon-project.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent className={styles.content}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Project Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit rutrum accumsan. Donec eget tortor ultricies neque placerat fringilla. Praesent at eleifend augue, quis facilisis nisi. 
                                    </Typography>
                                </CardContent>
                                <CardActions className={styles.actions}>
                                    <Button size="small" color="secondary">
                                    Buy it now
                                    </Button>
                                    <Button size="small" color="secondary">
                                    Learn More
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                        <Card className={styles.card}>
                            <CardActionArea className={styles.actionArea}>
                                <CardMedia
                                className={styles.media}
                                component="img"
                                alt="Contemplative Reptile"
                                image="./img/amazon-project.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent className={styles.content}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Project Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit rutrum accumsan. Donec eget tortor ultricies neque placerat fringilla. Praesent at eleifend augue, quis facilisis nisi. 
                                    </Typography>
                                </CardContent>
                                <CardActions className={styles.actions}>
                                    <Button size="small" color="secondary">
                                    Buy it now
                                    </Button>
                                    <Button size="small" color="secondary">
                                    Learn More
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                        <Card className={styles.card}>
                            <CardActionArea className={styles.actionArea}>
                                <CardMedia
                                className={styles.media}
                                component="img"
                                alt="Contemplative Reptile"
                                image="./img/amazon-project.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent className={styles.content}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Project Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit rutrum accumsan. Donec eget tortor ultricies neque placerat fringilla. Praesent at eleifend augue, quis facilisis nisi. 
                                    </Typography>
                                </CardContent>
                                <CardActions className={styles.actions}>
                                    <Button size="small" color="secondary">
                                    Buy it now
                                    </Button>
                                    <Button size="small" color="secondary">
                                    Learn More
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                        <Card className={styles.card}>
                            <CardActionArea className={styles.actionArea}>
                                <CardMedia
                                className={styles.media}
                                component="img"
                                alt="Contemplative Reptile"
                                image="./img/amazon-project.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent className={styles.content}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Project Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit rutrum accumsan. Donec eget tortor ultricies neque placerat fringilla. Praesent at eleifend augue, quis facilisis nisi. 
                                    </Typography>
                                </CardContent>
                                <CardActions className={styles.actions}>
                                    <Button size="small" color="secondary">
                                    Buy it now
                                    </Button>
                                    <Button size="small" color="secondary">
                                    Learn More
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                        
                        
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}