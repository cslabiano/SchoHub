import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  let IDparam = useParams(); // get userID parameters from URL
  const userID = IDparam.userID; // obtain value of userID from json format

  const [input, setInput] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <nav className={styles.navbar}>
        <div
          className="container-fluid"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textTransform: "capitalize",
          }}
        >
          {/* SchoHub logo */}
          <img src={require("../assets/logo.png")} alt="SchoHub logo" />
          <div style={{ width: "60%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  flexGrow: 1,
                }}
              >
                <div class="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link
                    to={`/admin/${userID}/dashboard`}
                    className="nav-item nav-link"
                    id={styles.navLink}
                  >
                    Dashboard
                  </Link>
                </div>
                <div className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link
                    to={`/admin/${userID}/manage`}
                    className="nav-item nav-link"
                    id={styles.navLink}
                  >
                    Manage Files
                  </Link>
                </div>
                <div className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link
                    to={`/admin/${userID}/view`}
                    className="nav-item nav-link"
                    id={styles.navLink}
                  >
                    View Requests
                  </Link>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "10px",
                  width: "100%",
                  flexGrow: 2,
                }}
              >
                {/* div for search bar */}
                <div style={{ width: "100%" }}>
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                      className="btn btn-outline-success"
                      id={styles.btn}
                      type="submit"
                      onClick={() => {
                        if (input === "") {
                          alert("File not found!");
                        } else {
                          navigate("/admin/" + userID + "/files/" + input);
                        }
                      }}
                    >
                      <IoSearch />
                    </button>
                  </form>
                </div>

                {/* profile */}
                <Link to={`/admin/${userID}/profile`} style={{ textDecoration: "none" }}>
                  <button
                    className="btn btn-outline-success btn-cart"
                    id={styles.btn}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 5,
                      border: "none",
                    }}
                  >
                    <FaUserCircle fontSize={25} />
                  </button>
                </Link>

                {/* log out button */}
                <Link to="/" style={{ textDecoration: "none" }}>
                  <button
                    className="btn btn-outline-success btn-cart"
                    id={styles.btn}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 5,
                      border: "none",
                    }}
                  >
                    <TbLogout fontSize={25} />
                    <span
                      style={{
                        marginLeft: 5,
                        fontFamily: "Inter, sans serif",
                        fontSize: "16px",
                      }}
                    >
                      Logout
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
