import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function GetStarted() {
  return (
    <Container maxWidth="lg" className={styles.intro}>
      <Box xs="12">
        <Grid
          className={styles.introText}
          container
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs="12">
            <Typography
              className={(styles.introText, styles.introTitle)}
              variant="h2"
            >
              Not all carbon credits are created equal
            </Typography>
          </Grid>
          <Grid item xs="9">
            <Typography
              className={(styles.introText, styles.introSubTitle)}
              variant="h5"
            >
              Our easy-to-use tool helps you to find the credits you’re looking
              for, by sorting different sellers on a range of factors including:
              price, project location and impact
            </Typography>
          </Grid>
          <Grid item xs="12">
            <Link href="/screening" passHref>
              <Button
                className={styles.introButton}
                color="primary"
                variant="contained"
                size="large"
              >
                Get Started
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
