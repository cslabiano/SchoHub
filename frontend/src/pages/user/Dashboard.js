import Navbar from "../../components/UserNavbar.js";
import Files from "../../components/Files.js";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import styles from "./Dashboard.module.css";
import AddFileModal from "./AddFile.js";

const UserDashboard = () => {
    let IDparam = useParams(); // get userID parameters from URL
    const userID = IDparam.userID; // obtain value of userID from json format
    
    const [files, setFiles] = useState([
        {
            name: "01_introduction_to_C_01",
            type: "pdf"
        },
        {
            name: "02_introduction_to_C_02",
            type: "pdf"
        },
    ]);

    return (
        <>
            <div><Navbar /></div>
                
                <AddFileModal /> 

            <div className={styles.partition}>
                <h4 className={styles.heading}>
                    Dashboard
                </h4>
                
                <div className={styles.container}>
                {/* CMSC Course */}
<<<<<<< HEAD
                <Link to={`/user/${userID}/cmscfolderView`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
=======
                
>>>>>>> 054b8c946586378acecbbb1cc7103b2476513cce
                    <div className={styles.course}>
                    <Link to="/user/cmscfolderView" style={{ color: 'inherit', textDecoration: 'inherit' }}>
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
                            
                            
                            
                        </div>
                        </Link>
                        {/* More Button */}
                        <button className={styles.courseMore}>
                            <FaEllipsisV />
                        </button>
                    </div>
                    
                    {/* MATH Course */}
<<<<<<< HEAD
                <Link to={`/user/${userID}/mathfolderView`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
=======
                
>>>>>>> 054b8c946586378acecbbb1cc7103b2476513cce
                    <div className={styles.course}>
                    <Link to="/user/mathfolderView" style={{ color: 'inherit', textDecoration: 'inherit' }}>
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

                            
                        </div>
                    </Link>
                        {/* More Button */}
                        <button className={styles.courseMore}>
                            <FaEllipsisV />
                        </button>
                    </div>
                
                    {/* STAT Course */}
<<<<<<< HEAD
                <Link to={`/user/${userID}/statfolderView`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
=======
                
>>>>>>> 054b8c946586378acecbbb1cc7103b2476513cce
                    <div className={styles.course}>
                    <Link to="/user/statfolderView" style={{ color: 'inherit', textDecoration: 'inherit' }}>
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

                            
                        </div>
                    </Link>
                        {/* More Button */}
                        <button className={styles.courseMore}>
                            <FaEllipsisV />
                        </button>
                    </div>
                
                    {/* OTHERS Course */}
<<<<<<< HEAD
                <Link to={`/user/${userID}/othersfolderView`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
=======
                
>>>>>>> 054b8c946586378acecbbb1cc7103b2476513cce
                    <div className={styles.course}>
                    <Link to="/user/othersfolderView" style={{ color: 'inherit', textDecoration: 'inherit' }}>
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

                            
                        </div>
                        </Link>
                        {/* More Button */}
                        <button className={styles.courseMore}>
                            <FaEllipsisV />
                        </button>
                    </div>
                
                </div>
            </div>

            <div className={styles.partition}>
                <h4 className={styles.heading}>
                    Bookmarks
                </h4>

                <div className={styles.container}>
                    {files.map((file) => {
                        return (
                            <>
                                <a href = {"http://localhost:3001/files/" + file.name + "." + file.type} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                    <Files title={file.name} type={file.type}/>
                                </a>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default UserDashboard;
