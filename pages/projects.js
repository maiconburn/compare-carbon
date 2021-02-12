import React from "react";
import NavBarInternal from "../components/NavBarInternal";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Project from "../components/Project";
import Filters from "../components/Filters";
import Pagination from "@material-ui/lab/Pagination";
import styles from "../styles/Projects.module.scss";
import fetch from "isomorphic-unfetch";
import NavBarInternal from "../components/NavBarInternal";

function Projects({ projects }) {
  return (
    <>
      <NavBarInternal />
      <Container maxWidth="lg" className={styles.projects}>
        <Box xs>
          <Grid container className={styles.projectsList}>
            <Grid item xs={4} height="100%">
              <Filters />
            </Grid>
            <Grid item xs={8}>
              {projects.map((project, index) => (
                <Project
                  projectName={project.name}
                  projectCompany={project.company}
                  projectType={project.project_type}
                  projectLink={project.project_page_link}
                  projectPrice={project.credit_cost}
                  projectLocation={project.project_locations}
                  projectKey={index}
                />
              ))}
              <Grid container>
                <Pagination count={10} variant="outlined" shape="rounded" />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.carboncertify.com/projects`);
  const projects = await res.json();

  // Pass data to the page via props
  return { props: { projects } };
}

export default Projects;
