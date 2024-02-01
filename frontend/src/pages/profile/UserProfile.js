import React, { useState, useEffect } from "react";
import Navbar from "../../components/UserNavbar.js";
import styles from "./Profile.module.css";
import { FaUserCircle } from "react-icons/fa";
import { TbBellX } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { useParams } from "react-router-dom";
//import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const UserProfile = () => {
  let IDparam = useParams(); // get userID parameters from URL
  const userID = IDparam.userID; // obtain value of userID from json format

  const [history, setHistory] = useState([]);

  // get the resolved/rejected file requests made by user
  const getHistoryData = async() => {
    // retrieve user history data from database
    const response = await fetch(`http://localhost:3001/api/users/${userID}`); 
    const data = await response.json(); 
    const historyData = data.history;
    //console.log(data);
    setHistory(historyData); // set requests by user data
  }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [profileData, setProfileData] = useState({
    // name: "Lorem Ipsum Dolor",
    // orgBatch: "Org Batch",
    // department: "Department",
    // bio: "Lorem Ipsum Dolor SIt Amet",
  });

  // to display user information in profile page
  const handleSetUserData = async () => {
    console.log(userID);
    const response = await fetch(`http://localhost:3001/api/users/${userID}`); // get specific user document from users collection
    const user = await response.json();
    setProfileData({ // set profile using retrieved user document's information
      name: user.name,
      orgBatch: user.batch,
      department: user.department,
      bio: user.bio,
    })
  }

  useEffect(() => {
    handleSetUserData(); // load the user data corresponding to the user ID
    getHistoryData(); // load user's hisory
  }, []);

  const [updatedProfileData, setUpdatedProfileData] = useState({
    name: profileData.name,
    orgBatch: profileData.orgBatch,
    department: profileData.department,
    bio: profileData.bio,
  });
  
  // form submission
  const handleSaveChanges = async (updatedProfileData, userID) => {
    setProfileData(updatedProfileData);
    //console.log("update profile with id: ", userID);

    // get original data from database
    const response0 = await fetch(`http://localhost:3001/api/users/${userID}`); // obtain specific user from database
    const originalData = await response0.json(); // the user's original data

    // update the document in the database
    const response1 = await fetch(`http://localhost:3001/api/users/${userID}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ // update new data and retain non-updated data
        name: updatedProfileData.name,
        email: originalData.email,
        class: originalData.class,
        batch: updatedProfileData.orgBatch,
        department: updatedProfileData.department,
        bio: updatedProfileData.bio,
        history: originalData.history
      }),
    })

    const result = await response1.json();

    //console.log("Updated profile: ", result);
  };

  // deleting a single notif in user history
  const handleDelete = async(index, userID) => {
    const type = "single"
    
    const response = await fetch(`http://localhost:3001/delete-history/${type}/${userID}/${index}`);
    const result = await response.json();
    getHistoryData();
  };

  // clearing user history
  const handleClear = async(userID) => {
    const type = "clear"
    
    const response = await fetch(`http://localhost:3001/delete-history/${type}/${userID}/`);
    const result = await response.json();
    getHistoryData();
  };

  return (
    <>
      <Navbar />
      <div className={styles.container} style={{ display: "flex" }}>
        <div
          className={styles.left}
          style={{ borderRight: "1px solid", borderColor: "#C7C7C7" }}
        >
          <div
            className={styles.title}
            style={{ paddingTop: "3.30%", paddingLeft: "6%" }}
          >
            <h4 className={styles.h4}>Profile</h4>
          </div>
          <div className={styles.profileSection}>
            <FaUserCircle fontSize={150} color="#274c77" />
            <p className={styles.classification}>Classification: User</p>
            <h4 className={styles.h4}>Name: {profileData.name}</h4>
            <p className={styles.boldText}>
              {profileData.orgBatch} | {profileData.department}
            </p>
            <p className={styles.bio}>Bio: {profileData.bio}</p>
            <button
              className={styles.editButton}
              id={styles.btn}
              onClick={handleShow}
            >
              Edit Profile
            </button>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className={styles.h4}>Edit Profile</Modal.Title>
            </Modal.Header>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveChanges(updatedProfileData, userID);
              }}
            >
              <Modal.Body>

                <div className={styles.formfields}>
                  <label>Name:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value={updatedProfileData.name}
                    onChange={(e) =>
                      setUpdatedProfileData({
                        ...updatedProfileData,
                        name: e.target.value,
                      })
                    }
                  ></input>

                  <br />

                  <label>Org Batch:</label>
                  <input
                    type="text"
                    class="form-control"
                    value={updatedProfileData.orgBatch}
                    onChange={(e) =>
                      setUpdatedProfileData({
                        ...updatedProfileData,
                        orgBatch: e.target.value,
                      })
                    }
                  />
                  <br />
                  <label>Department:</label>
                  <input
                    type="text"
                    class="form-control"
                    value={updatedProfileData.department}
                    onChange={(e) =>
                      setUpdatedProfileData({
                        ...updatedProfileData,
                        department: e.target.value,
                      })
                    }
                  />
                  <br />
                  <label>Bio:</label>
                  <textarea
                    class="form-control"
                    value={updatedProfileData.bio}
                    onChange={(e) =>
                      setUpdatedProfileData({
                        ...updatedProfileData,
                        bio: e.target.value,
                      })
                    }
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit" style={{ background: "#274c77" }}
                  onClick={() => {
                    handleSaveChanges(updatedProfileData, userID);
                    handleClose();
                  }}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </form>

          </Modal>
        </div>
        <div
          className={styles.right}
          style={{ overflowY: "auto", height: "90vh" }}
        >
          <div
            className={styles.title}
            style={{ paddingTop: "8%", paddingLeft: "6%" }}
          >
            <h4 className={styles.h4}>History</h4>
          </div>
          {/* div for containing the requests dynamically */}
          <div className="container" style={{ marginTop: "3%" }}>
            <div className="row g-4">
              {history.length === 0 ? (
                <>
                  <div className="text-center" style={{ marginTop: "35%" }}>
                    <TbBellX fontSize={200} color="#8B8C89" />
                    <h4 style={{ color: "#8B8C89" }}>Your history is empty.</h4>
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <button
                      type="button"
                      class="btn btn-light"
                      onClick={() => handleClear(userID)}
                      style={{
                        borderColor: "#274C77",
                        color: "#274C77",
                        marginRight: "3.5%",
                        fontSize: "10px",
                        marginBottom: 5,
                      }}
                    >
                      CLEAR ALL
                    </button>
                  </div>
                  {/* similar to the function "for each", calls for the list named "history" */}
                  {history.map((hist, index) => {
                    return (
                      <>
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "22px",
                            marginTop: 0,
                          }}
                        >
                          <div
                            style={{
                              paddingRight: "20px",
                              marginLeft: "12%",
                              width: "75%",
                            }}
                          >
                            <span>
                              <strong>Course:</strong> {hist.course}
                            </span>
                            <br />
                            <span>
                              <strong>File Requested:</strong> {hist.file}
                            </span>
                            <br />
                            <span>
                              <strong>Status:</strong> {hist.status}
                            </span>
                          </div>
                          <div style={{ marginRight: "8%" }}>
                            <button
                              className="btn btn-light"
                              onClick={() => handleDelete(index, userID)}
                              style={{
                                // paddingTop: 3,
                                height: "40px",
                                borderRadius: "50%",
                              }}
                            >
                              <IoClose color="#8B8C89" />
                            </button>
                          </div>
                        </div>
                        {index === history.length - 1 ? (
                          <></>
                        ) : (
                          <hr style={{ marginBottom: "22px", marginTop: 0 }} />
                        )}
                      </>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default UserProfile;
