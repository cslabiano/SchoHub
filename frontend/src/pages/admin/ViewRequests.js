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
      title: "CMSC 142",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      fname: "Lea",
      lname: "Somoson",
      date: "02/20/2024",
      title: "CMSC 100",
      description: "Design and Implementation of Web Applications",
    },
    {
      fname: "Arianna",
      lname: "Domingo",
      date: "01/25/2024",
      title: "CMSC 23",
      description: "Mobile Computing",
    },
  ]);

  const resolveBtn = (index) => {
    const ticket = requests[index];
    console.log(`Resolved ${ticket.lname}'s request.`);

    const updatedRequests = [...requests];
    updatedRequests.splice(index, 1);
    setRequests(updatedRequests);
  };

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
        <Navbar />
        <div className={styles.pageTitle}>
          <h4 className={styles.h4}>File Requests</h4>
        </div>
        <div className="container" style={{ marginTop: "3%" }}>
          <div className="row g-4">
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
                        <span className={styles.title}>{req.title}</span>
                        <br />
                        <span className={styles.description}>
                          {req.description}
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
