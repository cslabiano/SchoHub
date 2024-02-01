import Navbar from "../../components/AdminNavbar.js";
import React, { useEffect, useState } from "react";
import styles from "./ManageFiles.module.css";
//import { useParams } from "react-router-dom";
import axios from 'axios';

const ManageFiles = () => {
    // let IDparam = useParams(); // get userID parameters from URL
    // const userID = IDparam.userID; // obtain value of userID from json format

    // remove the sample data for integration
    const [files, setFiles] = useState([]);
    const [course,setCourse] = useState("");
    const [title,setTitle] = useState("");
    const [file,setFile] = useState();
    const [type,setType] = useState("");

    const getRequests = async() => {
        // retrieve requests from database
        const response = await fetch("http://localhost:3001/api/residentUploads"); 
        const data = await response.json(); 
        //console.log(data);
        setFiles(data); // set requests data
      }
    
    // do for each request (load data every time)
    useEffect(() => {
    getRequests();
    }, []);

    // function for resolve button, prints in console only
    const resolveBtn = async(index) => {
        const ticket = files[index];
        console.log(`Resolved ${ticket.lname}'s request.`);

        function handleFile(event) {
            setFile(event.target.files[0]);
        }

        const uploadFile = async(e) => {
            e.preventDefault();
            const fileData = new FormData();
            fileData.append("course",course);
            fileData.append("file",file);
            fileData.append("type",type);

            const data = await axios.post("http://localhost:3001/upload-files",fileData, {headers: {"Content-Type": "multipart/form-data"}})

        }

        // delete specific request document in database
        const response = await fetch(`http://localhost:3001/api/residentUploads/${ticket._id}`, {
            method: 'DELETE',
        });
        const result = await response.json;
        console.log(result);

        getRequests(); // update data and displayed requests
    };

    // similar function with resolve button, can be used for further improvements
    const rejectBtn = async(index) => {
        const ticket = files[index];
        console.log(`Rejected ${ticket.lname}'s request.`);

        // delete specific request document in database
        const response = await fetch(`http://localhost:3001/api/residentUploads/${ticket._id}`, {
             method: 'DELETE',
         });
        const result = await response.json;
        console.log(result);

        getRequests(); // update data and displayed requests
    };

    // view file
    const openFile = (fileName) => {
        console.log('Opening ${fileName}')
        window.location.href = '../assets/${fileName}';
    }

    // resolve 
    // const resolveBtn = (index) => {
    //     const ticket = files[index];
    //     console.log(`Resolved ${ticket.contributor}'s request.`);

    //     const updatedFiles = [...files];
    //     updatedFiles.splice(index, 1);
    //     setFiles(updatedFiles);
    // };

    // reject
    // const rejectBtn = (index) => {
    //     const ticket = files[index];
    //     console.log(`Rejected ${ticket.contributor}'s request.`);

    //     const updatedFiles = [...files];
    //     updatedFiles.splice(index, 1);
    //     setFiles(updatedFiles);
    // };

    return (
        <>
            <div className={styles.container}>
                <Navbar />
                <div className={styles.pageTitle}>
                    <h4 className={styles.h4}>Manage Files</h4>
                </div>
                <div>
                    {files.map((file, index) => {
                        return (
                            <>
                                <div className= {styles.fileContainer} key={index} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", padding: "2% 5%" }}>
                                    <div>
                                    <h5>{file.ftitle}</h5>
                                    <p>
                                        <strong>Uploaded by:</strong> {file.contributor}
                                    </p>
                                    <p>
                                        <strong>Upload Date:</strong> {file.date}
                                        <br />
                                        <strong>Course:</strong> {file.course}
                                        <br />
                                        <strong>Description:</strong> {file.description}
                                    </p>
                                    <button
                                        type="button"
                                        class="btn btn-light"
                                        onClick={() => openFile(file.ftitle)}
                                        style={{ borderColor: "#274C77", color: "#274C77" }}
                                    >
                                        View File
                                    </button>
                                    </div>
                                    <div className={styles.buttons}>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        onClick={() => resolveBtn(index)}
                                        style={{
                                            backgroundColor: "#274C77",
                                            border: "none",
                                            paddingLeft: "20px",
                                            paddingRight: "20px",
                                        }}
                                    >
                                        RESOLVED
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-light"
                                        onClick={() => rejectBtn(index)}
                                        style={{ borderColor: "#274C77", color: "#274C77" }}
                                    >
                                        REJECTED
                                    </button>
                                </div>
                                </div>
                                {index === files.length - 1 ? (
                                    <></> // empty
                                ) : (
                                    <hr style={{ marginBottom: 0 }} />
                                )}
                            </>
                        );
                    }
                    )}
                </div>
            </div>
        </>
    );
};

export default ManageFiles;