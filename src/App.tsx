import { Routes, Route } from "react-router-dom";
// import custom components
import Register from "./routes/Register";
import Login from "./routes/Login";
import AllNotes from "./routes/AllNotes";
import Bookmarks from "./routes/Bookmarks";
import Trash from "./routes/Trash";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/notes" element={<AllNotes />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/trash" element={<Trash />} />
    </Routes>
  );
}
