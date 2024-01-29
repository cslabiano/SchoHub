import Navbar from "../../components/UserNavbar.js";
import Folders from "../../components/Folders.js";
import Files from "../../components/Files.js";
import { Link } from "react-router-dom";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import styles from "./FolderView.module.css";


/* //folder is clicked
const handleClick = () => {
    console.log('You clicked me');
} */

const UserFolderView = () => {
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
                    <Link to="/user/CMSC21" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Folders title={"CMSC 21"}/>
                    </Link>
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

export default UserFolderView;
