"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface User {
  name: string;
  email: string;
}

const State = () => {
  const [user, setUser] = useState<User | null>();

  const handleLogin = () =>
    setUser({
      name: "Fairul",
      email: "fairul@mysa.gov.my",
    });

  const handleLogout = () => setUser(null);

  return (
    <div className="space-x-3">
      <Button onClick={handleLogin}>Log In</Button>
      <Button onClick={handleLogout}>Log Out</Button>
      {user && <div>User name is {user.name}</div>}
      <div>User email is {user?.email}</div>
    </div>
  );
};

export default State;
