import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white md:max-w-[450px] w-[calc(100%-10%)] p-4 rounded-lg shadow-[0_0_30px] shadow-[rgba(0,0,0,0.1)] space-y-4">
        <h1 className="font-bold block mb-8 text-2xl">
          Sign in to your account
        </h1>
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
        <Button>Sign in</Button>
        <div className="text-sm">
          Already an user{" "}
          <Link to="/" className="text-blue-600 underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
