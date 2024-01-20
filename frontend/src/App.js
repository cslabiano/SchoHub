import { Routes, Route } from "react-router-dom";

import Login from "./pages/authorization/login.js";
import Register from "./pages/authorization/register.js";
import RequestForm from "./pages/user/requestForm.js";
import View from "./pages/admin/view.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/view" element={<View />} />
        <Route path="/user/form" element={<RequestForm/>} />
      </Routes>
    </>
  );
}

export default App;
