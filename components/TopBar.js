import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import styles from "../styles/Home.module.scss";

export default function TopBar() {
  return (
    <div className={styles.rootHeader}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={styles.titleHeader}>
            <Link href="/">
              <a>COMPARE CARBON</a>
            </Link>
          </Typography>
          <Link href="/what-is-offsetting" passHref>
            <Button color="inherit">What is offsetting?</Button>
          </Link>
          <Link href="/about-us" passHref>
            <Button color="inherit">About Us</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button color="inherit">Contact</Button>
          </Link>
          <Link href="/screening" passHref>
            <Button
              color="primary"
              variant="contained"
              className={styles.getStarted}
            >
              Get Started
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
