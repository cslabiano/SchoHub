import { Routes, Route } from "react-router-dom";

import Login from "./pages/authorization/Login.js";
import Register from "./pages/authorization/Register.js";
import RequestForm from "./pages/user/RequestForm.js";
import UserProfile from "./pages/profile/UserProfile.js";
import AdminProfile from "./pages/profile/AdminProfile.js";

import View from "./pages/admin/View.js";
import UserDashboard from "./pages/user/Dashboard.js";
import AdminDashboard from "./pages/admin/Dashboard.js";
import UserFolderView from "./pages/user/FolderView.js";
import AdminFolderView from "./pages/admin/FolderView.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/view" element={<View />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/user/form" element={<RequestForm />} />
        <Route path="/user/form" element={<RequestForm/>} />
        <Route path="/user/dashboard" element={<UserDashboard/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/user/folderView" element={<UserFolderView/>} />
        <Route path="/admin/folderView" element={<AdminFolderView/>} />
        <Route path="/user/profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
