import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import styles from "./navbar.module.css";

const AdminNavbar = () => {
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
                    to="/admin/dashboard"
                    className="nav-item nav-link"
                    id={styles.navLink}
                  >
                    Dashboard
                  </Link>
                </div>
                <div className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link
                    to="/admin/manage"
                    className="nav-item nav-link"
                    id={styles.navLink}
                  >
                    Manage Files
                  </Link>
                </div>
                <div className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link
                    to="/admin/view"
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
                <div style={{ width: "100%" }}>
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-outline-success"
                      id={styles.btn}
                      type="submit"
                    >
                      <IoSearch />
                    </button>
                  </form>
                </div>

                <Link to="/profile" style={{ textDecoration: "none" }}>
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
