import { ReactNode } from "react";

interface ButtonProps {
  type: "button" | "submit";
  children: ReactNode;
}

export default function Button({ children, type }: ButtonProps) {
  return (
    <button
      type={type}
      className="w-full border rounded-[4px] p-2 bg-blue-700 text-white font-medium"
    >
      {children}
    </button>
  );
}
