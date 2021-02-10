import React from "react";
import NavBar from "../components/NavBar";
import GetStarted from "../components/GetStarted";
import styles from "../styles/Home.module.scss";

export default function Index() {
  return (
    <div className={styles.homeMain}>
      <NavBar />
      <GetStarted />
    </div>
  );
}
