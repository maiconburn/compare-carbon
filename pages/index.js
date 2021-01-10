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
import styles from '../styles/Home.module.css'

export default function Index() {
  return (
    <>
      <TopBar />
      <Container maxWidth="lg">
        <Box xs='12'>
            <Image
              className={styles.bgWrap}
              alt="Amazon"
              src="/img/amazon.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
        </Box>
        <Box xs='12' width="100%">
          <Grid 
            className={styles.bgText} 
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid xs='10'>
              <Typography className={styles.bgText, styles.bgTitle} variant="h2">
                Not all carbon credits are created equal
              </Typography>
            </Grid>
            <Grid xs='9'>
              <Typography className={styles.bgText, styles.bgSubTitle} variant="h5">
                Our easy-to-use tool helps you to find the credits you’re looking for, by sorting different sellers on a range of factors including: price, project location and impact 
              </Typography>
            </Grid>
            <Grid xs='12'>
              <Button className={styles.bgButton} color="primary" variant="contained" size="large">Get Started</Button>
            </Grid>
            <Grid xs='12'>
              <Paper className={styles.Map} elevation={3}>
                <Map />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}