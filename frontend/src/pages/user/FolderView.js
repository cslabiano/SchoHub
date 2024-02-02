import Navbar from "../../components/UserNavbar.js";
import Folders from "../../components/Folders.js";
import Files from "../../components/Files.js";
import { Link, useParams } from "react-router-dom";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import styles from "./FolderView.module.css";
import axios from 'axios';
import {useState} from "react";
import { useEffect } from "react";

// folder view for CMSC courses
export const CmscFolderView = () => {
    let IDparam = useParams(); // get userID parameters from URL
    const userID = IDparam.userID; // obtain value of userID from json format
    
    const courses = ['CMSC21','CMSC22','CMSC123','CMSC130','CMSC150']

    const [allFiles, setAllFiles] = useState([]);
    
    useEffect(() => {
        getfiles();
    }, []);


    //get files from the api
    const getfiles = async () => {
    const file = await axios.get("http://localhost:3001/get-files");
    setAllFiles(file.data.data);
    }

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
                    <Link to={`/user/${userID}/resources/CMSC/CMSC21`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Folders title={"CMSC 21"}/>
                    </Link>
                    <Link to={`/user/${userID}/resources/CMSC/CMSC22`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Folders title={"CMSC 22"}/>
                    </Link>
                    <Link to={`/user/${userID}/resources/CMSC/CMSC123`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Folders title={"CMSC 123"}/>
                    </Link>
                    <Link to={`/user/${userID}/resources/CMSC/CMSC130`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Folders title={"CMSC 130"}/>
                    </Link>
                    <Link to={`/user/${userID}/resources/CMSC/CMSC150`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Folders title={"CMSC 150"}/>
                    </Link>
                </div>

                {/* Files */}
                <p className={styles.subHeading}>
                    Files
                </p>
                <div className={styles.container}>
                {allFiles.map((data) =>{
                    if(!courses.includes(data.course,0) && data.course.includes("CMSC")){
                        //file destination
                        let api= "http://localhost:3001/files/";
                        let result = api.concat(data.link);

                        if(data.type === "pdf"){  //pdf file type
                           
                            return(
                                <a href = {result} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <Files title={data.file_name} type={"pdf"} />
                                </a>
                            )
                        } else  { //document file type
                            return(
                                <a href = {result} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <Files title={data.file_name} type={"docs"} />
                                </a>
                            )
                        }
                    } 
                })};
                    <a href = {"http://localhost:3001/files/"+ "Guidelines" + ".pdf"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Files title={"BSCS Curriculum"} type={"pdf"}/>
                    </a>
                    <a href = {"http://localhost:3001/files/"+ "Guidelines" + ".docx"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Files title={"BSCS Curriculum"} type={"docs"}/>
                    </a>
                </div>
            </div>
        </>
    );
};

// folder view for MATH courses
export const MathFolderView = () => {
    let IDparam = useParams(); // get userID parameters from URL
    const userID = IDparam.userID; // obtain value of userID from json format

    const courses = ['MATH27','MATH28','MATH10']

    const [allFiles, setAllFiles] = useState([]);
    
  
    useEffect(() => {
        getfiles();
    }, []);


    //get files from the api
    const getfiles = async () => {
    const file = await axios.get("http://localhost:3001/get-files");
    setAllFiles(file.data.data);
    }

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
                    <Link to={`/user/${userID}/resources/MATH/MATH27`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Folders title={"MATH 27"}/>
                
                    </Link>
                    <Link to={`/user/${userID}/resources/MATH/MATH28`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Folders title={"MATH 28"}/>
                    </Link>
                    <Link to={`/user/${userID}/resources/MATH/MATH10`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Folders title={"MATH 10"}/>
                    </Link>
                </div>

                {/* Files */}
                <p className={styles.subHeading}>
                    Files
                </p>
                <div className={styles.container}>
                {allFiles.map((data) =>{
                    if(!courses.includes(data.course,0) && data.course.includes("MATH")){
                        //file destination
                        let api= "http://localhost:3001/files/";
                        let result = api.concat(data.link);

                        if(data.type === "pdf"){  //pdf file type
                    
                            return(
                                <a href = {result} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <Files title={data.file_name} type={"pdf"} />
                                </a>
                            )
                        } else  { //document file type
                            
                            return(
                                <a href = {result} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <Files title={data.file_name} type={"docs"} />
                                </a>
                            )
                        }
                    } 
                })}
                    <a href = {"http://localhost:3001/files/"+ "Guidelines" + ".pdf"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Files title={"BSCS Curriculum"} type={"pdf"}/>
                    </a>
                    <a href = {"http://localhost:3001/files/"+ "Guidelines" + ".docx"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Files title={"BSCS Curriculum"} type={"docs"}/>
                    </a>
                </div>
            </div>
        </>
    );
};

// folder view for STAT courses
export const StatFolderView = () => {
    let IDparam = useParams(); // get userID parameters from URL
    const userID = IDparam.userID; // obtain value of userID from json format
    const courses = ["STAT101"]
    const [allFiles, setAllFiles] = useState([]);
    
  
    useEffect(() => {
        getfiles();
    }, []);


    //get files from the api
    const getfiles = async () => {
    const file = await axios.get("http://localhost:3001/get-files");
    setAllFiles(file.data.data);
    }
    
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
                    <Link to={`/user/${userID}/resources/STAT/STAT101`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Folders title={"STAT 101"}/>
                    </Link>
                </div>

                {/* Files */}
                <p className={styles.subHeading}>
                    Files
                </p>
                <div className={styles.container}>
                {allFiles.map((data) =>{
                    if(!courses.includes("STAT101") && data.course.includes("STAT")){
                        //file destination
                        let api= "http://localhost:3001/files/";
                        let result = api.concat(data.link);

                        if(data.type === "pdf"){  //pdf file type
                          
                            return(
                                <a href = {result} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <Files title={data.file_name} type={"pdf"} />
                                </a>
                            )
                        } else  { //document file type
                          
                            return(
                                <a href = {result} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <Files title={data.file_name} type={"docs"} />
                                </a>
                            )
                        }
                    } 
                })}
                    <a href = {"http://localhost:3001/files/"+ "Guidelines" + ".pdf"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Files title={"BSCS Curriculum"} type={"pdf"}/>
                    </a>
                    <a href = {"http://localhost:3001/files/"+ "Guidelines" + ".docx"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Files title={"BSCS Curriculum"} type={"docs"}/>
                    </a>
                </div>
            </div>
        </>
    );
};

// folder view for OTHER courses
export const OthersFolderView = () => {
    let IDparam = useParams(); // get userID parameters from URL
    const userID = IDparam.userID; // obtain value of userID from json format
    const courses = ["ETHICS1","KAS1","HIST1","COMM10","PI10","ARTS1"]
    const [allFiles, setAllFiles] = useState([]);
    
  
    useEffect(() => {
        getfiles();
    }, []);


    //get files from the api
    const getfiles = async () => {
    const file = await axios.get("http://localhost:3001/get-files");
    setAllFiles(file.data.data);
    }

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
                    <Link to={`/user/${userID}/resources/OTHERS/ETHICS1`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Folders title={"ETHICS 1"}/>
                    </Link>
                    <Link to={`/user/${userID}/resources/OTHERS/KAS1`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Folders title={"KAS 1"}/>
                    </Link>
                    <Link to={`/user/${userID}/resources/OTHERS/HIST1`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Folders title={"HIST 1"}/>
                    </Link>
                    <Link to={`/user/${userID}/resources/OTHERS/COMM10`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Folders title={"COMM 10"}/>
                    </Link>
                    <Link to={`/user/${userID}/resources/OTHERS/PI10`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Folders title={"PI 10"}/>
                    </Link>
                    <Link to={`/user/${userID}/resources/OTHERS/ARTS1`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Folders title={"ARTS 1"}/>
                    </Link>
                </div>

                {/* Files */}
                <p className={styles.subHeading}>
                    Files
                </p>
                <div className={styles.container}>
                {allFiles.map((data) =>{
                    if(!courses.includes(data.course) && !data.course.includes("STAT") && !data.course.includes("CMSC") && !data.course.includes("STAT")){
                        //file destination
                        let api= "http://localhost:3001/files/";
                        let result = api.concat(data.link);

                        if(data.type === "pdf"){  //pdf file type
                          
                            return(
                                <a href = {result} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <Files title={data.file_name} type={"pdf"} />
                                </a>
                            )
                        } else  { //document file type
                            
                            return(
                                <a href = {result} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <Files title={data.file_name} type={"docs"} />
                                </a>
                            )
                        }
                    } 
                })}
                    <a href = {"http://localhost:3001/files/"+ "Guidelines" + ".pdf"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Files title={"BSCS Curriculum"} type={"pdf"}/>
                    </a>
                    <a href = {"http://localhost:3001/files/"+ "Guidelines" + ".docx"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Files title={"BSCS Curriculum"} type={"docs"}/>
                    </a>
                </div>
            </div>
        </>
    );
};

