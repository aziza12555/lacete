import { useEffect, useState } from "react";
import DiningList from "./dinningList";
import { useTranslation } from "react-i18next";

const Dinning = () => {
  const [scrollY, setScrollY] = useState(0);
  const {t} = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = Math.min(0.3 + scrollY / 500, 1);
  const opacity = Math.max(1 - scrollY / 400, 0);

  return (
    <>

      <div className="relative h-screen bg-[#f5f5e8] overflow-hidden">

        <div className="absolute inset-0 z-0">
          <img
            src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/250/ALH_Tavern_Odisej_terrace_05-scaled-1920x0.jpg"
            alt="Luxury Room"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out brightness-[.7]"
            style={{ transform: `scale(${scale})` }}
          />
        </div>

<div className="relative z-10 h-full flex items-start justify-center text-center px-4 pt-24">
  <h1
    className="text-[#5b6647] drop-shadow-lg font-serif font-medium text-4xl md:text-6xl leading-tight transition-all duration-500"
    style={{
      opacity: opacity,
      transform: `scale(${Math.max(1 - scrollY / 1000, 0.85)})`,
    }}
  >
    {t("dining.heroTitleLine1")}<br />
    {t("dining.heroTitleLine2")}
  </h1>
</div>

      </div>


      <div className="bg-[#f5f5e8] py-20">
      </div>
      <DiningList/>
    </>
  );
};

export default Dinning;
