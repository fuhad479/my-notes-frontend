import { Routes, Route } from "react-router-dom";
// import custom components
import Register from "./routes/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={"hello world"} />
    </Routes>
  );
}
