import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <div className="absolute left-8 top-8">
        <Link
          href="/"
          className="flex items-center text-sm gap-2 px-4 py-3 rounded text-white hover:bg-gray-500"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>
      </div>
      <div className="bg-slate-950 w-full min-h-screen pt-8">{children}</div>
    </main>
  );
};

export default Layout;
