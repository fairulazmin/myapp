import { useState } from "react";

interface AuthUser {
  name: string;
  email: string;
}

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = () =>
    setUser({
      name: "Malik",
      email: "malik@tm.com.my",
    });

  const logout = () => setUser(null);

  return (
    <>
      <button onClick={login}>Log In</button>
      <button onClick={logout}>Log Out</button>
      {user && <div>User name is {user.name}</div>}
      {user && <div>User email is {user.email}</div>}
    </>
  );
};
