import Navbar from "../../components/UserNavbar.js";
import Folders from "../../components/Folders.js";
import Files from "../../components/Files.js";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaAngleRight } from "react-icons/fa";
import localData from "./Data.json";
import styles from "./FolderView.module.css";

// folder view for CMSC courses
const UserFolderView = () => {
    let IDparam = useParams(); // get userID parameters from URL
    const userID = IDparam.userID; // obtain value of userID from json format

    const [data, setData] = useState(localData); // File and Folders Data
    
    // Read data object
    const readData = (data) => {
        const name = data.name;
        const folders = data.folders;
        const files = data.files;
        return({name, folders, files});
    };

    // Get Local Data
    const getData = () => {
        switch(IDparam.id){
            case "CMSC":
                return(readData(data.root[0]));
            case "MATH":
                return(readData(data.root[1]));
            case "STAT":
                return(readData(data.root[2]));
            case "OTHERS":
                return(readData(data.root[3]));
        }
    }

    // Current Data
    const [currentData, setCurrentData] = useState(
        getData()
    );
        
    // Prev Data
    // const [prevData, setPrevData] = useState();

    // Current Directories
    const [directories, setDirectories] = useState(
        {
            data : [currentData]
        }
    );

    // Change value of currentData to chosen folder data
    const goToFolder = (index) => {
        setCurrentData(readData(currentData.folders[index]));
        directories.data.push(readData(currentData.folders[index])); // add new folder data to directories
    };

    // Change value of currentData to chosen directory
    const updateDirectory = (index) => {
        setCurrentData(directories.data[index]);
        if (index+1 != directories.data.length) directories.data.splice(index+1, directories.data.length-index);
    };

    // Get directory of navigation
    const getDirectoryLink = (index) => {
        let currentDirectory = "";
        let i;
        for(i = 0; i < index; i++)
            currentDirectory += directories.data[i].name.replace(" ", "_") + "-";
        currentDirectory += directories.data[i].name.replace(" ", "_");
        return(currentDirectory);
    };

    // Get current directory of folder/file
    const getDataLink = (targetDirectory) => {
        let currentDirectory = "";
        directories.data.forEach((directory) => {
            currentDirectory += (directory.name.replace(" ", "_") + "-");
        })
        currentDirectory += targetDirectory.replace(" ", "_");
        return(currentDirectory);
    };

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
                {/* Current directory */}
                <div className={styles.directory}> 
                    <Link to={`/user/${userID}/dashboard`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <h4 id="dashboard">Root</h4>
                    </Link>

                    {directories.data?.map((directory, index) => {
                        return(
                            <>
                                <FaAngleRight fontSize={30} />

                                <Link to={`/user/${userID}/folderView/` + getDirectoryLink(index)} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                    <h4 onClick={() => updateDirectory(index)}>{directory.name} </h4>
                                </Link>
                            </>
                        )
                    })}
                </div>

                {/* Folders */}
                <p className={styles.subHeading}>
                    Folders
                </p>
                <div className={styles.container}>
                    {currentData.folders.map((folder, index) => {
                        return (
                            <>
                                <Link to={`/user/${userID}/folderView/` + getDataLink(folder.name)} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                    <Folders onClick={() => goToFolder(index)} title={folder.name}/>
                                </Link>
                            </>
                        )
                    })}
                </div>

                {/* Files */}
                <p className={styles.subHeading}>
                    Files
                </p>
                <div className={styles.container}>
                    {currentData.files.map((file, index) => {
                        let api= "http://localhost:3001/files/";
                        let fileName= file.name;
                        let name = api.concat(fileName);
   
                        if(file.type === "pdf"){  //pdf file type
                            let result = name.concat(".pdf");
                            return(
                                <a href = {result} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <Files title={fileName} type={"docs"} />
                                </a>
                            )
                        } else  { //document file type
                            let result = name.concat(".docs");
                            return(
                                <a href = {result} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <Files title={fileName} type={"docs"} />
                                </a>
                            )
                        }
                    })}
                </div>
            </div>
        </>
    );
};

export default UserFolderView;