import React from "react";
import { FaFolder, FaEllipsisV } from "react-icons/fa";
import styles from "./Folders.module.css";
import UserDropdown from "./UserDropdown";

class Files extends React.Component {

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
                <div onClick={this.props.onClick} className={styles.folder}>
                    <div className={styles.folderInfo}><FaFolder color="#274C77" fontSize={25}/>{this.props.title}</div>
                    {/* Button for Dropdown of Options */}
                    <button onClick={this.handleEllipsisClick} className={styles.ellipsis}><FaEllipsisV className={styles.more}/></button>
                    {isDropdownOpen && (
                        <div>
                            {/* Dropdown for user pov */}
                            <UserDropdown ref={this.dropdownRef} className={styles.dropdown}/>
                        </div>
                        
                    )}
                </div>
            </>
        );
    };
};

export default Files;
