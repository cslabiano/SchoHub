import React, { useState, useEffect } from "react";
import Navbar from "../../components/AdminNavbar.js";
import styles from "./Profile.module.css";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AdminProfile = () => {
  let IDparam = useParams(); // get userID parameters from URL
  const userID = IDparam.userID; // obtain value of userID from json format


  const [profileData, setProfileData] = useState({
    // name: "Lorem Ipsum Dolor",
    // orgBatch: "Org Batch",
    // department: "Department",
    // bio: "Lorem Ipsum Dolor SIt Amet",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // to display user information in profile page
  const handleSetUserData = async() => {
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
  }, []);


  const [updatedProfileData, setUpdatedProfileData] = useState({
    name: profileData.name,
    orgBatch: profileData.orgBatch,
    department: profileData.department,
    bio: profileData.bio,
  });


  // form submission
  const handleSaveChanges = async(updatedProfileData, userID) => {
    setProfileData(updatedProfileData);
    console.log("update profile with id: ", userID);

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
        bio: updatedProfileData.bio
      }),
    })

    const result = await response1.json();

    console.log("Updated profile: ", result);
  };

  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div
          className={styles.title}
          style={{ paddingTop: "2%", paddingLeft: "5%", paddingBottom: 0 }}
        >
          <h4 className={styles.h4}>Profile</h4>
        </div>
        <div className={styles.profileSection}>
          <FaUserCircle fontSize={150} color="#274c77" />
          <p className={styles.classification}>Classification: Admin</p>
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
                  </label>

                  <br />

                  <label>
                    Org Batch:
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
                  </label>
                  <br />
                  <label>
                    Department:
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
                  </label>
                  <br />
                  <label>
                    Bio:
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
                  </label>
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
    </>
  );
};

export default AdminProfile;
