import React from "react";
import NavBar from "../components/NavBar";
import Questions from "../components/Questions";
import styles from "../styles/Home.module.scss";

export default function Screening() {
  return (
    <div className={styles.homeMain}>
      <NavBar />
      <Questions currentQuestion={0} />
    </div>
  );
}
