import Navbar from "../../components/UserNavbar.js";
import Folders from "../../components/Folders.js";
import Files from "../../components/Files.js";
import { Link, useParams } from "react-router-dom";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import styles from "./FolderView.module.css";

// folder view for CMSC courses
export const CmscFolderView = () => {
    let IDparam = useParams(); // get userID parameters from URL
    const userID = IDparam.userID; // obtain value of userID from json format
    return (
        <>
            <div><Navbar /></div>
            <div className={styles.partition}>
                {/* Current directory */}
                <h4 className={styles.heading}> 
                    Root 
                    <FaAngleRight fontSize={30} />
                    CMSC 
                </h4>

                {/* Folders */}
                <p className={styles.subHeading}>
                    Folders
                </p>
                <div className={styles.container}>
                    <Link to={`/user/${userID}/resources/CMSC21`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Folders title={"CMSC 21"}/>
                    </Link>
                    <Folders title={"CMSC 22"}/>
                    <Folders title={"CMSC 123"}/>
                    <Folders title={"CMSC 130"}/>
                    <Folders title={"CMSC 150"}/>
                </div>

                {/* Files */}
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

// folder view for MATH courses
export const MathFolderView = () => {
    return (
        <>
            <div><Navbar /></div>
            <div className={styles.partition}>
                {/* Current directory */}
                <h4 className={styles.heading}> 
                    Root 
                    <FaAngleRight fontSize={30} />
                    MATH 
                </h4>

                {/* Folders */}
                <p className={styles.subHeading}>
                    Folders
                </p>
                <div className={styles.container}>
                    <Folders title={"MATH 27"}/>
                    <Folders title={"MATH 28"}/>
                    <Folders title={"MATH 10"}/>
                </div>

                {/* Files */}
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

// folder view for STAT courses
export const StatFolderView = () => {
    return (
        <>
            <div><Navbar /></div>
            <div className={styles.partition}>
                {/* Current directory */}
                <h4 className={styles.heading}> 
                    Root 
                    <FaAngleRight fontSize={30} />
                    STAT
                </h4>

                {/* Folders */}
                <p className={styles.subHeading}>
                    Folders
                </p>
                <div className={styles.container}>
                    <Folders title={"STAT 101"}/>
                </div>

                {/* Files */}
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

// folder view for OTHER courses
export const OthersFolderView = () => {
    return (
        <>
            <div><Navbar /></div>
            <div className={styles.partition}>
                {/* Current directory */}
                <h4 className={styles.heading}> 
                    Root 
                    <FaAngleRight fontSize={30} />
                    OTHERS 
                </h4>

                {/* Folders */}
                <p className={styles.subHeading}>
                    Folders
                </p>
                <div className={styles.container}>
                    <Folders title={"ETHICS 1"}/>
                    <Folders title={"KAS 1"}/>
                    <Folders title={"HIST 1"}/>
                    <Folders title={"COMM 10"}/>
                    <Folders title={"PI 10"}/>
                    <Folders title={"ARTS 1"}/>
                </div>

                {/* Files */}
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