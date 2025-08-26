import { useState } from "react";
import DiningItem from "./dinningSction";
import { useTranslation } from "react-i18next";

const DiningList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const diningData = [
    {
      title: t("dining.vistaMare.title"),
      description: t("dining.vistaMare.description"),
      hoverImage:
        "https://hotelodisej.com/wp-content/uploads/bf-advanced-images/254/ALH_Vista_Mare_beach_bar_night_01-scaled-480x0.jpg",
    },
    {
      title: t("dining.levanat.title"),
      description: t("dining.levanat.description"),
      hoverImage:
        "https://hotelodisej.com/wp-content/uploads/bf-advanced-images/250/ALH_Tavern_Odisej_terrace_05-scaled-1920x0.jpg",
    },
    {
      title: t("dining.odisej.title"),
      description: t("dining.odisej.description"),
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
