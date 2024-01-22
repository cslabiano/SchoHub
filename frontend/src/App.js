import { Routes, Route } from "react-router-dom";

import Login from "./pages/authorization/Login.js";
import Register from "./pages/authorization/Register.js";

import RequestForm from "./pages/user/RequestForm.js";
import UserProfile from "./pages/profile/Profile.js";

import View from "./pages/admin/View.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/view" element={<View />} />
        <Route path="/user/form" element={<RequestForm />} />
        <Route path="/user/profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
