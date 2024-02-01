import React, {useState} from "react";
import styles from "./AddFile.module.css";
import buttonstyle from "./Dashboard.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const AddFileModal = ({closeModal}) => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

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
                                    placeholder="State the description of your material"
                                    ></textarea>
                                </div>
                                {/* File Upload */}
                                <div class="mb-3">
                                    <label for="formFile" class="form-label  text-white">
                                        File Upload
                                    </label>
                                    <input class="form-control" type="file" id="formFile"></input>
                                </div>
                            </div>  
                        </form>
                        {/* Button for submitting, also closes the modal after submitting */}
                        <button className={styles.button} onClick={handleClose}>
                            Submit
                        </button>
                    </div>
                    
                </div>
                </>)}
                
            </>
        );
    };

export default AddFileModal;