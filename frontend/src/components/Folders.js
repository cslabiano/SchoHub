import React from "react";
import { FaFolder } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import styles from "./Folders.module.css";

class Files extends React.Component {
    render() {
        return (
            <>
                <div className={styles.folder}>
                    <div className={styles.folderInfo}><FaFolder color="#274C77" fontSize={25}/>{this.props.title}</div>
                    <button><FaEllipsisV className={styles.more}/></button>
                </div>
            </>
        );
    };
};

export default Files;
