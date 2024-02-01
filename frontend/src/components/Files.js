import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import UserDropdown from "./UserDropdown";
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
    constructor(props) {
        super(props);
        this.state = {
            isDropdownOpen: false,
        };
        this.dropdownRef = React.createRef();
    }

    componentDidMount() {
        // Add a click event listener to the document
        document.addEventListener("click", this.handleDocumentClick);
    }

    componentWillUnmount() {
        // Remove the click event listener when the component is unmounted
        document.removeEventListener("click", this.handleDocumentClick);
    }

    handleDocumentClick = (e) => {
        // Check if the clicked element is outside the dropdown
        if (this.dropdownRef.current && !this.dropdownRef.current.contains(e.target)) {
            // Close the dropdown
            this.setState({ isDropdownOpen: false });
        }
    };

    handleEllipsisClick = (e) => {
        // Prevent the default behavior of the event
        e.preventDefault();
        
        // Stop the event propagation to prevent it from reaching the parent link
        e.stopPropagation();

        this.setState((prevState) => ({
            isDropdownOpen: !prevState.isDropdownOpen,
        }));
    };

    render() {
        
        const { isDropdownOpen } = this.state;

        return (
            <>
                <div className={styles.file}>
                    <div className={styles.fileImg} id={styles.curriculum}> </div>

                    <div className={styles.fileDetails}>
                        <div className={styles.fileInfo}>
                            {this.fileType()}
                            {this.props.title}
                        </div>
                        <button className={styles.fileMore} onClick={this.handleEllipsisClick}>
                            <FaEllipsisV />
                        </button>
                        {isDropdownOpen && (
                        <div>
                            {/* dropdown for user pov */}
                            <UserDropdown ref={this.dropdownRef} className={styles.dropdown}/>
                        </div>
                    )}
                    </div>
                </div>
            </>
        );
    };
};

export default Files;
