import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
// import custom hooks
import { useRegisterUserMutation } from "../services/users";
// import custom components
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // using pre made hook from RTK Query to work with API endpoints
  const [registerUser, { data }] = useRegisterUserMutation();

  // this function will submit the user registration form with user provided values
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // prevent the page from taking a refresh after submitting the form
    event.preventDefault();

    registerUser({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    });
  }

  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white md:max-w-[450px] w-[calc(100%-10%)] p-4 rounded-lg shadow-[0_0_30px] shadow-[rgba(0,0,0,0.1)] space-y-4">
        <h1 className="font-bold block mb-8 text-2xl">
          Sign up for an account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="md:flex md:gap-4 md:space-y-0 space-y-4">
            <Input
              type="text"
              label="First name"
              id="first-name"
              name="first-name"
              placeholder="John"
              value={firstName}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setFirstName(event.target.value)
              }
            />
            <Input
              id="last-name"
              type="text"
              label="Last name"
              name="last-name"
              placeholder="Doe"
              value={lastName}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setLastName(event.target.value)
              }
            />
          </div>
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
          <Button type="submit">Create account</Button>
        </form>
        <div className="text-sm">
          Already an user{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
