import Link from "next/link";
import { HomeIcon } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="p-4 border-b shadow-md mb-5">
      <div className="container">
        <Link href="/">
          <HomeIcon />
        </Link>
      </div>
    </div>
  );
};
