"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import the router from next/router
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About Me",
    path: "about",
  },
  {
    title: "Projects",
    path: "project",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter(); // Get the current route

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-20">
      <div className="flex flex-wrap items-center justify-between max-w-auto px-4">
        <Link href={"/"} className="text-2xl sm:text-5xl text-white font-semibold">
          Logo
        </Link>
        <div className="md:hidden block mobile-menu">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:flex-row sm:flex-row p-4 md:p-0 md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  className={`${
                    router.pathname === `/${link.path}`
                      ? "text-white font-semibold border-b-2 border-white" // Add underline for active link
                      : "text-[#ADB7BE] hover:text-white" // No underline for inactive links
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export { Navbar };
