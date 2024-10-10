import { Button, Icon, Icons, Logo } from "@/ui";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="absolute top-5 md:top-16  left-1/2 -translate-x-1/2 z-10 w-full px-5 md:px-20">
      <div className="w-full max-w-6xl mx-auto bg-white rounded-full py-3 px-5 grid grid-flow-col items-center justify-between">
        <Logo className="w-12" />

        <nav className="w-max hidden sm:grid grid-flow-col items-center gap-5 text-gray-600">
          <Link
            href={"#proects"}
            className="hover:text-gray-800 transition-all"
          >
            Projects
          </Link>
          <Link
            href={"#about-us"}
            className="hover:text-gray-800 transition-all"
          >
            About Us
          </Link>
          <Link href={"#community"} className="hover:text-gray-800 transition-all">
            Community
          </Link>
        </nav>

        <div className="">
          <Button variant="filled-green" className="py-4">Connect Wallet</Button>
        </div>
      </div>
    </header>
  );
}
