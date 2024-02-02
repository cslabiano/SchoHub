import Navbar from "../../components/AdminNavbar.js";
import Folders from "../../components/Folders.js";
import Files from "../../components/Files.js";
import { Link, useParams } from "react-router-dom";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import styles from "./FolderView.module.css";
import axios from 'axios';
import {useState} from "react";
import { useEffect } from "react";

const AdminResources = () => {
    const [allFiles, setAllFiles] = useState([]);
    
    let {userID, course, id} = useParams(); // get userID parameters from URL

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
                <p className={styles.heading}> 
                    Root 
                    <Link to={`/admin/${userID}/${course}folderView`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <FaAngleRight fontSize={30} />
                    {course}
                    </Link>
                    <FaAngleRight fontSize={30} />
                    {id} Files
                </p>

                <div className={styles.container}>
                    
                    
                    {allFiles.map((data) =>{
                    if(data.course === id){
                         //file destination
                        let api= "http://localhost:3001/files/";
                     
                        if(data.type === "pdf"){  //pdf file type
                            let result = api.concat(data.link);
                            return(
                                <a href = {result} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <Files title={data.file_name} type={"pdf"} />
                                </a>
                            )
                        } else  { //document file type
                            let result = api.concat(data.link);
                            return(
                                <a href = {result} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <Files title={data.file_name} type={"docs"} />
                                </a>
                            )
                        }
                    }
                   

                    })}
                </div>
            </div>
        </>
    );
};

export default AdminResources;