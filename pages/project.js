import React from "react";
import NavBarInternal from "../components/NavBarInternal";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import TableProjetc from "../components/TableProjetc";
import { useRouter } from "next/router";
import styles from "../styles/Project.module.scss";

export default function Project() {
  const router = useRouter();

  console.log(router.query.cert_authority);

  return (
    <>
      <NavBarInternal />
      <Container maxWidth="lg" className={styles.project}>
        <Box xs>
          <Grid container spacing={3}>
            <Grid item xs={7}>
              <TableProjetc
                project_name={router.query.project_name}
                project_description={router.query.project_description}
                project_locations={router.query.project_locations}
                project_type_detailed={router.query.project_type_detailed}
                company_name={router.query.company_name}
                cert_authority={router.query.cert_authority}
                credit_cost={router.query.credit_cost}
                project_key_features={router.query.project_key_features}
                project_page_link={router.query.project_page_link}
              />
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

/*
<TableProjetc
                project_name={project.project_name}
                project_description={project.project_description}
                project_locations={project.project_locations}
                project_type={project.project_type}
                company_name={project.company_name}
                cert_authority={project.cert_authority}
                credit_cost={project.credit_cost}
                project_key_features={project.project_key_features}
              />

*/
