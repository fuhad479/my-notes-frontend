import { Dispatch, SetStateAction } from "react";

interface NoteProps {
  note: {
    _id: string;
    title: string;
    note: string;
    user: { email: string };
  };
  setOpenSingleNote: Dispatch<SetStateAction<string>>;
}

export default function Note({ note, setOpenSingleNote }: NoteProps) {
  function openSingleNote() {
    setOpenSingleNote(() => note._id);
  }

  console.log(note);

  return (
    <div
      onClick={openSingleNote}
      className="group bg-white rounded-[4px] p-3 px-4 hover:shadow-[0_0_30px] hover:shadow-[rgba(0,0,0,0.1)]"
    >
      <div className="flex items-center justify-between mb-2">
        <strong className="[display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] overflow-hidden">
          {note.title}
        </strong>
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9 15.25C9 14.9185 9.1317 14.6005 9.36612 14.3661C9.60054 14.1317 9.91848 14 10.25 14C10.5815 14 10.8995 14.1317 11.1339 14.3661C11.3683 14.6005 11.5 14.9185 11.5 15.25C11.5 15.5815 11.3683 15.8995 11.1339 16.1339C10.8995 16.3683 10.5815 16.5 10.25 16.5C9.91848 16.5 9.60054 16.3683 9.36612 16.1339C9.1317 15.8995 9 15.5815 9 15.25ZM9 10.25C9 9.91848 9.1317 9.60054 9.36612 9.36612C9.60054 9.1317 9.91848 9 10.25 9C10.5815 9 10.8995 9.1317 11.1339 9.36612C11.3683 9.60054 11.5 9.91848 11.5 10.25C11.5 10.5815 11.3683 10.8995 11.1339 11.1339C10.8995 11.3683 10.5815 11.5 10.25 11.5C9.91848 11.5 9.60054 11.3683 9.36612 11.1339C9.1317 10.8995 9 10.5815 9 10.25ZM9 5.25C9 4.91848 9.1317 4.60054 9.36612 4.36612C9.60054 4.1317 9.91848 4 10.25 4C10.5815 4 10.8995 4.1317 11.1339 4.36612C11.3683 4.60054 11.5 4.91848 11.5 5.25C11.5 5.58152 11.3683 5.89946 11.1339 6.13388C10.8995 6.3683 10.5815 6.5 10.25 6.5C9.91848 6.5 9.60054 6.3683 9.36612 6.13388C9.1317 5.89946 9 5.58152 9 5.25Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <p className="text-sm font-medium [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5] overflow-hidden">
        {note.note}
      </p>
    </div>
  );
}
