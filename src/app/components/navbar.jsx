"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Anasayfa" },
  { url: "/about", title: "Hakkımda" },
  { url: "/contact", title: "İletişim" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      <div className="md:hidden lg:flex">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-2 font-semibold flex items-center justify-center"
        >
          <span className="text-white">Avukat</span>
          <span className="rounded bg-slate-50 p-2 font-semibold ml-2 flex items-center justify-center">
            Ali Kaan Aydın
          </span>
        </Link>
      </div>

        {/* logo kullanmak istesen burada kullan */}

      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-10 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>

        {open && (
          <div className="absolute top-0 left-0 bg-black w-screen h-screen text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
