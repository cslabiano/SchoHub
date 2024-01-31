import Navbar from "../../components/UserNavbar.js";
import React, { useState } from "react";
import styles from "./RequestForm.module.css";

const RequestForm = () => {
  // use states
  const [Lastname, setLastname] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [RequestFilename, setRequestFilename] = useState("");
  const [Purpose, setPurpose] = useState("");

  const recordRequest = async(e) => {
    e.preventDefault();
    try {

      // pass Lastname, Firstname, RequestFilename, and Purpose to index.js
      const response = await fetch(`http://localhost:3001/record-request/${Lastname}/${Firstname}/${RequestFilename}/${Purpose}`);
      const result = await response.json();

      if (result){
        console.log("File request recorded.");
        window.location.reload(); // reload page to clear form
        // NOTE: want to just clear out the form fields after clicking on submit, settled for refreshing the page instead
        //       feel free to change if there is a better alternative
      } else {
        console.log("Failed to record file request.");
      }     
      
    } catch (error) {
      console.error("Error upon recording request:", error);
    }
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <p className={styles.leftTitle}>Request a Material</p>
          <div className={styles.formContainer}>
            <form class="row g-3" id="requestForm">
              <div class="col-md-5">
                <label for="firstName" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  value={Firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="Enter your first name"
                ></input>
              </div>
              <div class="col-md-5">
                <label for="lastName" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  value={Lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Enter your last name"
                ></input>
              </div>
              <div class="col-10">
                <label for="fileRequest" class="form-label">
                  File to be Requested
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fileReq"
                  value={RequestFilename}
                  onChange={(e) => setRequestFilename(e.target.value)}
                  placeholder="Specify the name of the material"
                ></input>
              </div>
              <div class="col-10">
                <p className={styles.fileFormat1}>Enter the file name in this format:</p>
                <p className={styles.fileFormat2}>&lt;Subject&gt;_&lt;SubjectCode&gt;_&lt;Module#/Exam#&gt;_&lt;TypeOfMaterial&gt;</p>
                <p className={styles.fileFormat2}>Example: CMSC_21_Module5_Problem Set</p>
              </div>
              <div class="col-10">
                <label for="purpose" class="form-label">
                  Purpose of Request
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="purposeReq"
                  value={Purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  placeholder="State why you requested the material"
                ></textarea>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.rightTitle}>Guidelines in requesting a material</p>
          <div className={styles.textBox}>
            <p className={styles.textGuide}>
              The Scholastics Department holds the authority to both accept and reject material requests based on a thorough assessment of their alignment with our curriculum, educational standards, and the core values of the organization.
            </p>
            <p className={styles.textGuide}>
              Every material in the SchoHub, including the materials to be requested, shall be under the discretion of the organization and not to be shared among those outside of it.
            </p>
            <p className={styles.textGuide}>
              Any misuse of materials will be subject to investigation, and potential consequences, including disciplinary action, will be determined based on the severity of the offense.
            </p>
          </div>
          <div className={styles.buttonBox}>
            <button type="submit" onClick={recordRequest} class="btn btn-light">Submit</button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default RequestForm;
