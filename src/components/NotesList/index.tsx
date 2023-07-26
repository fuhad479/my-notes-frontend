import { useState } from "react";
// import custom components
import Button from "../Button";
import Note from "./Note";
import SingleNote from "../SingleNote";
import NoteForm from "../NoteForm";

interface Notes {
  title: string;
  note: string;
  user: {
    email: string;
  };
}

interface NotesListProps {
  notes: Notes[];
}

export default function NotesList({ notes }: NotesListProps) {
  const [openSingleNote, setOpenSingleNote] = useState<boolean>(false);
  const [openNoteForm, setOpenNoteForm] = useState<boolean>(false);

  console.log(notes);

  return (
    <div>
      <div className="flex border-b border-b-slate-200 items-center justify-between bg-white px-3 py-2">
        <div className="w-[70%] flex items-center border rounded-[4px] px-2 py-1 focus-within:outline focus-within:outline-2 focus-within:outline-blue-700">
          <svg
            width="20"
            height="20"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M31.7389 25.6531L28.8344 22.7449C28.2229 22.1327 27.3057 22.1327 26.6943 22.7449C26.0828 23.3571 26.0828 24.2755 26.6943 24.8878L29.5987 27.7959C30.0573 28.2551 30.0573 29.0204 29.5987 29.4796C29.1401 29.9388 28.3758 29.9388 27.9172 29.4796L23.3312 24.8878C23.6369 24.5816 23.9427 24.4286 24.2484 24.1224C26.5414 21.8265 27.9172 18.6122 27.9172 15.398C27.9172 12.0306 26.6943 8.96939 24.2484 6.67347C19.3567 1.77551 11.5605 1.77551 6.66879 6.67347C1.77707 11.5714 1.77707 19.3776 6.66879 24.2755C8.96178 26.5714 12.172 27.949 15.3822 27.949C17.2166 27.949 19.051 27.4898 20.5796 26.7245L25.6242 31.7755C26.3885 32.5408 27.6115 33 28.6815 33C29.7516 33 30.8217 32.5408 31.7389 31.7755C33.4204 29.9388 33.4204 27.1837 31.7389 25.6531ZM8.80892 21.8265C5.14013 18.1531 5.14013 12.1837 8.80892 8.66327C10.6433 6.82653 12.9363 5.90816 15.3822 5.90816C17.828 5.90816 20.121 6.82653 21.9554 8.66327C23.7898 10.5 24.707 12.7959 24.707 15.2449C24.707 17.6939 23.7898 20.1429 21.9554 21.8265C20.121 23.5102 17.828 24.5816 15.3822 24.5816C12.9363 24.5816 10.4904 23.6633 8.80892 21.8265Z"
              fill="black"
            />
          </svg>
          <input
            id="search"
            name="search"
            type="text"
            placeholder="search note"
            onChange={() => ({})}
            value=""
            className="w-full outline-none"
          />
        </div>
        <div className="flex">
          <Button type="button" onClick={() => setOpenNoteForm(() => true)}>
            Create note
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 p-3">
        {notes?.map((note, index) => (
          <Note key={index} note={note} setOpenSingleNote={setOpenSingleNote} />
        ))}
      </div>
      {openSingleNote && <SingleNote setOpenSingleNote={setOpenSingleNote} />}
      {openNoteForm && <NoteForm setOpenNoteForm={setOpenNoteForm} />}
    </div>
  );
}
