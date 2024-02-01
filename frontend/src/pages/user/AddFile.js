import React, {useState} from "react";
import styles from "./AddFile.module.css";
import buttonstyle from "./Dashboard.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const AddFileModal = ({closeModal}) => {
    const [showModal, setShowModal] = useState(false);
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Subject, setSubject] = useState("");
    const [RequestFilename, setRequestFilename] = useState("");
    const [Description, setDescription] = useState("");

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const recordRequest = async(e) => {
        e.preventDefault();
        try {
        
        // pass to index.js
            const response = await fetch(`http://localhost:3001/record-user-add-file/${Firstname}/${Lastname}/${Subject}/${RequestFilename}/${Description}`);
            const result = await response.json();
        
            if (result){
                console.log("File added.");
                window.location.reload(); // reload page to clear form
                // NOTE: want to just clear out the form fields after clicking on submit, settled for refreshing the page instead
                //       feel free to change if there is a better alternative
              } else {
                console.log("Failed to add.");
              }     
              
            } catch (error) {
              console.error("Error upon recording request:", error);
            }
    }

        return (
            <>
                {/* Add file button */}
                <button id={buttonstyle.addFile} onClick={handleShow}>
                    <FaPlus /> <p>Add File</p>
                </button>

                {showModal && (
                <>
                <div className={styles.overlay}></div>
                <div className={styles.container}>
                    {/* Closes the modal */}
                    <button className={styles.closeButton} onClick={handleClose}>
                        <IoIosCloseCircle size={25} />
                    </button>
                    <div className={styles.content}>
                        <form id="addfileForm">
                            <h3>Upload File:</h3>
                            <div class="row g-3">
                                {/* First Name */}
                                <div class="col-md-6">
                                    <label for="firstName" class="form-label text-white">First Name</label>
                                    <input
                                    type="text"
                                    class="form-control"
                                    id="firstName"
                                    value={Firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    placeholder="Enter your first name">
                                    </input>
                                </div>
                                {/* Last Name */}
                                <div class="col-md-6">
                                    <label for="lastName" class="form-label text-white">Last Name</label>
                                    <input
                                    type="text"
                                    class="form-control"
                                    id="lastName"
                                    value={Lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    placeholder="Enter your last name">
                                    </input>
                                </div>
                                {/* Subject */}
                                <div class="col-sm-4">
                                    <label for="subject" class="form-label text-white">
                                    Subject
                                    </label>
                                    <input
                                    type="text"
                                    class="form-control"
                                    id="subject"
                                    value={Subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder="Enter subject"
                                    ></input>
                                </div>
                                {/* File Name */}
                                <div class="col-md-8">
                                    <label for="fileName" class="form-label text-white">
                                    File Name
                                    </label>
                                    <input
                                    type="text"
                                    class="form-control"
                                    id="fileName"
                                    value={RequestFilename}
                                    onChange={(e) => setRequestFilename(e.target.value)}
                                    placeholder="Enter file name"
                                    ></input>
                                </div>
                                {/* Description */}
                                <div class="col-12">
                                    <label for="purpose" class="form-label  text-white">
                                    Description
                                    </label>
                                    <textarea
                                    type="text"
                                    class="form-control"
                                    id="purposeReq"
                                    value={Description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="State the description of your material"
                                    ></textarea>
                                </div>
                                {/* File Upload */}
                                <div class="mb-3">
                                    <label for="formFile" class="form-label  text-white">
                                        File Upload
                                    </label>
                                    <input class="form-control" type="file" id="formFile" name = "file"></input>
                                </div>
                            </div>  
                        </form>
                        {/* Button for submitting, also closes the modal after submitting */}
                        <button 
                            className={styles.button} 
                            onClick={() => {
                                recordRequest();
                            }}
                        >
                            Submit
                        </button>
                    </div>
                    
                </div>
                </>)}
                
            </>
        );
    };
export default AddFileModal;