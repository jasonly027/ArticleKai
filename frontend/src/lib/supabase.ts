import { createClient } from "@supabase/supabase-js";
import { rawQuestion } from "../components/Quiz";

const URL = import.meta.env.VITE_SUPABASE_URL;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(URL, ANON_KEY);

export async function signIn(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error("signIn", error);
  }
}

export async function signUp(email: string, password: string) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    console.error("signIn", error);
  }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("signIn", error);
  }
}

export async function saveQuiz(quiz: rawQuestion[]) {
  const { error } = await supabase.from("quizzes").insert([{quiz}]);
  if (error) {
    console.error("saveQuiz", error);
  }
}

export async function getQuizzes() {
  const { data, error } = await supabase.from("quizzes").select("*");
  if (error) {
    console.error("getQuizzes", error);
    return;
  }
  console.log("data", data);
}

export async function deleteQuiz(id: number) {
  const { error } = await supabase.from("quizzes").delete().eq("id", id);
  if (error) {
    console.error("deleteQuiz", error);
  }
}

export default supabase;
