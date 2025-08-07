import { ArrowRight } from "lucide-react";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import RoomsList from "./roomsList";

const Rooms = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = Math.min(0.3 + scrollY / 500, 1);
  const opacity = Math.max(1 - scrollY / 400, 0);
  const headingScale = Math.max(8 - scrollY / 1000, 0.85);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen bg-[#f5f5e8] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/213/ALH_Odisej_deluxe_seaview_balcony_double_01-scaled-1920x0.jpg"
            alt="Luxury Room"
            className="w-full h-full object-cover brightness-[.7] transition-transform duration-700 ease-in-out"
            style={{ transform: `scale(${scale})` }}
          />
        </div>

        {/* Centered Heading */}
        <div className="relative z-10 flex items-start justify-center text-center pt-40 px-4">
          <h1
            className="text-[#5b6647] drop-shadow-lg font-serif font-medium text-4xl md:text-6xl leading-tight transition-all duration-500"
          
          >
            Sweeping view of the
            <br />
            Adriatic in your Room
          </h1>
        </div>
      </section>

      {/* Description + Images */}
      <section className="bg-[#f5f5e8] py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {/* Description + Button */}
          <div className="max-w-xl">
            <p className="text-[#323a23] text-sm md:text-base leading-relaxed mb-6">
              Many rooms have balconies that beckon you to
              <br />
              breathe in the pure Mediterranean air of the island.
              <br />
              All rooms are air conditioned and feature an
              <br />
              elegant ensuite bathroom with shower.
            </p>

            <div className="flex items-center gap-3 text-xl font-medium text-[#323a23]">
              Explore Rooms
              <Link to="/exploreroom">
                <Button className="w-10 h-10 p-0 bg-[#323a23] rounded-full hover:scale-110 transition">
                  <ArrowRight className="text-white" />
                </Button>
              </Link>
            </div>
          </div>
       

          {/* Room Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/213/ALH_Odisej_deluxe_seaview_balcony_double_01-scaled-800x0.jpg"
                alt="Room 1"
                className="rounded-2xl object-cover shadow-md w-full mt-30 h-110"
              />
            </div>

            <div className="flex flex-col gap-6">
              <img
                src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/215/ALH_Odisej_deluxe_seaview_balcony_double_02-scaled-800x0.jpg"
                alt="Room 2"
                className="rounded-2xl object-cover h-100 shadow-md"
              />
              <img
                src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/211/ALH_Odisej_Rosemary_suite_05-scaled-800x0.jpg"
                alt="Room 3"
                className="rounded-2xl object-cover h-[300px] w-[300px] shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Room List Component */}
      <RoomsList />
    </>
  );
};

export default Rooms;
