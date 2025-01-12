"use client";
import React, { useEffect, useState } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full ">
      <div className="w-full fixed flex justify-center bottom-6">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className=" m-auto right-6 bg-black opacity-50 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 "
          >
            <img src="BackToTop.png" className="h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

export default BackToTop;
