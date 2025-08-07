// src/components/pages/contact/KonsultatsiyaForm.tsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const KonsultatsiyaForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ma'lumotlarni localStorage ga saqlash
    const data = {
      name,
      phone,
      roomType,
    };
    localStorage.setItem('bookingData', JSON.stringify(data));

    // Yangi sahifaga o'tish
    navigate('/your-bron-room');
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Bron Room</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2">Your Name</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-2">Phone Number</label>
          <input
            type="tel"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-2">Room type</label>
          <select
            value={roomType}
            required
            onChange={(e) => setRoomType(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          >
            <option value="">Choose</option>
            <option value="Standard Room">Standard Room</option>
            <option value="Deluxe Room">Deluxe Room</option>
            <option value="Sea View Room">Sea View Room</option>
          </select>
        </div>
        <Button type="submit" className="bg-[#5b6647] hover:bg-[#6d7b53] rounded-xl">
          Bron qilish
        </Button>
      </form>
    </div>
  );
};

export default KonsultatsiyaForm;
