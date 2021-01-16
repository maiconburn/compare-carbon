import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import styles from '../styles/Home.module.scss'

export default function GetStarted() {
    return (
        <Container maxWidth="lg" className={styles.intro}>
            <Box xs='12'>
                <Grid 
                    className={styles.introText} 
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <Grid item xs='12'>
                        <Typography className={styles.questionsText} variant="h3">
                            Have you purchased carbon credits before?
                        </Typography>
                    </Grid>
                </Grid>
                <Grid 
                    container
                    direction="row"
                    alignItems="center"
                    justify="center"
                >
                    <Grid container xs='6'>
                        <Grid container justify="center" xs='6'>
                            <Button color="primary" className={styles.questionsButton} variant="contained" size="large">Yes</Button>
                        </Grid>
                        <Grid container justify="center" xs='6'>
                            <Button color="primary" className={styles.questionsButton} variant="contained" size="large">No</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
