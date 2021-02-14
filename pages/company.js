import React from "react";
import NavBarInternal from "../components/NavBarInternal";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import InfoCompany from "../components/InfoCompany";
import styles from "../styles/Company.module.scss";

export default function Company() {
  return (
    <>
      <NavBarInternal />
      <Container maxWidth="lg" className={styles.company}>
        <Box xs>
          <Grid container spacing={3}>
            <img src="/img/logo-blue.png" className={styles.companyLogo} />
          </Grid>
          <Grid container spacing={3}>
            <InfoCompany />
          </Grid>
        </Box>
      </Container>
    </>
  );
}
