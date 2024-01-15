import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import styles from "./navbar.module.css";

const userNavbar = () => {
  return (
    <>
      <nav
        // className="navbar navbar-expand-lg bg-body-tertiary"
        className={styles.navbar}
        style={{
          position: "sticky",
          top: 0,
        }}
      >
        <div
          className="container-fluid"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: 50,
            marginRight: 50,
            textTransform: "capitalize",
          }}
        >
          <img src={require("../assets/logo.png")} alt="SchoHub logo" />
          {/* class="collapse navbar-collapse" id="navbarSupportedContent"*/}
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
                  gap: "0px",
                  flexGrow: 1,
                  // backgroundColor: "pink",
                }}
              >
                <div class="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link to="/dashboard" className={styles.navLink}>
                    Dashboard
                  </Link>
                </div>
                <div className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link to="/form" className={styles.navLink}>
                    Request Form
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
                  // backgroundColor: "yellow",
                }}
              >
                <div style={{ width: "100%" }}>
                  <form className="d-flex" role="search">
                    <input
                      // className="form-control me-2"
                      className={styles.search}
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      <IoSearch />
                    </button>
                  </form>
                </div>

                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <button
                    className="btn btn-outline-success btn-cart"
                    style={{ marginBottom: 5 }}
                  >
                    <FaUserCircle fontSize={25} />
                  </button>
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <button
                    className="btn btn-outline-success btn-cart"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 5,
                    }}
                  >
                    <TbLogout fontSize={25} />
                    <span style={{ marginLeft: 5 }}>Logout</span>
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

export default userNavbar;
