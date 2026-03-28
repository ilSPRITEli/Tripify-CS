import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { signInWithGoogle, signOut } from "../lib/auth";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [me, setMe] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      const { data } = await supabase.auth.getSession();
      setSessionEmail(data.session?.user.email ?? null);
    };

    void run();
  }, []);

  const fetchMe = async () => {
    const res = await api.auth.me.get();

    if (res.error) {
      setError(JSON.stringify(res.error.value));
      setMe(null);
      return;
    }

    setError(null);
    setMe(res.data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1>Tripify</h1>

      <p>Session email: {sessionEmail ?? "Not signed in"}</p>

      <button onClick={() => void signInWithGoogle()}>
        Sign in with Google
      </button>

      <button onClick={() => void signOut()}>Sign out</button>

      <button onClick={() => void fetchMe()}>Fetch /auth/me</button>

      {error && <pre>{error}</pre>}
      {me && (
        <pre>{JSON.stringify(me as Record<string, unknown>, null, 2)}</pre>
      )}
    </div>
  );
}
