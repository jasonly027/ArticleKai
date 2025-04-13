import { createClient } from "@supabase/supabase-js";
import { RawQuestion } from "../components/Quiz";

const URL = import.meta.env.VITE_SUPABASE_URL;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(URL, ANON_KEY);

export async function isAuth(): Promise<boolean> {
  return (await supabase.auth.getUser()).data.user !== null;
}

export async function signIn(email: string, password: string): Promise<boolean> {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("signIn", error);
    }

    return error === null;
  } catch (error) {
    console.error("internal err", error);
    return false;
  }
}

export async function signUp(email: string, password: string): Promise<boolean> {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    console.error("signIn", error);
  }

  return error === null;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("signIn", error);
  }
}

export async function saveQuiz(quiz: RawQuestion[], description: string) {
  const { error } = await supabase.from("quizzes").insert([{ quiz, description }]);
  if (error) {
    console.error("saveQuiz", error);
  }
}

export interface SavedQuestion {
  id: number;
  questions: RawQuestion[];
  description: string;
}

export async function getQuizzes(): Promise<SavedQuestion[]> {
  const { data, error } = await supabase.from("quizzes").select("*");
  if (error) {
    console.error("getQuizzes", error);
    return [];
  }
  return data.map(({ id, quiz, description }) => ({ id, questions: quiz, description }));
}

export async function deleteQuiz(id: number) {
  const { error } = await supabase.from("quizzes").delete().eq("id", id);
  if (error) {
    console.error("deleteQuiz", error);
  }
}

export default supabase;
