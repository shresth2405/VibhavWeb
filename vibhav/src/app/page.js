"use client";
import Faq from "../Components/Faq/Faq";
import Contact from "../Components/Contact/Contact";
import First from "../Components/Main/First/First";
import { UserContext } from "@/Context/UserContext/UserContext";
import { useContext } from "react";

export default function Home() {
  const { contactRef } = useContext(UserContext);
  return (
    <div className=" w-screen flex flex-col items-center">
      <First />
      <Faq />
      <Contact ref={contactRef} />
    </div>
  );
}
