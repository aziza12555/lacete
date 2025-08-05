import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom"; 

const Rooms = () => {
  return (
    <div className="bg-[#f5f5e8] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-serif text-center text-5xl sm:text-6xl text-[#323a23] mb-6 leading-tight">
          Sweeping view of the<br />Adriatic in your Room
        </h1>

        <div className="mb-12 max-w-xl">
          <p className="text-[#323a23] text-sm md:text-base leading-relaxed mb-4">
            Many rooms have balconies that beckon you to <br />
            breathe in the pure Mediterranean air of the island. <br />
            All rooms are air conditioned and feature an <br />
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

        {/* Image layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/213/ALH_Odisej_deluxe_seaview_balcony_double_01-scaled-800x0.jpg"
              alt="Room 1"
              className="rounded-2xl object-cover mt-30 shadow-md"
            />
          </div>

          <div className="flex flex-col gap-6">
            <img
              src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/215/ALH_Odisej_deluxe_seaview_balcony_double_02-scaled-800x0.jpg"
              alt="Room 2"
              className="rounded-2xl object-cover w-full h-full shadow-md"
            />
            <img
              src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/211/ALH_Odisej_Rosemary_suite_05-scaled-800x0.jpg"
              alt="Room 3"
              className="rounded-2xl object-cover h-[250px] w-[250px] shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
