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
import styles from '../styles/Projects.module.scss'


export default function Projects() {
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
                                    <ButtonGroup color="secondary" aria-label="large outlined primary button group">
                                        <Button>I’m purchasing for a business</Button>
                                        <Button>I’m purchasing as an individual</Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item xs='12'>
                                    <Typography gutterBottom variant="h6" component="h6">
                                        Have you purchased carbon credits before?
                                    </Typography>
                                </Grid>
                                <Grid item xs='12'>
                                    <ButtonGroup color="secondary" aria-label="large outlined primary button group">
                                        <Button>Yes</Button>
                                        <Button>No</Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item xs='12'>
                                    <Typography gutterBottom variant="h6" component="h6">
                                        Which factor is more important to you?
                                    </Typography>
                                </Grid>
                                <Grid item xs='12'>
                                    <ButtonGroup color="secondary" aria-label="large outlined primary button group">
                                        <Button>Budget ($6–$18 per credit)</Button>
                                        <Button>Environmental Impact ($18–$50 per credit)</Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item xs='12'>
                                    <Typography gutterBottom variant="h6" component="h6">
                                        Would you like to support local or global projects?
                                    </Typography>
                                </Grid>
                                <Grid item xs='12'>
                                    <ButtonGroup color="secondary" aria-label="large outlined primary button group">
                                        <Button>Local Projects</Button>
                                        <Button>Global Projects</Button>
                                        <Button>Both</Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item xs='12'>
                                    <Typography gutterBottom variant="h6" component="h6">
                                        Would you like to support local or global projects?
                                    </Typography>
                                </Grid>
                                <Grid item xs='12'>
                                    <ButtonGroup size="small" color="secondary" aria-label="large outlined primary button group">
                                        <Button>Reforestation</Button>
                                        <Button>Renewable Energy</Button>
                                        <Button>Social Projects</Button>
                                    </ButtonGroup>
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
                                image="./img/amazon.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent className={styles.content}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Project Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit rutrum accumsan. Donec eget tortor ultricies neque placerat fringilla. Praesent at eleifend augue, quis facilisis nisi. In eget nisi auctor, mattis diam non, malesuada ligula.
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
                                image="./img/amazon.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent className={styles.content}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Project Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit rutrum accumsan. Donec eget tortor ultricies neque placerat fringilla. Praesent at eleifend augue, quis facilisis nisi. In eget nisi auctor, mattis diam non, malesuada ligula.
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
                                image="./img/amazon.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent className={styles.content}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Project Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit rutrum accumsan. Donec eget tortor ultricies neque placerat fringilla. Praesent at eleifend augue, quis facilisis nisi. In eget nisi auctor, mattis diam non, malesuada ligula.
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
                                image="./img/amazon.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent className={styles.content}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Project Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit rutrum accumsan. Donec eget tortor ultricies neque placerat fringilla. Praesent at eleifend augue, quis facilisis nisi. In eget nisi auctor, mattis diam non, malesuada ligula.
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
                                image="./img/amazon.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent className={styles.content}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Project Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit rutrum accumsan. Donec eget tortor ultricies neque placerat fringilla. Praesent at eleifend augue, quis facilisis nisi. In eget nisi auctor, mattis diam non, malesuada ligula.
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