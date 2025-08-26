import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Wellness = () => {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = Math.min(0.3 + scrollY / 500, 1);
  const opacity = Math.max(1 - scrollY / 400, 0);

  return (
    <>
      <div className="relative h-screen bg-[#03364f] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/230/ALH_Odisej_outsidepool_01-scaled-1920x0.jpg"
            alt={t("wellness.heroImageAlt")}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out brightness-[.7]"
            style={{ transform: `scale(${scale})` }}
          />
        </div>

        <div className="relative z-10 h-full flex items-start justify-center text-center px-4 pt-24">
          <h1
            className="text-[#e3e3c4] drop-shadow-lg font-serif font-medium text-4xl md:text-6xl leading-tight transition-all duration-500"
            style={{
              opacity: opacity,
              transform: `scale(${Math.max(1 - scrollY / 1000, 0.85)})`,
            }}
          >
            {t("wellness.heroTitleLine1")}<br />{t("wellness.heroTitleLine2")}
          </h1>
        </div>
      </div>

      <div className="w-full bg-[#03364f] text-white">
        <div className="max-w-7xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/716/ALH_Odisej_exterior_detail_02-scaled-800x0.jpg"
              alt={t("wellness.image1Alt")}
              className="w-200 h-auto mb-120 rounded-lg object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <p className="leading-relaxed">{t("wellness.text1")}</p>
            <p className="leading-relaxed">{t("wellness.text2")}</p>

            <div className="space-y-10 gap-4">
              <img
                src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/718/ALH_Odisej_outsidepool_02-scaled-800x0.jpg"
                alt={t("wellness.image2Alt")}
                className="w-600 rounded-lg object-cover"
              />
              <img
                src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/720/ALH_Odisej_beach_01-scaled-800x0.jpg"
                alt={t("wellness.image3Alt")}
                className="w-90 h-60 rounded-lg object-cover"
              />
            </div>

            <div className="flex flex-col mt-100 gap-6 text-[#f1f1f1]">
              <p className="text-2xl font-serif">{t("wellness.text3")}</p>
              <p className="leading-relaxed text-base">{t("wellness.text4")}</p>
              <p className="leading-relaxed text-base">{t("wellness.text5")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wellness;
