import { useState } from "react";
import RoomSection from "./roomsSection";

const RoomsList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const diningData = [
    {
      title: "Superior Room ",
      description:
        "Enjoy a sublime stretch of gently shaded waterfront next to Pomena pier, where all the yachts and ships dock.",
      hoverImage:
        "https://hotelodisej.com/wp-content/uploads/bf-advanced-images/532/Superior-room-1-480x0.jpeg",
    },
    {
      title: "Deluxe Room",
      description:
        "Overlooking the neatly lined boats at the very pretty Pomena marina, Levanat Pizzeria has enchanting views over the crystal-clear Adriatic.",
      hoverImage:
        "https://hotelodisej.com/wp-content/uploads/bf-advanced-images/538/Deluxe-room-1-480x0.jpeg",
    },
    {
      title: "Family Room",
      description:
        "The picture perfect panorama of Pomena Bay from the terrace draws a steady crowd to Restaurant Odisej.",
      hoverImage:
        "https://hotelodisej.com/wp-content/uploads/bf-advanced-images/542/Family-room-1-480x0.jpeg",
    },
  ];

  return (
    <div className="flex flex-col divide-y divide-[#e8e8d8]">
      {diningData.map((item, idx) => (
        <div
          key={idx}
          onMouseEnter={() => setActiveIndex(idx)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <RoomSection
            index={idx + 1}
            title={item.title}
            description={item.description}
            hoverImage={item.hoverImage}
            isActive={activeIndex === idx}
          />
        </div>
      ))}
    </div>
  );
};

export default RoomsList;
