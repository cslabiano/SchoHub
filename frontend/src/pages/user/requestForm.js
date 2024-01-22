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
                <label for="inputAddress2" class="form-label">
                  Purpose of Request
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="State why you requested the material"
                ></input>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.right}></div>
      </div>
    </>
  );
};

export default RequestForm;
