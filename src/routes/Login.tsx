import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
// import custom hooks
import { useLoginUserMutation } from "../services/users";
// import custom components
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  // using pre made hook from RTK Query to work with API endpoints
  const [loginUser, { data, isSuccess }] = useLoginUserMutation();

  // this function will submit the form with user provided data for login
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // prevent from taking a refresh after submitting the form
    event.preventDefault();

    loginUser({ email, password });
  }

  useEffect(() => {
    isSuccess && navigate('/notes');
  }, [isSuccess, navigate])

  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white md:max-w-[450px] w-[calc(100%-10%)] p-4 rounded-lg shadow-[0_0_30px] shadow-[rgba(0,0,0,0.1)] space-y-4">
        <h1 className="font-bold block mb-8 text-2xl">
          Sign in to your account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="email"
            type="email"
            label="Email"
            name="email"
            placeholder="john@example.com"
            value={email}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
          />
          <Input
            id="password"
            type="password"
            label="Password"
            name="password"
            placeholder="••••••"
            value={password}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
          />
          <Button type="submit">Sign in</Button>
        </form>
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
