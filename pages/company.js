import React from "react";
import NavBarInternal from "../components/NavBarInternal";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import styles from "../styles/Company.module.scss";

export default function Company() {
  return (
    <>
      <NavBarInternal />
      <Container maxWidth="lg" className={styles.company}>
        <Box xs></Box>
      </Container>
    </>
  );
}
