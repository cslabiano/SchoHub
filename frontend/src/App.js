import { Routes, Route } from "react-router-dom";

// import authentication pages
import Login from "./pages/authorization/Login.js";
import Register from "./pages/authorization/Register.js";

// import user view pages
import UserDashboard from "./pages/user/Dashboard.js";
import UserFolderView from "./pages/user/FolderView.js";
import RequestForm from "./pages/user/RequestForm.js";
import UserProfile from "./pages/profile/UserProfile.js";
import UserCMSC21 from "./pages/user/CMSC21.js";

// import admin view pages
import AdminDashboard from "./pages/admin/Dashboard.js";
import AdminFolderView from "./pages/admin/FolderView.js";
import View from "./pages/admin/ViewRequests.js";
import ManageFiles from "./pages/admin/ManageFiles.js";
import AdminProfile from "./pages/profile/AdminProfile.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/view" element={<View />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/user/form" element={<RequestForm />} />
        <Route path="/user/form" element={<RequestForm />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/user/folderView" element={<UserFolderView />} />
        <Route path="/user/CMSC21" element={<UserCMSC21 />} />
        <Route path="/admin/folderView" element={<AdminFolderView />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/admin/manage" element={<ManageFiles />} />
      </Routes>
    </>
  );
}

export default App;
