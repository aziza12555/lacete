import { useEffect, useState } from "react";
import About from "./about";
import Rooms from "./rooms";

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsExpanded(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setShowText(true);
    }, 3000);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
<>
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Background Image */}
      <img
        src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/209/ALH_Odisej_exterior_aerial_07-scaled-1920x0.jpg"
        alt="Hotel Odisej"
        className={`
          absolute inset-0 w-full h-full object-cover 
          transform transition-transform duration-[2000ms] ease-in-out
          ${isExpanded ? "scale-100" : "scale-50"}
        `}
      />

      {/* Hero Title — Always at Top */}
      <div
        className={`
          text-[#5b6647] font-bold transition-all duration-1000 ease-in-out
          ${showText ? "opacity-100" : "opacity-0"}
          ${isSticky 
            ? "fixed top-4 left-1/2 -translate-x-1/2 z-50 text-xl md:text-2xl"
            : "absolute top-12 left-1/2 -translate-x-1/2 text-3xl md:text-5xl"}
        `}
      >
        Hotel Jizzakh
      </div>
    </div>
    <About/>
    <Rooms/>
</>
  );
};

export default Hero;
