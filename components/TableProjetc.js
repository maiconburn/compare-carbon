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
import styles from "../styles/components/TableProject.module.scss";

export default function TableProjetc() {
  return (
    <TableContainer component={Paper}>
      <Table className={styles.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project’s Name</TableCell>
            <TableCell align="right">Regenerative agroforestry</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Project’s Description
            </TableCell>
            <TableCell align="right">
              The organization behind this project, The Future Forest Company,
              was formed to sequester as much carbon as possible in forest land.
              They buy degraded, unloved land and re-forest and restore it back
              to health using agroforestry methods including rotational grazing
              of livestock and recycling forest waste into biochar.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Project’s Location
            </TableCell>
            <TableCell align="right">Scotland</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Project’s Type
            </TableCell>
            <TableCell align="right">Agroforestry</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Vendor’s Name
            </TableCell>
            <TableCell align="right">Wren</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Certificate Authority
            </TableCell>
            <TableCell align="right">Self-assessed</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Price
            </TableCell>
            <TableCell align="right">31.25$</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Your monthly offset cost
            </TableCell>
            <TableCell align="right">
              <Link href="/">
                <a className={styles.calculate}>CALCULATE</a>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Key Features
            </TableCell>
            <TableCell align="right">
              <ul>
                <li>Provides Opportunities for Sustainable local farming</li>
                <li>Hosts a huge array of wildlife </li>
                <li>Aims to plant one million trees in 2021</li>
              </ul>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell align="right">
              <Button className={styles.buyNow}>Buy Now</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
