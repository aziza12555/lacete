import { useState } from "react";
import DiningItem from "./dinningSction";

const DiningList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const diningData = [
    {
      title: "Vista Mare Beach Bar",
      description:
        "Enjoy a sublime stretch of gently shaded waterfront next to Pomena pier, where all the yachts and ships dock.",
      hoverImage:
        "https://hotelodisej.com/wp-content/uploads/bf-advanced-images/254/ALH_Vista_Mare_beach_bar_night_01-scaled-480x0.jpg",
    },
    {
      title: "Levanat Pizzeria",
      description:
        "Overlooking the neatly lined boats at the very pretty Pomena marina, Levanat Pizzeria has enchanting views over the crystal-clear Adriatic.",
      hoverImage:
        "https://hotelodisej.com/wp-content/uploads/bf-advanced-images/250/ALH_Tavern_Odisej_terrace_05-scaled-1920x0.jpg",
    },
    {
      title: "Restaurant Odisej",
      description:
        "The picture perfect panorama of Pomena Bay from the terrace draws a steady crowd to Restaurant Odisej.",
      hoverImage:
        "https://hotelodisej.com/wp-content/uploads/bf-advanced-images/226/ALH_Tavern_Odisej_terrace_01-scaled-480x0.jpg",
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
          <DiningItem
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

export default DiningList;
