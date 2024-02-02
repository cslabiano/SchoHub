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
import AdminResources from "./pages/admin/Resources.js";
import AdminFiles from "./pages/admin/Files.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/admin/:userID/view" element={<View />} />
        <Route path="/admin/:userID/profile" element={<AdminProfile />} />
        <Route path="/user/:userID/form" element={<RequestForm />} />
        <Route path="/user/:userID/form" element={<RequestForm />} />
        <Route path="/user/:userID/dashboard" element={<UserDashboard />} />
        <Route path="/admin/:userID/dashboard" element={<AdminDashboard />} />
        {/*<Route path="/user/:userID/folderView/:id" element={<UserFolderView />} />*/}
        <Route path="/user/:userID/cmscfolderView" element={<CmscFolderView />} />
        <Route path="/user/:userID/mathfolderView" element={<MathFolderView />} />
        <Route path="/user/:userID/statfolderView" element={<StatFolderView />} />
        <Route path="/user/:userID/othersfolderView" element={<OthersFolderView />} /> 
        <Route path="/admin/:userID/cmscfolderView" element={<CmscAdminFolderView />} />
        <Route path="/admin/:userID/mathfolderView" element={<MathAdminFolderView />} />
        <Route path="/admin/:userID/statfolderView" element={<StatAdminFolderView />} />
        <Route
          path="/admin/:userID/othersfolderView"
          element={<OthersAdminFolderView />}
        />
        <Route path="/user/:userID/resources/:course/:id" element={<UserResources />} />
        <Route path="/admin/:userID/resources/:course/:id" element={<AdminResources />} />
        <Route path="/user/:userID/files" element={<UserFiles />} />
        <Route path="/user/:userID/files/:search" element={<UserFiles />} />
        <Route path="/admin/:userID/files/:search" element={<AdminFiles />} />
        <Route path="/user/:userID/profile" element={<UserProfile />} />
        <Route path="/admin/:userID/manage" element={<ManageFiles />} />
      </Routes>
    </>
  );
}

export default App;
