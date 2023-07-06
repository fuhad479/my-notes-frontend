import { useEffect } from "react";

export default function App() {
  async function checkServer() {
    const response = await fetch(
      "https://my-notes-backend-t6jl.onrender.com/api"
    );
    console.log(await response.json());
  }

  useEffect(() => {
    checkServer();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">Hello World</div>
  );
}
