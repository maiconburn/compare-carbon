import React from "react";
import NavBarInternal from "../components/NavBarInternal";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import TableProjetc from "../components/TableProjetc";

import styles from "../styles/Project.module.scss";

export default function Project() {
  return (
    <>
      <NavBarInternal />
      <Container maxWidth="lg" className={styles.project}>
        <Box xs>
          <Grid container spacing={3}>
            <Grid item xs={7}>
              <TableProjetc />
            </Grid>
            <Grid item xs={5}>
              <Card className={styles.imageBox}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="400"
                    image="/img/amazon.jpg"
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
