// import custom components
import Note from "./Note";

export default function NotesList() {
  return (
    <div className="p-3">
      <div className="header">THIS IS NOTES HEADER</div>
      <div className="grid grid-cols-4 gap-3">
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
      <div className="header">THIS IS NOTES FOOTER</div>
    </div>
  );
}
