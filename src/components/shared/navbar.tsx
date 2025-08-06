import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 🟢 ADD THIS
import { Button } from "../ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); // 🟢 ADD THIS

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed px-6 py-4 top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Menu Icon */}
        <button
          onClick={() => navigate("/menu")} // 🟢 THIS LINE
          className="text-[#5b6647] hover:text-[#d2d8c4] transition"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Right: Buttons */}
        <div className="flex gap-4">
          <Button className="group relative bg-white text-[#5b6647] hover:bg-[#a6af96] border border-[#5b6647] rounded-2xl overflow-hidden h-10 min-w-[150px] px-6">
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
              Online Check-In
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              Online Check-In
            </span>
          </Button>

          <Button className="group relative bg-[#5b6647] text-white hover:bg-[#6e7a5b] rounded-2xl overflow-hidden h-10 min-w-[120px] px-6">
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
              Book Now
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              Book Now
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
