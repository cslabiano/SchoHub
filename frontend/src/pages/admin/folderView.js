import Navbar from "../../components/UserNavbar.js";
import Folders from "../../components/Folders.js";
import Files from "../../components/Files.js";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import styles from "./FolderView.module.css";

const AdminFolderView = () => {
    return (
        <>
            <div><Navbar /></div>
            <div className={styles.partition}>
                <p className={styles.heading}> 
                    Root 
                    <FaAngleRight fontSize={30} />
                    CMSC 
                </p>

                <p className={styles.subHeading}>
                    Folders
                </p>
                <div className={styles.container}>
                    <Folders title={"CMSC 12"}/>
                    <Folders title={"CMSC 22"}/>
                    <Folders title={"CMSC 123"}/>
                    <Folders title={"CMSC 130"}/>
                    <Folders title={"CMSC 150"}/>
                </div>

                <p className={styles.subHeading}>
                    Files
                </p>
                <div className={styles.container}>
                    <Files title={"BSCS Curriculum"} type={"pdf"}/>
                    <Files title={"BSCS Curriculum"} type={"docs"}/>
                </div>
            </div>
        </>
    );
};

export default AdminFolderView;