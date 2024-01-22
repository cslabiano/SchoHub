import Navbar from "../../components/userNavbar.js";
import React from "react";
import styles from "./profile.module.css";

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
