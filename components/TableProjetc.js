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

export default function TableProjetc(props) {
  return (
    <TableContainer component={Paper}>
      <Table className={styles.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell align="right">{props.project_name}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Project Description
            </TableCell>
            <TableCell align="right">{props.project_description}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Project Location
            </TableCell>
            <TableCell align="right">{props.project_locations}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Project Type
            </TableCell>
            <TableCell align="right">{props.project_type_detailed}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Vendor Name
            </TableCell>
            <TableCell align="right">{props.company_name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Certificate Authority
            </TableCell>
            <TableCell align="right">{props.cert_authority}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Price
            </TableCell>
            <TableCell align="right">{props.credit_cost}</TableCell>
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
                <li>{props.project_key_features}</li>
              </ul>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell align="right">
              <Button
                className={styles.buyNow}
                target="_blank"
                href={props.project_page_link}
              >
                Buy Now
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
