import React, { useEffect, useState } from "react";
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

  const [userData, setUserData] = useState([]);
  const [residentData, setResidentData] = useState([]);

  let [newResidentName, setNewResidentName] = useState([]);

  // Obtain the navigate function
  const navigate = useNavigate();

  // obtain users data
  const getUserData = async() => {
    const response = await fetch("http://localhost:3001/api/users");
    const userData = await response.json();
    console.log(userData);
    setUserData(userData);
  }

  // obtain users data
  const getResidentData = async() => {
    const response = await fetch("http://localhost:3001/api/residents");
    const residentData = await response.json();
    console.log(residentData);
    setResidentData(residentData);
  }

  // do for each request (load data every time)
  useEffect(() => {
    getUserData();
    getResidentData();
  }, []);

  // checks if entered email matches with already existing user
  let searchUser = () => {
    let userFound = false;
    for (let i = 0; i < userData.length; i++){
      if (userData[i].email === Email){
        console.log("Email: ", userData[i].email);
        console.log("Password: ", userData[i].password);
        console.log("ID: ", userData[i]._id);
        console.log("Class: ", userData[i].class);
        console.log("Email already exists in users database.");
        userFound = true; // return user's class if user exists in database
        break;
      }
    }
    return userFound;
  }

  // checks if entered email exists in the residents database
  let searchResident = () => {
    let residentFound = false;
    for (let i = 0; i < residentData.length; i++){
      if (residentData[i].email === Email){
        console.log(residentData[i].name);
        console.log(residentData[i].email);
        newResidentName = residentData[i].name;
        setNewResidentName(newResidentName); // take note of Resident's name
        console.log("Email exists in residents database.");
        residentFound = true;
        break;
      }
    }
    return residentFound;
  }

  // fetch-post method for creating new user document in database
  const createNewUser = async() => {
    const response = await fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newResidentName,
        email: Email,
        password: Password,
        class: "user",
      }),
    });
    const result = await response.json();
    console.log("Created new user: ", result);
  }

  //form functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      // if user/account does not exist but entered email exists in the residents database, allow to register
      if (searchUser() === false && searchResident() === true) {

        createNewUser(); // create a new user/register
        
        // Register successful
        toast.success("Login Successfully");
        console.log("Registered successfully.");
        console.log(Email, Password);

        // Remove current email in localStorage
        localStorage.removeItem("userEmail");

        // Save user email to localStorage
        localStorage.setItem("userEmail", Email);

        // Go back to login page
        console.log("Going back to Login.");
        navigate("/"); // Redirect to the Login page

      } else if (searchResident() === false){
        // Register failed
        console.log("Register failed. Email does not belong to a resident.");
        console.log(Email, Password);
        // toast.error(data.message || "Login failed");
      } else {
        // Register failed
        console.log("Register failed. User already exists.");
        console.log(Email, Password);
        // toast.error(data.message || "Login failed");
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
                  marginBottom: "30px",
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
                  marginTop: "25px",
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
