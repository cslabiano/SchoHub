import React, { forwardRef } from "react";
import { FaBookmark, FaDownload, FaLink, FaList, FaEdit } from "react-icons/fa";
import styles from "./Dropdown.module.css";

const UserDropdown = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={styles.dropdown}>
        {/* Bookmark Button */}
        <button className={styles.dropdownContent}>
            <FaBookmark className={styles.icon} /> Bookmark
        </button>
        {/* Download Button */}
        <button className={styles.dropdownContent}>
            <FaDownload className={styles.icon} /> Download
        </button>
        {/* Copy Link Button */}
        <button className={styles.dropdownContent}>
            <FaLink className={styles.icon} /> Copy Link
        </button>
        {/* Details Button */}
        <button className={styles.dropdownContent}>
            <FaList className={styles.icon} /> Details
        </button>
        {/* Request to Edit Button */}
        <button className={styles.dropdownContent}>
            <FaEdit className={styles.icon} /> Request to Edit
        </button>
        </div>
    );
});

export default UserDropdown;