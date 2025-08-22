import { useState } from "react";
import RoomSection from "./roomsSection";
import { useTranslation } from "react-i18next";

const RoomsList = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const diningData = [
    {
      title: t("roomsList.superiorRoomTitle"),
      description: t("roomsList.superiorRoomDescription"),
      hoverImage:
        "https://hotelodisej.com/wp-content/uploads/bf-advanced-images/532/Superior-room-1-480x0.jpeg",
    },
    {
      title: t("roomsList.deluxeRoomTitle"),
      description: t("roomsList.deluxeRoomDescription"),
      hoverImage:
        "https://hotelodisej.com/wp-content/uploads/bf-advanced-images/538/Deluxe-room-1-480x0.jpeg",
    },
    {
      title: t("roomsList.familyRoomTitle"),
      description: t("roomsList.familyRoomDescription"),
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
