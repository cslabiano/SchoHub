import { Routes, Route } from "react-router-dom";

// import authentication pages
import Login from "./pages/authorization/Login.js";

// import user view pages
import UserDashboard from "./pages/user/Dashboard.js";
import {
  CmscFolderView,
  MathFolderView,
  StatFolderView,
  OthersFolderView,
} from "./pages/user/FolderView.js";
import RequestForm from "./pages/user/RequestForm.js";
import UserProfile from "./pages/profile/UserProfile.js";
import UserResources from "./pages/user/Resources.js";
import UserFiles from "./pages/user/Files.js";

// import admin view pages
import AdminDashboard from "./pages/admin/Dashboard.js";
import {
  CmscAdminFolderView,
  MathAdminFolderView,
  StatAdminFolderView,
  OthersAdminFolderView,
} from "./pages/admin/FolderView.js";
import View from "./pages/admin/ViewRequests.js";
import ManageFiles from "./pages/admin/ManageFiles.js";
import AdminProfile from "./pages/profile/AdminProfile.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/view" element={<View />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/user/form" element={<RequestForm />} />
        <Route path="/user/form" element={<RequestForm />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/user/cmscfolderView" element={<CmscFolderView />} />
        <Route path="/user/mathfolderView" element={<MathFolderView />} />
        <Route path="/user/statfolderView" element={<StatFolderView />} />
        <Route path="/user/othersfolderView" element={<OthersFolderView />} />
        <Route path="/admin/cmscfolderView" element={<CmscAdminFolderView />} />
        <Route path="/admin/mathfolderView" element={<MathAdminFolderView />} />
        <Route path="/admin/statfolderView" element={<StatAdminFolderView />} />
        <Route
          path="/admin/othersfolderView"
          element={<OthersAdminFolderView />}
        />
        <Route path="/user/resources/:id" element={<UserResources />} />
        <Route path="/user/files" element={<UserFiles />} />
        <Route path="/user/files/:search" element={<UserFiles />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/admin/manage" element={<ManageFiles />} />
      </Routes>
    </>
  );
}

export default App;
