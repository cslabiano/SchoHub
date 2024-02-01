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
                            <div class="row g-3">
                                {/* Course */}
                                <div class="col-sm-4">
                                    <label for="subject" class="form-label text-white">
                                    Course
                                    </label>
                                    <input
                                    type="text"
                                    class="form-control"
                                    id="course"
                                    placeholder="Enter course"
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
                                    id="file_name"
                                    placeholder="Enter file name"
                                    ></input>
                                </div>
                                {/* Link */}
                                <div class="col-12">
                                    <label for="purpose" class="form-label  text-white">
                                    Link
                                    </label>
                                    <input
                                    type="text"
                                    class="form-control"
                                    id="link"
                                    placeholder="Paste the link of your file"
                                    ></input>
                                </div>
                                {/* Type */}
                                <div class="col-12">
                                    <label for="purpose" class="form-label  text-white">
                                    Type
                                    </label>
                                    <input
                                    type="text"
                                    class="form-control"
                                    id="type"
                                    placeholder="State the type of your material"
                                    ></input>
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