import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <main className="py-16 px-4 md:px-20 bg-[#f6f4e8] min-h-screen font-serif">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-[#5b6647] text-4xl md:text-5xl text-center leading-tight mb-16">
          {t("contact.titleLine1")}<br />
          {t("contact.titleLine2")}
        </h1>

        {/* Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-150 border border-[#c7c7af] rounded-xl overflow-hidden">
          {/* Address */}
          <div className="p-6 md:p-10 border-r border-[#c7c7af]">
            <h2 className="text-[#5b6647] text-center text-4xl mb-4">
              {t("contact.addressTitle")}
            </h2>
            <img
              className="rounded-4xl"
              src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/213/ALH_Odisej_deluxe_seaview_balcony_double_01-scaled-2880x0.jpg"
              alt=""
            />
            <p className="text-[#5b6647] text-base">{t("contact.addressLine1")}</p>
            <p className="text-[#5b6647] text-base">{t("contact.addressLine2")}</p>
          </div>

          {/* Contact */}
          <div className="p-6 md:p-10 flex flex-col justify-between h-full border rounded-md">
            <div>
              <h2 className="text-[#5b6647] text-4xl text-center mb-4">
                {t("contact.contactTitle")}
              </h2>
              <img
                className="rounded-4xl w-150 h-90 object-cover mb-4"
                src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/326/ALH_Hotel_Supetar_Cavtat_Pool26-800x0.jpg"
                alt="Hotel Pool"
              />
              <p className="text-[#5b6647] text-base">{t("contact.phone")}</p>
              <p className="text-[#5b6647] text-base mb-6">{t("contact.email")}</p>
            </div>

            <div className="flex justify-end">
              <Button
                onClick={() => navigate("/bron")}
                className="bg-[#808873] hover:bg-[#1d2414] text-white font-serif text-lg px-6 py-3 rounded-xl shadow-md transition duration-300"
              >
                {t("contact.button")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
