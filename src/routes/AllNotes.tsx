// import custom components
import Sidebar from "../components/Sidebar";
import NotesList from "../components/NotesList";
import { useGetAllNotesQuery } from "../services/notes";

export default function Notes() {
  const { data: notes } = useGetAllNotesQuery();

  return (
    <div className="grid grid-cols-[250px_auto] bg-slate-100">
      <Sidebar />
      {notes && <NotesList notes={notes} />}
    </div>
  );
}
