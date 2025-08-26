import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const roomPrices: Record<string, number> = {
  "Standard Room": 90,
  "Deluxe Room": 120,
  "Sea View Room": 150,
  // agar kerak bo'lsa:
  // "Econom Room": 90,
  // "Business Room": 120,
};

const KonsultatsiyaForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name,
      phone,
      roomType,
      price: roomPrices[roomType] || 0,
    };
    localStorage.setItem('bookingData', JSON.stringify(data));
    navigate('/your-bron-room');
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">{t("form.title")}</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2">{t("form.nameLabel")}</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-2">{t("form.phoneLabel")}</label>
          <input
            type="tel"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-2">{t("form.roomTypeLabel")}</label>
          <select
            value={roomType}
            required
            onChange={(e) => setRoomType(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          >
            <option value="">{t("form.chooseOption")}</option>
            <option value="Standard Room">{t("form.roomTypes.standard")}</option>
            <option value="Deluxe Room">{t("form.roomTypes.deluxe")}</option>
            <option value="Sea View Room">{t("form.roomTypes.seaview")}</option>
          </select>
        </div>

        {/* Xona narxi chiqariladi */}
        {roomType && (
          <p className="mt-2 text-lg font-semibold text-[#5b6647]">
            {t("form.priceLabel")}: ${roomPrices[roomType]}
          </p>
        )}

        <Button type="submit" className="bg-[#5b6647] hover:bg-[#6d7b53] rounded-xl">
          {t("form.submit")}
        </Button>
      </form>
    </div>
  );
};

export default KonsultatsiyaForm;
