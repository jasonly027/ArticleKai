import "./index.css";
import { createBrowserRouter, Navigate, redirect, RouterProvider } from "react-router-dom";
import { Login } from "./routes/Login.tsx";
import { Register } from "./routes/Register.tsx";
import Generate from "./routes/Generate.tsx";
import { isAuth } from "./lib/supabase.ts";
import Quiz from "./routes/Quiz.tsx";

async function validateIsAuthLoader() {
  const authed = await isAuth();
  if (!authed) {
    throw redirect("/login");
  }
}

async function validateIsNotAuthLoader() {
  const authed = await isAuth();
  if (authed) {
    throw redirect("/generate");
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Navigate
        to="/login"
        replace
      />
    ),
  },
  { path: "/login", element: <Login />, loader: validateIsNotAuthLoader },
  { path: "/register", element: <Register />, loader: validateIsNotAuthLoader },
  {
    path: "/generate",
    element: <Generate />,
    loader: validateIsAuthLoader,
  },
  {
    path: "/quiz",
    element: <Quiz />,
    loader: validateIsAuthLoader,
  },
  {
    path: "*",
    element: (
      <Navigate
        to="/login"
        replace
      />
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
