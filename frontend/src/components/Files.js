import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import styles from "./Files.module.css";


class Files extends React.Component {
    fileType() {
        const type = this.props.type;
        switch(type)
        {
            case "pdf":
                return(<FaFilePdf color="#274C77" fontSize={25}/>);
            case "docs":
                return(<FaFileAlt color="#274C77" fontSize={25}/>);
            default:
                return(<FaFile color="#274C77" fontSize={25}/>);
        }
    }
    render() {
        return (
            <>
                <div className={styles.file}>
                    <div className={styles.fileImg} id={styles.curriculum}> </div>

                    <div className={styles.fileDetails}>
                        <div className={styles.fileInfo}>
                            {this.fileType()}
                            {this.props.title}
                        </div>
                        <button className={styles.fileMore}>
                            <FaEllipsisV />
                        </button>
                    </div>
                </div>
            </>
        );
    };
};

export default Files;
