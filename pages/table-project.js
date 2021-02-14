import React from "react";
import NavBarInternal from "../components/NavBarInternal";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Table from "../components/Table";
import styles from "../styles/Projects.module.scss";

function TableProject() {
  return (
    <>
      <NavBarInternal />
      <Container maxWidth="lg" className={styles.projects}>
        <Box xs>
          <Table />
        </Box>
      </Container>
    </>
  );
}

export default TableProject;
