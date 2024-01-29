import Navbar from "../../components/UserNavbar.js";
import Files from "../../components/Files.js";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import styles from "./FolderView.module.css";
import axios from 'axios';
import {useState} from "react";



const UserCMSC21 = () => {
    const [allImage, setAllImage] = useState([]);

    useEffect(() => {
        getfiles();
    }, []);


    //get files from the api
    const getfiles = async () => {
    const file = await axios.get("http://localhost:3001/get-files");
    setAllImage(file.data.data);
    }

    const showFiles = (file) => {
        window.open("http://localhost:3001/files/${file}");
    }

    return (
        <>
            <div><Navbar /></div>
            <div className={styles.partition}>
                <p className={styles.heading}> 
                    Root 
                    <Link to="/user/folderView" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <FaAngleRight fontSize={30} />
                    CMSC 
                    </Link>
                    <FaAngleRight fontSize={30} />
                    CMSC 21 Files
                </p>

                <div className={styles.container}>
                    
                    
                    {allImage.map((data) =>{
                    if(data.course == "CMSC21"){
                         //file destination
                        let api= "http://localhost:3001/files/";
                        let fileName= data.file_name;
                        let name = api.concat(fileName);

                        if(data.type === "pdf"){  //pdf file type
                            let result = name.concat(".pdf");
                            return(
                                <a href = {result} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <Files title={data.file_name} type={"pdf"} />
                                </a>
                            )
                        } else  { //document file type
                            let result = name.concat(".docs");
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

export default UserCMSC21;
