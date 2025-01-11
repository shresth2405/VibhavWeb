"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Navbar({ contactRef }) {
  const router = useRouter();

  const scrollToSection = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    if (window.location.pathname === "/") {
      scrollToSection();
    } else {
      router.push("/").then(() => {
        setTimeout(() => scrollToSection(), 100);
      });
    }
  };

  return (
    <div className="navbar sticky top-0">
      <ul className="flex gap-16 justify-center py-4 bg-black w-2/3 mx-auto">
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
  );
}

export default Navbar;
