import React from "react";
import NavBar from "../components/NavBar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/AboutUs.module.scss";

export default function Index() {
  return (
    <>
      <NavBar />
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
              <Typography className={styles.questionsText} variant="h3">
                Contact
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
