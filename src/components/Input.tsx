import { ChangeEvent } from "react";

interface InputProps {
  id: string;
  error?: string;
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "email" | "password";
}

export default function Input({
  type,
  name,
  id,
  label,
  error,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="font-medium text-xs">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border rounded-[4px] p-2 focus:outline-blue-700"
      />
      {error && (
        <span className="text-red-400 text-xs">
          This is error message from response
        </span>
      )}
    </div>
  );
}
