import Navbar from "../../components/AdminNavbar.js";
import React, { useState } from "react";
import styles from "./ManageFiles.module.css";
//import { useParams } from "react-router-dom";

const ManageFiles = () => {
    // let IDparam = useParams(); // get userID parameters from URL
    // const userID = IDparam.userID; // obtain value of userID from json format

    const [files, setFiles] = useState([
        {
            ftitle: "regression.pdf",
            date: "12/10/2023",
            contributor: "Beyoncé Giselle Knowles-Carter",
            course: "CMSC 150",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            ftitle: "JavaFXBasics.pdf",
            date: "1/4/2024",
            contributor: "Taylor Alison Swift",
            course: "CMSC 22:",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
    ]);

    const openFile = (fileName) => {
        console.log('Opening ${fileName}')
        window.location.href = '../assets/${fileName}';
    }

    const resolveBtn = (index) => {
        const ticket = files[index];
        console.log(`Resolved ${ticket.contributor}'s request.`);

        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };

    const rejectBtn = (index) => {
        const ticket = files[index];
        console.log(`Rejected ${ticket.contributor}'s request.`);

        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };

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
                            </>
                        )
                    }
                    )}
                </div>
            </div>
        </>
    )
}

export default ManageFiles;