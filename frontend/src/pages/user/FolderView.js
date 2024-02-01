import Navbar from "../../components/UserNavbar.js";
import Folders from "../../components/Folders.js";
import Files from "../../components/Files.js";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import localData from "./Data.json";
import styles from "./FolderView.module.css";

// folder view for CMSC courses
const UserFolderView = () => {
    let IDparam = useParams(); // get userID parameters from URL
    const userID = IDparam.userID; // obtain value of userID from json format

    const [data, setData] = useState(localData); // File and Folders Data
    
    const readData = (data) => {
        const name = data.name;
        const folders = data.folders;
        const files = data.files;
        return({name, folders, files});
    };

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
    const [prevData, setPrevData] = useState();

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

    // // Handle forward and back button in browser
    // useEffect(() => {
    //     // Check if the back button was pressed
    //     const handleBackButton = (event) => {
    //       if (event && event.type === 'popstate') {
    //         const prev = directories.data.pop();
    //         console.log(prev);
    //         setPrevData(getData(prev));

    //         setCurrentData(getData(directories.data[directories.data.length-1]));
    //         console.log(prevData);
    //         console.log(currentData);
    //         console.log(directories);
    //       }
    //     };
    
    //     // Check if the forward button was pressed
    //     const handleForwardButton = (event) => {
    //       if (event && event.type === 'pushstate') {
    //         setCurrentData(getData(prevData));
    //         directories.data.push(getData(prevData));
    //         console.log(prevData);
    //         console.log(currentData);
    //         console.log(directories);
    //       }
    //     };
    
    //     // Add event listeners for the 'popstate' and 'pushstate' events
    //     window.addEventListener('popstate', handleBackButton);
    //     window.addEventListener('pushstate', handleForwardButton);
    
    //     // Clean up function to remove the event listeners when the component unmounts
    //     return () => {
    //       window.removeEventListener('popstate', handleBackButton);
    //       window.removeEventListener('pushstate', handleForwardButton);
    //     };
    //   }, []);



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

                                <Link to={`/user/${userID}/folderView/` + directory.name} style={{ color: 'inherit', textDecoration: 'inherit' }}>
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
                                <Link to={`/user/${userID}/folderView/` + folder.name} style={{ color: 'inherit', textDecoration: 'inherit' }}>
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
                        return (
                            <>
                                <Link to={`/user/${userID}/folderView/` + file.name} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                    <Files title={file.name}/>
                                </Link>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default UserFolderView;