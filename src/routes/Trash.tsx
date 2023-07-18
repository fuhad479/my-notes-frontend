// import custom components
import Sidebar from "../components/Sidebar";
import NotesList from '../components/NotesList'

export default function Trash() {
  return (
    <div className="grid grid-cols-[250px_auto] bg-slate-100">
      <Sidebar />
      <NotesList />
    </div>
  );
}
