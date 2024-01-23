import Navbar from "../../components/UserNavbar.js";
import React from "react";
import styles from "./Profile.module.css";
import { FaUserCircle } from "react-icons/fa";

const AdminProfile = () => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.title}>
          <h4 className={styles.h4}>Profile</h4>
        </div>
        <div className={styles.profileSection}>
          <FaUserCircle fontSize={150} color="#274c77" />
          <p className={styles.classification}>Classification: Admin</p>
          <h4 className={styles.h4}>Name: Lorem Ipsum Dolor</h4>
          <p className={styles.boldText}>Org Batch | Department</p>
          <p className={styles.bio}>Bio: Lorem Ipsum Dolor SIt Amet</p>
          <button className={styles.editButton} id={styles.btn}>Edit Profile</button>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
