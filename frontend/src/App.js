import { Routes, Route } from "react-router-dom";
import Login from "./pages/authorization/login.js";
import Register from "./pages/authorization/register.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
