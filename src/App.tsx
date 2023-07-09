import { Routes, Route } from "react-router-dom";
// import custom components
import Register from "./routes/Register";
import Login from "./routes/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
