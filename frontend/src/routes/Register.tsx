import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../lib/supabase";

type LoginError = "ExistingAccount" | "PasswordMismatch" | "MissingFields";

export function Register() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<LoginError | null>(null);

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (userName === "" || password === "" || confirmPassword === "") {
      setError("MissingFields");
      return;
    }

    if (password !== confirmPassword) {
      setError("PasswordMismatch");
      return;
    }

    const ok = await signUp(userName, password);

    if (ok) {
      navigate("/generate");
    } else {
      setError("ExistingAccount");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-[url('https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-repeat bg-gradient-to-b from-[#0f2027] via-[#000101] to-[#162b34] w-screen h-screen">
      <div className="flex flex-col items-center space-y-[1rem] border-0 p-40 bg-gradient-to-r from-indigo-600 via-purple-600 to-gray-700 rounded-3xl shadow-2xl ring-1 ring-white/10 opacity-96">
        <div className="text-4xl text-blue-300 font-extrabold">ArticleKai</div>
        {/* email and password tags */}
        <div className="flex flex-col items-center space-y-4 py-5 text-lg text-white">
          <div className="flex items-center space-x-2 border-2 border-gray-300 p-3 rounded-xl bg-black/30 backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <input
              placeholder="Email"
              className="focus:outline-0 bg-transparent text-white placeholder-gray-300"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2 border-2 border-gray-300 p-3 rounded-xl bg-black/30 backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <input
              placeholder="Password"
              className="focus:outline-0 bg-transparent text-white placeholder-gray-300"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2 border-2 border-gray-300 p-3 rounded-xl bg-black/30 backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <input
              placeholder="Confirm Password"
              className="focus:outline-0 bg-transparent text-white placeholder-gray-300"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <Link
          to="/login"
          className="text-[#96ccff]"
        >
          Already have an account?
        </Link>
        {/* Register button */}
        <button
          onClick={handleRegister}
          className="px-10 cursor-pointer border-2 border-indigo-500 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg p-3 transition-all duration-300"
        >
          Register Account
        </button>
        {error !== null && <div className="text-red-500 text-lg">{toErrorMsg(error)}</div>}
      </div>
    </div>
  );
}

function toErrorMsg(error: LoginError): string {
  switch (error) {
    case "PasswordMismatch":
      return "The passwords should match";
    case "ExistingAccount":
      return "That user already exists";
    case "MissingFields":
      return "Some fields are empty";
  }
}
