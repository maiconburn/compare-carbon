import React from "react";
import Link from "next/link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ProjectCompany from "./ProjectCompany";
import Grid from "@material-ui/core/Grid";
import EventIcon from "@material-ui/icons/Event";
import PlaceIcon from "@material-ui/icons/Place";
import PageviewIcon from "@material-ui/icons/Pageview";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import styles from "../styles/components/InfoCompany.module.scss";

export default function InfoCompany(props) {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={styles.companyInfo}
      >
        <Grid item xs={1} className={styles.gridIcon}>
          <EventIcon />
        </Grid>
        <Grid item xs={11}>
          <span>2018</span>
        </Grid>
        <Grid item xs={1} className={styles.gridIcon}>
          <PlaceIcon />
        </Grid>
        <Grid item xs={11}>
          <span>San Francisco</span>
        </Grid>
        <Grid item xs={1} className={styles.gridIcon}>
          <PageviewIcon />
        </Grid>
        <Grid item xs={11}>
          <p>
            Pachama is aiming to transform reforestation using innovative
            remote-sensing technologies and artificial intelligence. They have
            curated a list of third-party verified forest carbon projects across
            the world and are using LiDAR data and satellite imaging in
            combination with machine learning to provide more accurate and
            up-to-date monitoring of projects than conventional certification
            schemes. They believe that this improved monitoring, as well as
            improved traceability and transparency, will give buyers more
            confidence that the credits they buy are helping to permanently fix
            carbon dioxide and restore forests.
          </p>
        </Grid>
        <Grid item xs={1} className={styles.gridIcon}>
          <VpnKeyIcon />
        </Grid>
        <Grid item xs={11}>
          <ul>
            <li>Additional monitoring based on remote sensing and AI</li>
            <li>Bundled projects for diverse portfolios</li>
            <li>Point-of-sale carbon offsetting API</li>
          </ul>
        </Grid>
      </Grid>
      <Grid container className={styles.companyInfoTable}>
        <ProjectCompany />
      </Grid>
    </>
  );
}
