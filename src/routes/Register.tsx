import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white md:max-w-[450px] w-[calc(100%-10%)] p-4 rounded-lg shadow-[0_0_30px] shadow-[rgba(0,0,0,0.1)] space-y-4">
        <h1 className="font-bold block mb-8 text-2xl">
          Sign up for an account
        </h1>
        <div className="md:flex md:gap-4 md:space-y-0 space-y-4">
          <Input
            type="text"
            label="First name"
            id="first-name"
            name="first-name"
            placeholder="John"
          />
          <Input
            id="last-name"
            type="text"
            label="Last name"
            name="last-name"
            placeholder="Doe"
          />
        </div>
        <Input
          id="email"
          type="email"
          label="Email"
          name="email"
          placeholder="john@example.com"
        />
        <Input
          id="password"
          type="password"
          label="Password"
          name="password"
          placeholder="••••••"
        />
        <Button>Create account</Button>
        <div className="text-sm">
          Already an user <Link to="/login" className="text-blue-600 underline">Login</Link>
        </div>
      </div>
    </div>
  );
}
