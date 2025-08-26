import { useTranslation } from "react-i18next";

const Park = () => {
  const { t } = useTranslation();

  return (
    <div>
      <img
        className="w-full h-screen object-cover"
        src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/394/ALH-Odisej-Lakes-1920x0.jpg"
        alt={t("park.altImage")}
      />
      <div className="bg-[#184f68]">
        <div className="max-w-7xl mx-auto space-y-12 py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-serif text-center text-[#d5dacc] mb-10">
            {t("park.oakForestTitle")}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="mt-20 sm:mt-0">
              <img
                className="rounded-2xl w-full object-cover"
                src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/326/ALH_Hotel_Supetar_Cavtat_Pool26-800x0.jpg"
                alt={t("park.image1Alt")}
              />
            </div>
            <div className="w-full h-full">
              <img
                className="rounded-2xl w-full object-cover"
                src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/324/ALH_Hotel_Supetar_Cavtat_Pool18-800x0.jpg"
                alt={t("park.image2Alt")}
              />
            </div>
            <div>
              <img
                className="rounded-2xl w-full object-cover"
                src="https://static.toiimg.com/photo/imgsize-161580,msid-96352420/96352420.jpg"
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
