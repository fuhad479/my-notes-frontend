import { Dispatch, SetStateAction } from "react";
// import custom component
import Input from "./Input";

interface NoteFormProps {
  setOpenNoteForm: Dispatch<SetStateAction<boolean>>;
}

export default function NoteForm({ setOpenNoteForm }: NoteFormProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <form className="p-3 bg-white rounded-[8px] space-y-3 w-[500px]">
        <div className="flex items-center justify-between">
          <h1 className="font-bold">Create note</h1>
          <button type="button" onClick={() => setOpenNoteForm(() => false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
              ></path>
            </svg>
          </button>
        </div>
        <Input
          type="text"
          name="note-title"
          id="note-tite"
          placeholder="Note title"
          value=""
          onChange={() => ({})}
        />
        <textarea
          name=""
          id=""
          cols={30}
          rows={5}
          placeholder="Actual note"
          className="w-full border rounded-[4px] p-2 focus:outline-blue-700"
        />
      </form>
    </div>
  );
}
