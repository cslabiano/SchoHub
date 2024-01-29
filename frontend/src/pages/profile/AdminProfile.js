import React, { useState } from "react";
import Navbar from "../../components/AdminNavbar.js";
import styles from "./Profile.module.css";
import { FaUserCircle } from "react-icons/fa";

const AdminProfile = () => {
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

  // clicking edit profile
  const handleEditProfile = () => {
    setIsEditPopupVisible(true);
  };

  // form submission
  const handleSaveChanges = (updatedProfileData) => {
    setProfileData(updatedProfileData);
    setIsEditPopupVisible(false);
  };

  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.title}>
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
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* edit profile popup */}
      {isEditPopupVisible && (
        <div className={styles.editPopup}>
          <div className={styles.title}>
            <h2 class={styles.h4}>Edit Profile</h2>
          </div>
          {/* edit profile form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();

              handleSaveChanges(updatedProfileData);
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
    </>
  );
};

export default AdminProfile;
