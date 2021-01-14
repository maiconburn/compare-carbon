import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import TopBar from './TopBar'
import Image from 'next/image'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Map from '../components/Map'
import styles from '../styles/Home.module.scss'

export default function Index() {
  return (
    <>
      <TopBar />
      <Container maxWidth="lg" className={styles.banner}>
        <Box xs='12'>
            <Image
              className={styles.bannerWrap}
              alt="Amazon"
              src="/img/amazon.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
        </Box>
        <Box xs='12'>
          <Grid 
            className={styles.bannerText} 
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xs='12'>
              <Typography className={styles.bannerText, styles.bannerTitle} variant="h2">
                Not all carbon credits are created equal
              </Typography>
            </Grid>
            <Grid item xs='9'>
              <Typography className={styles.bannerText, styles.bannerSubTitle} variant="h5">
                Our easy-to-use tool helps you to find the credits you’re looking for, by sorting different sellers on a range of factors including: price, project location and impact 
              </Typography>
            </Grid>
            <Grid item xs='12'>
              <Button className={styles.bannerButton} color="primary" variant="contained" size="large">Get Started</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="lg" className={styles.questions}>
        <Box xs='12'>
          <Grid 
            className={styles.bannerText} 
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xs='12'>
              <Typography className={styles.questionsText} variant="h3">
                Who are you purchasing for?
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
                <Button color="primary" className={styles.questionsButton} variant="contained" size="large">I’m purchasing for a business</Button>
              </Grid>
              <Grid container justify="center" xs='6'>
                <Button color="primary" className={styles.questionsButton} variant="contained" size="large">I’m purchasing as an individual</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="lg" className={styles.questions}>
        <Box xs='12'>
          <Grid 
            className={styles.bannerText} 
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
      <Container maxWidth="lg" className={styles.questions}>
        <Box xs='12'>
          <Grid 
            className={styles.bannerText} 
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xs='12'>
              <Typography className={styles.questionsText} variant="h3">
                Which factor is more important to you?
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
                <Button color="primary" className={styles.questionsButton} variant="contained" size="large">Budget ($6–$18 per credit)</Button>
              </Grid>
              <Grid container justify="center" xs='6'>
                <Button color="primary" className={styles.questionsButton} variant="contained" size="large">Environmental Impact ($18–$50 per credit)</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="lg" className={styles.questions}>
        <Box xs='12'>
          <Grid 
            className={styles.bannerText} 
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xs='12'>
              <Typography className={styles.questionsText} variant="h3">
                Would you like to support local or global projects?
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
              <Grid container justify="center" xs='4'>
                <Button color="primary" className={styles.questionsButton} variant="contained" size="large">Local Projects</Button>
              </Grid>
              <Grid container justify="center" xs='4'>
                <Button color="primary" className={styles.questionsButton} variant="contained" size="large">Global Projects</Button>
              </Grid>
              <Grid container justify="center" xs='4'>
                <Button color="primary" className={styles.questionsButton} variant="contained" size="large">Both</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="lg" className={styles.questions}>
        <Box xs='12'>
          <Grid 
            className={styles.bannerText} 
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xs='12'>
              <Typography className={styles.questionsText} variant="h3">
                Would you like to support local or global projects?
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
              <Grid container justify="center" xs='4'>
                <Button color="primary" className={styles.questionsButton} variant="contained" size="large">Reforestation</Button>
              </Grid>
              <Grid container justify="center" xs='4'>
                <Button color="primary" className={styles.questionsButton} variant="contained" size="large">Renewable Energy</Button>
              </Grid>
              <Grid container justify="center" xs='4'>
                <Button color="primary" className={styles.questionsButton} variant="contained" size="large">Social Projects</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}