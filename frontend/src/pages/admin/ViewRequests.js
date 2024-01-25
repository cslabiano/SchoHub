import Navbar from "../../components/AdminNavbar.js";
import React from "react";
import styles from "./ViewRequests.module.css";

const View = () => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.title}>
          <h4 className={styles.h4}>File Requests</h4>
        </div>
      </div>
    </>
  );
};

export default View;
