"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { UserContext } from "@/Context/UserContext/UserContext";

function Navbar() {
  const { scrollToContact } = useContext(UserContext);
  const router = useRouter();
  const [showNavbar, setShowNavbar] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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
    <div className="navbar sticky top-0 z-10">
      <div className="max-sm:hidden">
        <ul className="flex gap-16 justify-center py-4 bg-black w-[80%] mx-auto">
          <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
            <button onClick={() => router.push("/")}>Home</button>
          </li>
          <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
            <button onClick={() => router.push("/Projects")}>Projects</button>
          </li>
          <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
            <button onClick={() => router.push("/Team")}>Team</button>
          </li>
          <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
            <button onClick={() => router.push("/Work")}>Work</button>
          </li>
          <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
            <button onClick={handleContactClick}>Contact</button>
          </li>
        </ul>
      </div>
      <div className="sm:hidden flex flex-col w-full bg-black ">
        <ul className="flex gap-16 justify-end px-3 py-4 w-[100%] mx-auto w-full">
          <li onClick={toggleNavbar}>
            <img
              src={showNavbar ? "/cross.png" : "/showMenu.png"}
              className="w-7"
            />
          </li>
        </ul>
        <div
          className={`sm:hidden transition-all duration-300 ease-in-out   bg-black w-[100%]  overflow-hidden ${
            showNavbar ? "max-h-screen" : "max-h-0"
          } `}
        >
          <ul className="flex flex-col items-center justify-evenly mx-auto">
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
            <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
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
