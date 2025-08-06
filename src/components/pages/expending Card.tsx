import { useState } from "react";
import { cn } from "@/lib/utils";
import { IoFastFood } from "react-icons/io5";
import { MdOutlineBedroomParent } from "react-icons/md";
import { PiSwimmingPoolDuotone } from "react-icons/pi";
import { MdDinnerDining } from "react-icons/md";
import { PiMountainsLight } from "react-icons/pi";

type CardOption = {
  icon: JSX.Element;
  main: string;
  sub: string;
  background: string;
};

const options: CardOption[] = [
  {
    icon: <IoFastFood />,
    main: "Fast Food",
    sub: "Quick and tasty snack options",
    background:
      "url(https://hotelodisej.com/wp-content/uploads/bf-advanced-images/213/ALH_Odisej_deluxe_seaview_balcony_double_01-scaled-2880x0.jpg)",
  },
  {
    icon: <MdOutlineBedroomParent />,
    main: "Accommodation",
    sub: "Cozy and comfortable hotel rooms",
    background:
      "url(https://hotelodisej.com/wp-content/uploads/bf-advanced-images/211/ALH_Odisej_Rosemary_suite_05-scaled-2880x0.jpg)",
  },
  {
    icon: <PiSwimmingPoolDuotone />,
    main: "Swimming Pool",
    sub: "Outdoor pool with a stunning view",
    background:
      "url(https://hotelodisej.com/wp-content/uploads/bf-advanced-images/230/ALH_Odisej_outsidepool_01-scaled-480x0.jpg)",
  },
  {
    icon: <MdDinnerDining />,
    main: "Restaurant",
    sub: "Elegant dining experience by the sea",
    background:
      "url(https://hotelodisej.com/wp-content/uploads/bf-advanced-images/381/alh1-800x0.jpg)",
  },
  {
    icon: <PiMountainsLight />,
    main: "Nature & Views",
    sub: "Breathtaking views of the sea and mountains",
    background:
      "url(https://hotelodisej.com/wp-content/uploads/bf-advanced-images/209/ALH_Odisej_exterior_aerial_07-scaled-2880x0.jpg)",
  },
];


export const ExpandingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex justify-center items-center text-white overflow-hidden relative">
      <a
        href="http://victorofvalencia-blog.tumblr.com"
        target="_blank"
        className="absolute bottom-5 left-5 text-white text-xs"
      >
        Photos from Victor of Valencia on tumblr
      </a>

      <div className="flex gap-2 w-[calc(100%-100px)] max-w-[900px] min-w-[600px] h-[400px]">
        {options.map((option, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "relative flex-shrink-0 rounded-[30px] transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)] cursor-pointer overflow-hidden",
                isActive
                  ? "flex-grow-[10000] max-w-[600px] rounded-[40px] m-0"
                  : "flex-grow min-w-[60px] m-2"
              )}
              style={{
                backgroundImage: option.background,
                backgroundSize: isActive ? "auto 100%" : "auto 120%",
                backgroundPosition: "center",
              }}
            >
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 h-[120px] transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)]",
                  isActive
                    ? "shadow-[inset_0_-120px_120px_-120px_black,inset_0_-120px_120px_-100px_black]"
                    : "shadow-[inset_0_-120px_0px_-120px_black,inset_0_-120px_0px_-100px_black] -bottom-10"
                )}
              />
              <div
                className={cn(
                  "absolute flex items-center h-10 right-0 transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)]",
                  isActive ? "bottom-5 left-5" : "bottom-2 left-2"
                )}
              >
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                  {option.icon}
                </div>
                <div className="flex flex-col justify-center ml-3 text-white whitespace-pre">
                  <div
                    className={cn(
                      "text-lg font-bold transition-all",
                      isActive
                        ? "opacity-100 left-0"
                        : "opacity-0 left-5 absolute"
                    )}
                  >
                    {option.main}
                  </div>
                  <div
                    className={cn(
                      "text-sm transition-all delay-100",
                      isActive
                        ? "opacity-100 left-0"
                        : "opacity-0 left-5 absolute"
                    )}
                  >
                    {option.sub}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
