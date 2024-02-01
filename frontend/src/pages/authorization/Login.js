import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./AuthorizationStyle.module.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Spline from '@splinetool/react-spline';

const LogIn = () => {
  //added use states
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  //const [userID, setUserID] = useState("");

  // Obtain the navigate function
  const navigate = useNavigate();

  //form functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // search if user exists in User collection
      const response = await fetch(
        `http://localhost:3001/login/${Email}/${Password}`
      ); // pass Email and Password to index.js
      const success = await response.json(); // if there is an account, will contain the document of the user; else will contain false
      //console.log("User class: ", success);

      if (success) {
        // Login successful
        toast.success("Logged in Successfully");
        console.log("Logged in Successfully");
        
        let userID = success._id; // take note of returned user ID

        //console.log(Email, Password);
        //console.log("class user: ", success);

        // Remove current email in localStorage
        localStorage.removeItem("userEmail");

        // Save user email to localStorage
        localStorage.setItem("userEmail", Email);

        // Check user type and navigate accordingly
        if (success.class === "admin") {
          console.log("Going to admin");
          navigate(`/admin/${userID}/dashboard`); // Redirect to the admin page for Merchants
        } else {
          navigate(`/user/${userID}/dashboard`); // Redirect to the shop page for Customers
        }
      } else {
        // Login failed
        // put alert: "Incorrect email or password."
        console.log("Login failed. Incorrect email or password.");
        //toast.error(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Error during login");
    }
  };

  return (
    <>
      <div className={styles.container}>
        {/* Left Side */}
        <div className={styles.left}>
        <Spline style={{width:"100%"}} scene="https://prod.spline.design/DUkaPT-0Dt5vm1So/scene.splinecode" />
        </div>
        <div className={styles.right}>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <h1
                style={{
                  textAlign: "left",
                  color: "#474747",
                  fontSize: "38px",
                  marginBottom: "30px",
                }}
              >
                Welcome back!
              </h1>
              <div
                className="mb-3"
                style={{
                  width: "100%",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  fontSize: "21px",
                  color: "#474747",
                }}
              >
                E-mail
                <br />
                <input
                  type="email"
                  // className="form-control"
                  id="InputEmailAddress"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={styles.formInput}
                />
              </div>

              <div
                className="mb-3"
                style={{
                  fontWeight: "bold",
                  fontSize: "21px",
                  marginBottom: "5px",
                  color: "#474747",
                }}
              >
                Password
                <br />
                <input
                  type="password"
                  // className="form-control"
                  id="exampleInputPassword1"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className={styles.formInput}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  color: "white",
                  border: "none",
                  backgroundColor: "#274c77",
                  fontSize: "22px",
                  height: "55px",
                  width: "100%",
                  alignItems: "center",
                  borderRadius: "4px",
                  marginTop: "25px",
                }}
              >
                SIGN IN
              </button>
            </form>
            <div className={styles.lineContainer}>
              <div className={styles.line}></div>
              <div className={styles.word}>or</div>
              <div className={styles.line}></div>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  display: "flex",
                  color: "#474747",
                  border: "solid",
                  borderColor: "#274c77",
                  borderWidth: "2px",
                  fontSize: "20px",
                  height: "55px",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "4px",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    fontFamily: "Lato, sans serif",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FcGoogle fontSize="30px" />
                  </div>
                  Sign in with Google
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
