import Navbar from "../../components/UserNavbar.js";
import Files from "../../components/Files.js";
import { Navigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import styles from "./FolderView.module.css";
import axios from 'axios';
import {useState} from "react";



const UserFiles = () => {
    //const [value, setValue] = useState();
    // let IDparam = useParams(); // get userID parameters from URL
    // const userID = IDparam.userID; // obtain value of userID from json format
    let {IDparam, search} = useParams();
    console.log(IDparam);
    const [allFiles, setAllFiles] = useState([]);
   

     //get files from the api   
     const getfiles = async () => {
        const file = await axios.get("http://localhost:3001/get-files");
        setAllFiles(file.data.data);
    } 


    useEffect(() => {
        getfiles();
    }, []);

    return (
        <>
            <div><Navbar /></div>
            <div className={styles.partition}>
            <p className={styles.heading}> 
                Files
            </p>

            <div className={styles.container}>
                    {/*Show files based on the value of search*/}
                   
                   {allFiles.filter((data)=>{
                        if(search === ""){
                            return data
                        } else if (data.file_name.toLowerCase().includes(search.toLowerCase())){
                            return data
                        } 
                   })
                     
                   .map((data) => {
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
                   })}
                </div>
            </div>
        </>
        
    );
};

export default UserFiles;
