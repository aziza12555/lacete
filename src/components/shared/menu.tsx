import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const menuItems = [
  { key: "menu.rooms", path: "/rooms" },
  { key: "menu.dining", path: "/dining" },
  { key: "menu.wellness", path: "/wellness" },
  { key: "menu.contact", path: "/contact" },
  { key: "menu.discover", path: "/discover" },
  { key: "menu.jewelery", path: "/beyond" },
  { key: "menu.park", path: "/park" },
];

export const HotelMenu: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-[999] bg-[#f6f6ea] w-full flex items-center justify-center">
      <div className="max-w-7xl h-screen grid grid-cols-4 grid-rows-2">
        <div className="col-span-1 row-span-2 flex flex-col justify-start  p-8">
          <button
            className="text-3xl mr-100 font-serif text-green-900 hover:opacity-70 mb-4"
            onClick={() => navigate(-1)}
          >
            {t("close")}
          </button>
          <Link to={'/'} className="text-4xl font-serif text-green-900 leading-tight">
            {t("hotelName")}
          </Link>
          <p className="text-sm font-serif text-green-900 tracking-widest">
            {t("region")}
          </p>
        </div>

        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="relative group border border-green-700 w-80 h-80 hover:bg-[#424b33] hover:text-white transition-colors duration-300 flex items-center justify-center text-green-900 font-serif text-2xl cursor-pointer"
          >
            {t(item.key)}
            <span className="absolute top-4 right-4 w-5 text-lg text-green-950 opacity-0 group-hover:opacity-100 group-hover:text-white transform transition-all duration-700 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1">
              →
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
