import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  type: "button" | "submit";
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full border text-sm rounded-[4px] p-2 bg-blue-700 text-white font-medium"
    >
      {children}
    </button>
  );
}
