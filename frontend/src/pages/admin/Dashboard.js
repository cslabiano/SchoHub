import Navbar from "../../components/AdminNavbar.js";
import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import styles from "./Dashboard.module.css";

const AdminDashboard = () => {
    return (
        <>
            <div><Navbar /></div>
            <button id={styles.addFile}>
                <FaPlus /> <p>Add File</p>
            </button>
            <div className={styles.partition}>
                <p className={styles.heading}>
                    Dashboard
                </p>
                <div className={styles.container}>
                    <div className={styles.course}>
                        <div className={styles.courseImg} id={styles.cmsc}> </div>

                        <div className={styles.courseDetails}>
                            <div className={styles.courseInfo}>
                                <p className={styles.courseTitle}>
                                    CMSC
                                </p>
                                <p className={styles.courseDate}>
                                    last Updated: Sept 2022
                                </p>
                            </div>
                            <button className={styles.courseMore}>
                                <FaEllipsisV />
                            </button>
                        </div>
                    </div>

                    <div className={styles.course}>
                        <div className={styles.courseImg} id={styles.math}> </div>

                        <div className={styles.courseDetails}>
                            <div className={styles.courseInfo}>
                                <p className={styles.courseTitle}>
                                    MATH
                                </p>
                                <p className={styles.courseDate}>
                                    last Updated: Sept 2022
                                </p>
                            </div>
                            <button className={styles.courseMore}>
                                <FaEllipsisV />
                            </button>
                        </div>
                    </div>

                    <div className={styles.course}>
                        <div className={styles.courseImg} id={styles.stat}> </div>

                        <div className={styles.courseDetails}>
                            <div className={styles.courseInfo}>
                                <p className={styles.courseTitle}>
                                    STAT
                                </p>
                                <p className={styles.courseDate}>
                                    last Updated: Sept 2022
                                </p>
                            </div>
                            <button className={styles.courseMore}>
                                <FaEllipsisV />
                            </button>
                        </div>
                    </div>

                    <div className={styles.course}>
                        <div className={styles.courseImg} id={styles.others}> </div>

                        <div className={styles.courseDetails}>
                            <div className={styles.courseInfo}>
                                <p className={styles.courseTitle}>
                                    OTHERS
                                </p>
                                <p className={styles.courseDate}>
                                    last Updated: Sept 2022
                                </p>
                            </div>
                            <button className={styles.courseMore}>
                                <FaEllipsisV />
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className={styles.partition}>
                <p className={styles.heading}>
                    Bookmarks
                </p>

                <p className={styles.subHeading}>
                    Folders
                </p>
                <div className={styles.container}>

                </div>

                <p className={styles.subHeading}>
                    Files
                </p>
                <div className={styles.container}>

                </div>
            </div>
            
        </>
    );
};

export default AdminDashboard;
