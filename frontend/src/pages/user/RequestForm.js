import Navbar from "../../components/UserNavbar.js";
import React from "react";
import styles from "./RequestForm.module.css";

const RequestForm = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <p className={styles.leftTitle}>Request a Material</p>
          <div className={styles.formContainer}>
            <form class="row g-3">
              <div class="col-md-5">
                <label for="lastName" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder="Enter your last name"
                ></input>
              </div>
              <div class="col-md-5">
                <label for="firstName" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="Enter your first name"
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
                  placeholder="Specify the name of the material"
                ></input>
              </div>
              <div class="col-10">
                <p className={styles.fileFormat1}>Enter the file name in this format:</p>
                <p className={styles.fileFormat2}>&lt;Subject&gt;_&lt;SubjectCode&gt;_&lt;Module#/Exam#&gt;_&lt;TypeOfMaterial&gt;</p>
              </div>
              <div class="col-10">
                <label for="purpose" class="form-label">
                  Purpose of Request
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="purposeReq"
                  placeholder="State why you requested the material"
                ></input>
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
            <button type="submit" class="btn btn-light">Submit</button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default RequestForm;
