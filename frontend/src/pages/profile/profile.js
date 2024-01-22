import Navbar from "../../components/UserNavbar.js";
import React from "react";
import styles from "./Profile.module.css";

const UserProfile = () => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.title}>
          <h4 className={styles.h4}>Profile</h4>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
