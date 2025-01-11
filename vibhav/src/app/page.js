import Faq from "../Components/Faq/Faq";
import Contact from "../Components/Contact/Contact";
import First from "../Components/Main/First/First";

export default function Home() {
  return (
    <div className=" w-screen flex flex-col items-center">
      <First />
      <Faq />
      <Contact />
    </div>
  );
}
