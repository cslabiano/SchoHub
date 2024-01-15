import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./AuthorizationStyle.module.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  //added use states
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  //const [selectValue, setSelectValue] = useState(null);

  // Obtain the navigate function
  const navigate = useNavigate();

  //form functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/log-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email,
          password: Password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        toast.success("Login Successfully");
        console.log(Email, Password);

        // Remove current email in localStorage
        localStorage.removeItem("userEmail");

        // Save user email to localStorage
        localStorage.setItem("userEmail", Email);

        // Check user type and navigate accordingly
        if (data.type === "admin") {
          console.log("Going to admin");
          navigate("/admin/dashboard"); // Redirect to the admin page for Merchants
        } else {
          navigate("/user/dashboard"); // Redirect to the shop page for Customers
        }
      } else {
        // Login failed
        toast.error(data.message || "Login failed");
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
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <h1
                style={{
                  textAlign: "left",
                  color: "#474747",
                  fontSize: "38px",
                }}
              >
                Create an account!
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
                  marginTop: "45px",
                }}
              >
                SIGN UP
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
                  Sign up with Google
                </div>
              </button>
            </div>
            <div
              style={{
                color: "#929292",
                fontWeight: "bold",
                fontFamily: "Lato, sans serif",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                marginTop: "auto",
              }}
            >
              Already have an account?
              <Link
                to="/"
                style={{
                  color: "#929292",
                  fontWeight: "bold",
                  fontFamily: "Lato, sans serif",
                  marginLeft: "5px",
                }}
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
