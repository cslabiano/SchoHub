import Navbar from "../../components/AdminNavbar.js";
import React from "react";
import styles from "./ViewRequests.module.css";

const ViewRequest = () => {
  // remove the sample data for integration
  const requests = [
    {
      fname: "Myndie",
      lname: "Labiano",
      date: "12/10/2023",
      title: "CMSC 100",
      description: "Design and Implementation of Web Applications",
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
  ];

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
                    <div className={styles.details}>
                      <div style={{ marginBottom: "14px" }}>
                        <h5 style={{ marginBottom: 0 }}>
                          {req.fname} {req.lname}
                        </h5>
                        <span>{req.date}</span>
                      </div>
                      <div>
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
