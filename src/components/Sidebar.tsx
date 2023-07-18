import { Link } from "react-router-dom";
// import custom component
import Button from "./Button";

export default function Sidebar() {
  return (
    <aside className="bg-white h-screen flex flex-col border-r border-r-slate-200">
      <nav className="p-3">
        <ul>
          <li className="rounded-[4px] font-medium flex items-center gap-1 hover:bg-blue-100">
            <Link to="/notes" className="py-2 flex items-center gap-1 px-2 w-full">
              <svg
                width="20"
                height="20"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.5 8.7002C5.32843 8.7002 6 9.37177 6 10.2002V27.0002C6 29.4014 8.10625 31.5002 10.8 31.5002H23.85C24.6784 31.5002 25.35 32.1718 25.35 33.0002C25.35 33.8286 24.6784 34.5002 23.85 34.5002H10.8C6.59375 34.5002 3 31.199 3 27.0002V10.2002C3 9.37177 3.67157 8.7002 4.5 8.7002Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 6.28571C9 3.49953 11.369 1.5 13.9759 1.5H21.3621C22.9943 1.5 24.5396 2.04046 25.7229 3.19469L31.2052 8.17549C31.2204 8.18929 31.2353 8.2034 31.2499 8.21781C32.4212 9.37316 33 10.9082 33 12.4286V23.7143C33 26.5005 30.631 28.5 28.0241 28.5H13.9759C11.369 28.5 9 26.5005 9 23.7143V6.28571ZM13.9759 4.5C12.8172 4.5 12 5.35762 12 6.28571V23.7143C12 24.6424 12.8172 25.5 13.9759 25.5H28.0241C29.1828 25.5 30 24.6424 30 23.7143V12.4286C30 11.6721 29.7165 10.9299 29.1627 10.3731L23.6844 5.39594C23.6693 5.38214 23.6543 5.36803 23.6397 5.35361C23.0881 4.80946 22.3259 4.5 21.3621 4.5H13.9759Z"
                  fill="black"
                />
              </svg>
              <span>All notes</span>
            </Link>
          </li>
          <li className="rounded-[4px] font-medium flex items-center gap-1 hover:bg-blue-100">
            <Link to="/bookmarks" className="py-2 flex items-center gap-1 px-2 w-full">
              <svg
                width="20"
                height="20"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 7.04882V30.319C9 31.379 10.2073 31.8125 10.8599 31.2157L16.8973 25.5425C17.4746 24.9999 18.3743 24.9999 18.9516 25.5425L24.9892 31.2158C25.3244 31.5228 25.7708 31.5816 26.2157 31.3933C26.665 31.2031 26.9545 30.8246 27 30.4084V6.99042C27 5.6478 25.8364 4.5 24.5719 4.5H11.5791C10.3458 4.5 9.12468 5.62479 9 7.04882ZM6.00369 6.88521C6.20417 4.03395 8.59577 1.5 11.5791 1.5H24.5719C27.5377 1.5 30 4.03567 30 6.99042V30.4725C30 30.5076 29.9988 30.5427 29.9963 30.5777C29.7644 33.8752 25.6136 35.8762 22.9499 33.4162L22.9404 33.4074L17.9245 28.6939L12.899 33.4162C10.227 35.884 6 33.8613 6 30.319V6.99042C6 6.95532 6.00123 6.92023 6.00369 6.88521Z"
                  fill="black"
                />
              </svg>
              <span>Bookmarks</span>
            </Link>
          </li>
          <li className="rounded-[4px] font-medium flex items-center gap-1 hover:bg-blue-100">
            <Link to="/trash" className="py-2 flex items-center gap-1 px-2 w-full">
              <svg
                width="20"
                height="20"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.1 3C11.1 2.17157 11.7716 1.5 12.6 1.5H23.4C24.2284 1.5 24.9 2.17157 24.9 3C24.9 3.82843 24.2284 4.5 23.4 4.5H12.6C11.7716 4.5 11.1 3.82843 11.1 3ZM1.5 8.4C1.5 7.57157 2.17157 6.9 3 6.9H33C33.8284 6.9 34.5 7.57157 34.5 8.4C34.5 9.22843 33.8284 9.9 33 9.9H30.9V27.6C30.9 31.4284 27.8284 34.5 24 34.5H12C8.14476 34.5 5.09999 31.4014 5.09999 27.45V9.9H3C2.17157 9.9 1.5 9.22843 1.5 8.4ZM8.09999 9.9V27.45C8.09999 29.7986 9.85523 31.5 12 31.5H24C26.1716 31.5 27.9 29.7716 27.9 27.6V9.9H8.09999ZM13.95 13.8C14.7784 13.8 15.45 14.4716 15.45 15.3V26.25C15.45 27.0784 14.7784 27.75 13.95 27.75C13.1216 27.75 12.45 27.0784 12.45 26.25V15.3C12.45 14.4716 13.1216 13.8 13.95 13.8ZM22.05 13.8C22.8784 13.8 23.55 14.4716 23.55 15.3V26.25C23.55 27.0784 22.8784 27.75 22.05 27.75C21.2216 27.75 20.55 27.0784 20.55 26.25V15.3C20.55 14.4716 21.2216 13.8 22.05 13.8Z"
                  fill="black"
                />
              </svg>
              <span>Trash</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-3 mt-auto">
        <Button type="button">Create note</Button>
      </div>
    </aside>
  );
}
