import { Session } from "@supabase/supabase-js";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import supabase from "../lib/supabase";

export type AuthValue = {
  session: Session | null;
};

const AuthContext = createContext<AuthValue | undefined>(undefined);

export function AuthProvider({ children }: { children?: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);

  const authValue: AuthValue = useMemo(() => ({ session }), [session]);

  useEffect(function syncSessionChange() {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthValue {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) {
    throw new Error("useAuth must be used in an AuthProvider");
  }
  return ctx;
}
