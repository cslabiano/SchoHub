import { Routes, Route } from "react-router-dom";

import Login from "./pages/authorization/Login.js";
import Register from "./pages/authorization/Register.js";

import View from "./pages/admin/View.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/view" element={<View />} />
      </Routes>
    </>
  );
}

export default App;
