import { Routes, Route } from "react-router-dom";

import Login from "./pages/authorization/login.js";
import Register from "./pages/authorization/register.js";
import RequestForm from "./pages/user/requestForm.js";
import View from "./pages/admin/view.js";
import UserDashboard from "./pages/user/dashboard.js";
import AdminDashboard from "./pages/admin/dashboard.js";
import UserFolderView from "./pages/user/folderView.js";
import AdminFolderView from "./pages/user/folderView.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/view" element={<View />} />
        <Route path="/user/form" element={<RequestForm/>} />
        <Route path="/user/dashboard" element={<UserDashboard/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/user/folderView" element={<UserFolderView/>} />
        <Route path="/admin/folderView" element={<AdminFolderView/>} />
      </Routes>
    </>
  );
}

export default App;
