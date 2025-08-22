import { useTranslation } from "react-i18next";

const Park = () => {
  const { t } = useTranslation();

  return (
    <div>
      <img
        className="w-full h-screen"
        src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/394/ALH-Odisej-Lakes-1920x0.jpg"
        alt={t("park.altImage")}
      />
      <div className="bg-[#184f68]">
        <div className="max-w-7xl mx-auto space-y-25 py-24">
          <h1 className="text-4xl font-serif text-center text-[#d5dacc]">
            {t("park.oakForestTitle")}
          </h1>
          <div className="grid grid-cols-3 gap-10">
            <div className="mt-80">
              <img
                className="rounded-2xl"
                src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/326/ALH_Hotel_Supetar_Cavtat_Pool26-800x0.jpg"
                alt={t("park.image1Alt")}
              />
            </div>
            <div className="h-full w-full">
              <img
                className="rounded-2xl"
                src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/324/ALH_Hotel_Supetar_Cavtat_Pool18-800x0.jpg"
                alt={t("park.image2Alt")}
              />
            </div>
            <div>
              <img
                className="rounded-2xl"
                src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/322/ALH_Hotel_Supetar_Cavtat_Pool17-800x0.jpg"
                alt={t("park.image3Alt")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Park;
