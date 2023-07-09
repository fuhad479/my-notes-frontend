import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      type="button"
      className="w-full border rounded-[4px] p-2 bg-blue-700 text-white font-medium"
    >
      {children}
    </button>
  );
}
