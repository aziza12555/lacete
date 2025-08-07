import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import { Button } from "../ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed px-6 py-5 top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={() => navigate("/menu")} 
          className="text-[#5b6647] hover:text-[#d2d8c4] transition"
        >
          <Menu className="w-6 h-6" />
        </button>

       <div className="flex gap-4">
      <Button className="group relative bg-white text-[#5b6647] hover:bg-[#a6af96] border border-[#5b6647] rounded-2xl overflow-hidden h-10 min-w-[150px] px-6">
       <a href="/bron">
         <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
          Online Check-In
        </span>
        <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
          Online Check-In
        </span>
       </a>
      </Button>

      <Button
        asChild
        className="group relative bg-[#5b6647] text-white hover:bg-[#6e7a5b] rounded-2xl overflow-hidden h-10 min-w-[120px] px-6"
      >
        <a
          href="https://www.book-secure.com/index.php?s=results&group=wrensgroup&property=hrisl24139&arrival=2025-08-07&departure=2025-08-08&adults1=1&children1=0&locale=en_GB&currency=EUR&stid=p8qjrsbq5&clusterName=wrensgroup&cluster=wrensgroup&Hotelnames=HREXCHTLOdisej&hname=HREXCHTLOdisej"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
            Book Now
          </span>
          <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
            Book Now
          </span>
        </a>
      </Button>
    </div>
      </div>
    </header>
  );
};

export default Navbar;
