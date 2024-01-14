import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./authorizationStyle.module.css";

const LogIn = () => {
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
        if (data.type === "Merchant") {
          console.log("Going to admin");
          navigate("/admin"); // Redirect to the admin page for Merchants
        } else {
          navigate("/shop"); // Redirect to the shop page for Customers
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
              <h3 style={{ textAlign: "left" }}>Welcome Back!</h3>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="InputEmailAddress"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={styles.input}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  style={styles.input}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
