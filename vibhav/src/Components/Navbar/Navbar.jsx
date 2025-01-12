"use client";
import React, { useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { UserContext } from "@/Context/UserContext/UserContext";
import Link from "next/link";

function Navbar() {
  const { scrollToContact } = useContext(UserContext);
  const router = useRouter();
  const [showNavbar, setShowNavbar] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();

  const handleContactClick = () => {
    if (window.location.pathname === "/") {
      scrollToContact();
    } else {
      router.push("/");
      setTimeout(() => scrollToContact(), 100);
    }
  };

  const toggleNavbar = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    setShowNavbar(() => !showNavbar);
  };

  return (
    <div className="navbar sticky fixed top-0 z-10 ">
      <div className="max-sm:hidden  py-1 bg-black px-2 w-[100%] ">
        <ul className="flex justify-between items-center ">
          <li>
            <img src="/vibhav_logo.png" className="h-16" />
          </li>
          <li>
            <ul className="flex items-center justify-evenly py-1 gap-5 bg-black w-[100%] ">
              <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
                <Link
                  href="/"
                  className={`${
                    pathname === "/" ? "text-white font-bold " : "text-gray-400"
                  } hover:text-white `}
                >
                  Home
                </Link>
              </li>
              <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
                <Link
                  href="/Projects"
                  className={`${
                    pathname === "/Projects"
                      ? "text-white font-bold  "
                      : "text-gray-400 "
                  } hover:text-white  `}
                >
                  Projects
                </Link>
              </li>
              <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
                <Link
                  href="/Team"
                  className={`${
                    pathname === "/Team"
                      ? "text-white font-bold "
                      : "text-gray-400 "
                  } hover:text-white `}
                >
                  Team
                </Link>
              </li>
              <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
                <Link
                  href="/Work"
                  className={`${
                    pathname === "/Work"
                      ? "text-white font-bold "
                      : "text-gray-400 "
                  } hover:text-white  `}
                >
                  Work
                </Link>
              </li>
            </ul>
          </li>
          <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
            <button onClick={handleContactClick}>Contact</button>
          </li>
        </ul>
      </div>
      <div className="sm:hidden flex flex-col w-full   top-0">
        <ul className="flex items-center justify-between px-3 py-1 w-[100%] mx-auto w-full  bg-black ">
          <li className="z-40">
            <img src="/vibhav_logo.png" className="h-14 " />
          </li>
          <li onClick={toggleNavbar} className="z-40">
            <img
              src={showNavbar ? "/cross.png" : "/showMenu.png"}
              className="w-7 z-20 "
            />
          </li>
        </ul>
        <div
          className={`sm:hidden transition-all duration-300 ease-in-out mt-2  bg-black w-[100%] fixed  overflow-hidden ${
            showNavbar ? "max-h-screen" : "max-h-0"
          } `}
        >
          <ul className="flex flex-col items-center justify-evenly mx-auto z-20">
            <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
              <button
                onClick={() => {
                  router.push("/");
                  toggleNavbar();
                }}
              >
                Home
              </button>
            </li>
            <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white  top-3">
              <button
                onClick={() => {
                  router.push("/Projects");
                  toggleNavbar();
                }}
              >
                Projects
              </button>
            </li>
            <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
              <button
                onClick={() => {
                  router.push("/Team");
                  toggleNavbar();
                }}
              >
                Team
              </button>
            </li>
            <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
              <button
                onClick={() => {
                  router.push("/Work");
                  toggleNavbar();
                }}
              >
                Work
              </button>
            </li>
            <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
              <button
                onClick={() => {
                  handleContactClick();
                  toggleNavbar();
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
