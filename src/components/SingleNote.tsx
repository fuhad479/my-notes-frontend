import { Dispatch, SetStateAction } from "react";
import { useGetSingleNoteQuery } from "../services/notes";

interface SingleNoteProps {
  openSingleNote: string;
  setOpenSingleNote: Dispatch<SetStateAction<string>>;
}

export default function SingleNote({ openSingleNote, setOpenSingleNote }: SingleNoteProps) {
  const { data: note } = useGetSingleNoteQuery(openSingleNote);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
      <div className="w-[700px] bg-white rounded-[8px] p-4">
        <div className="flex items-center justify-between mb-3">
          <strong className="block">{note?.title}</strong>
          <button type="button" onClick={() => setOpenSingleNote(() => "")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
              />
            </svg>
          </button>
        </div>
        <p>
          {note?.note}
        </p>
      </div>
    </div>
  );
}
