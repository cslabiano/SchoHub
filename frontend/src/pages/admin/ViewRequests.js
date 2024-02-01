import Navbar from "../../components/AdminNavbar.js";
import React, { useEffect, useState } from "react";
import styles from "./ViewRequests.module.css";
//import { useParams } from "react-router-dom";

const ViewRequest = () => {
  // let IDparam = useParams(); // get userID parameters from URL
  // const userID = IDparam.userID; // obtain value of userID from json format

  // remove the sample data for integration
  const [requests, setRequests] = useState([]);
  
  const getRequestsData = async() => {
    // retrieve requests data from database
    const response = await fetch("http://localhost:3001/api/requests"); 
    const data = await response.json(); 
    //console.log(data);
    setRequests(data); // set requests data
  }

  // do for each request (load data every time)
  useEffect(() => {
    getRequestsData();
  }, []);

  // function for resolve button, prints in console only
  const resolveBtn = async(index) => {
    const ticket = requests[index];
    console.log(`Resolved ${ticket.lname}'s request.`);
    //console.log("ID: ", ticket._id);

    // transfer request to user history
    const response0 = await fetch(`http://localhost:3001/manage-requests/${ticket.userID}/${ticket.course}/${ticket.file}/Resolved`);
    const result0 = await response0.json();
    console.log(result0);

    // delete specific request document in database
    const response1 = await fetch(`http://localhost:3001/api/requests/${ticket._id}`, {
      method: 'DELETE',
    });
    const result1 = await response1.json();
    console.log(result1);

    getRequestsData(); // update data and displayed requests

    // const updatedRequests = [...requests];
    // updatedRequests.splice(index, 1);
    // setRequests(updatedRequests);
  };

  // similar function with resolve button, can be used for further improvements
  const rejectBtn = async(index) => {
    const ticket = requests[index];
    console.log(`Rejected ${ticket.lname}'s request.`);
    //console.log("ID: ", ticket._id);

    // transfer request to user history
    const response0 = await fetch(`http://localhost:3001/manage-requests/${ticket.userID}/${ticket.course}/${ticket.file}/Rejected`);
    const result0 = await response0.json();
    console.log(result0);

    // delete specific request document in database
    const response1 = await fetch(`http://localhost:3001/api/requests/${ticket._id}`, {
      method: 'DELETE',
    });
    const result1 = await response1.json;
    console.log(result1);

    getRequestsData(); // update data and displayed requests

    // const updatedRequests = [...requests];
    // updatedRequests.splice(index, 1);
    // setRequests(updatedRequests);
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
