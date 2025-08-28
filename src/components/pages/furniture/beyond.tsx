import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Beyond = () => {
  const { t } = useTranslation();

  // Link va rasm ma'lumotlarini strukturaviy tarzda ajratish
  const sections = [
    {
      titleKey: "beyond.section1.title",
      descriptionKey: "beyond.section1.description",
      image:
        "https://hotelodisej.com/wp-content/uploads/bf-advanced-images/399/ALH_Hotel_Supetar_Cavtat_Pool9-800x0.jpg",
      link: "https://www.adriaticluxuryhotels.com/blog/a-bead-in-my-palm/"
    },
    {
      titleKey: "beyond.section2.title",
      descriptionKey: "beyond.section2.description",
      image:
        "https://hotelodisej.com/wp-content/uploads/bf-advanced-images/397/ALH_Hotel_Supetar_Cavtat_Pool10-800x0.jpg",
      link: "https://www.adriaticluxuryhotels.com/blog/the-island-of-ulysses/"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 space-y-20">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-serif text-[#094418]">
            {t("beyond.title")}
          </h1>
          <p className="text-sm text-[#043811] leading-relaxed whitespace-pre-line">
            {t("beyond.subtitle")}
          </p>
        </div>

        {/* Sections */}
        {sections.map((section, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              {/* Image */}
              {isImageLeft && (
                <div>
                  <img
                    className="rounded-2xl shadow-md w-full h-auto object-cover"
                    src={section.image}
                    alt={t(section.titleKey)}
                  />
                </div>
              )}

              {/* Text */}
              <div className="space-y-6">
                <h2 className="text-2xl font-serif text-[#37423b]">
                  {t(section.titleKey)}
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {t(section.descriptionKey)}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href={section.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5b6647] hover:underline font-medium"
                  >
                    {t("beyond.readMore")}
                  </a>
                  <Button
                    asChild
                    className="bg-[#5b6647] hover:bg-[#6d7b53] h-5 rounded-2xl p-2"
                  >
                    <a
                      href={section.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowRight />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Image (if right side) */}
              {!isImageLeft && (
                <div>
                  <img
                    className="rounded-2xl shadow-md w-full h-auto object-cover"
                    src={section.image}
                    alt={t(section.titleKey)}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Beyond;
