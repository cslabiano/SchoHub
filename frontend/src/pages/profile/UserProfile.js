import React, { useState } from "react";
import Navbar from "../../components/UserNavbar.js";
import styles from "./Profile.module.css";
import { FaUserCircle } from "react-icons/fa";
import { TbBellX } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import axios from 'axios';

const UserProfile = () => {
  const notifs = [
    {
      course: "Course 101",
      file: "Course Guide",
      status: "Accepted",
    },
    {
      course: "Course 101",
      file: "Course Guide",
      status: "Rejected",
    },
    {
      course: "Course 101",
      file: "Course Guide",
      status: "Accepted",
    },
    {
      course: "Course 101",
      file: "Course Guide",
      status: "Rejected",
    },
    {
      course: "Course 101",
      file: "Course Guide",
      status: "Accepted",
    },
    {
      course: "Course 101",
      file: "Course Guide",
      status: "Rejected",
    },
  ];

  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "Lorem Ipsum Dolor",
    orgBatch: "Org Batch",
    department: "Department",
    bio: "Lorem Ipsum Dolor SIt Amet",
  });

  const [updatedProfileData, setUpdatedProfileData] = useState({
    name: profileData.name,
    orgBatch: profileData.orgBatch,
    department: profileData.department,
    bio: profileData.bio,
  });

  // update user profile
  const handleEditProfile = () => {
    setIsEditPopupVisible(true);
  };

  const handleSaveChanges = async () => {
    try {

      UserProfile.get('/',(req, res,next) => {
      const users = req.app.locals.users;
      const username = req.params.username;

      users.findOne({ username }, (err, results) => {
        if (err || !results) {
          res.render('profile', {message: {error: ['User not found']}});
        }
      
        res.render('profile', { ...results, username});
      });
    });
  
    UserProfile.post('/', (req, res, next) => {
      const users = req.app.locals.users;
      const { name, orgBatch, department, bio } = req.body;
      // const _id = ObjectID(req.session.passport.user);

      users.updateOne({_id }, {$set: {name, orgBatch, department, bio}}, 
        (err) => {
          if (err) {
            throw err;
          }

          res.redirect('/users')
        });
      });
      
      // await axios.put('http://localhost:3001/api/profile/1', updatedProfileData); // Assuming user ID is 1
      setProfileData(updatedProfileData);
      setIsEditPopupVisible(false);
    } catch (error) {
      console.error(error);
    }

  
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
              onClick={handleEditProfile}
            >
              Edit Profile
            </button>
          </div>

          {/* edit profile popup */}
          {isEditPopupVisible && (
            <div className={styles.editPopup}>
              <div className={styles.title}>
                <h4 class={styles.h4}>Edit Profile</h4>
              </div>
              {/* edit profile form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveChanges();
                }}
              >
                <div className={styles.formfields}>
                  <label>
                    Name:
                    <input
                      type="text"
                      value={updatedProfileData.name}
                      onChange={(e) =>
                        setUpdatedProfileData({
                          ...updatedProfileData,
                          name: e.target.value,
                        })
                      }
                    />
                  </label>
                  <br />
                  <label>
                    Org Batch:
                    <input
                      type="text"
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
                      value={updatedProfileData.bio}
                      onChange={(e) =>
                        setUpdatedProfileData({
                          ...updatedProfileData,
                          bio: e.target.value,
                        })
                      }
                    />
                  </label>
                  <br />
                  <button
                    className={styles.editButton}
                    id={styles.btn}
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}
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
              {notifs.length === 0 ? (
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
                      // onClick={() => handleClear()}
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
                  {/* similar to the function "for each", calls for the list named "notif" */}
                  {notifs.map((notif, index) => {
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
                              <strong>Course:</strong> {notif.course}
                            </span>
                            <br />
                            <span>
                              <strong>File Requested:</strong> {notif.file}
                            </span>
                            <br />
                            <span>
                              <strong>Status:</strong> {notif.status}
                            </span>
                          </div>
                          <div style={{ marginRight: "8%" }}>
                            <button
                              className="btn btn-light"
                              // onClick={() => handleDelete(index)}
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
                        {index === notifs.length - 1 ? (
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
};

export default UserProfile;
