// import custom components
import Note from "./Note";

export default function NotesList() {
  return (
    <div className="grid grid-cols-4">
      <Note />
      <Note />
      <Note />
    </div>
  );
}
