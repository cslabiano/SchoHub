import Navbar from "../../components/AdminNavbar.js";
import React, { useState } from "react";
import styles from "./ViewRequests.module.css";

const ViewRequest = () => {
  // remove the sample data for integration
  const [requests, setRequests] = useState([
    {
      fname: "Myndie",
      lname: "Labiano",
      date: "12/10/2023",
      course: "CMSC 142",
      file: "Course Guide",
      purpose:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      fname: "Markus",
      lname: "Recaplaza",
      date: "12/14/2023",
      course: "CMSC 100",
      file: "Course Guide",
      purpose: "Design and Implementation of Web Applications",
    },
    {
      fname: "Arianna",
      lname: "Domingo",
      date: "01/25/2024",
      course: "CMSC 23",
      file: "Course Guide",
      purpose: "Mobile Computing",
    },
  ]);

  // function for resolve button, prints in console only
  const resolveBtn = (index) => {
    const ticket = requests[index];
    console.log(`Resolved ${ticket.lname}'s request.`);

    const updatedRequests = [...requests];
    updatedRequests.splice(index, 1);
    setRequests(updatedRequests);
  };

  // similar function with resolve button, can be used for further improvements
  const rejectBtn = (index) => {
    const ticket = requests[index];
    console.log(`Rejected ${ticket.lname}'s request.`);

    const updatedRequests = [...requests];
    updatedRequests.splice(index, 1);
    setRequests(updatedRequests);
  };

  return (
    <>
      <div className={styles.container}>
        {/* calls the admin navbar component */}
        <Navbar />

        {/* Tab title */}
        <div className={styles.pageTitle}>
          <h4 className={styles.h4}>File Requests</h4>
        </div>

        {/* div for containing the requests dynamically */}
        <div className="container" style={{ marginTop: "3%" }}>
          <div className="row g-4">
            {/* similar to the function "for each", calls for the list named "req" */}
            {requests.map((req, index) => {
              return (
                <>
                  <div key={index} className={styles.reqContainer}>
                    <div>
                      <div style={{ marginBottom: "14px" }}>
                        <h5 style={{ marginBottom: 0 }}>
                          {req.fname} {req.lname}
                        </h5>
                        <span>{req.date}</span>
                      </div>
                      <div
                        style={{
                          paddingRight: "20px",
                        }}
                      >
                        <span>
                          <strong>Course:</strong> {req.course}
                        </span>
                        <br />
                        <span>
                          <strong>File Requested:</strong> {req.file}
                        </span>
                        <br />
                        <span>
                          <strong>Purpose:</strong> {req.purpose}
                        </span>
                      </div>
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
                  {index === requests.length - 1 ? (
                    <></> // empty
                  ) : (
                    <hr style={{ marginBottom: 0 }} />
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewRequest;
