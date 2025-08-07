// src/components/pages/contact/YourBronRoom.tsx

import { useEffect, useState } from 'react';

const YourBronRoom = () => {
  const [bookingData, setBookingData] = useState<{
    name: string;
    phone: string;
    roomType: string;
  } | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('bookingData');
    if (data) {
      setBookingData(JSON.parse(data));
    }
  }, []);

  if (!bookingData) {
    return <p className="text-center py-10">Hech qanday ma'lumot topilmadi.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Sizning xonangiz</h1>
      <div className="space-y-4 bg-white p-6 rounded-xl shadow-md">
        <p><strong>Ism:</strong> {bookingData.name}</p>
        <p><strong>Telefon:</strong> {bookingData.phone}</p>
        <p><strong>Xona turi:</strong> {bookingData.roomType}</p>
        <img
          src={
            bookingData.roomType === 'Sea View Room'
              ? 'https://hotelodisej.com/wp-content/uploads/bf-advanced-images/254/ALH_Vista_Mare_beach_bar_night_01-scaled-480x0.jpg'
              : bookingData.roomType === 'Deluxe Room'
              ? 'https://hotelodisej.com/wp-content/uploads/bf-advanced-images/256/ALH_Restaurant-Odisej_terrace_03-scaled-480x0.jpg'
              : 'https://hotelodisej.com/wp-content/uploads/bf-advanced-images/258/ALH_Hotel_Odisej_exterior_03-scaled-480x0.jpg'
          }
          alt="Xona rasmi"
          className="w-full h-auto rounded-lg mt-4"
        />
      </div>
    </div>
  );
};

export default YourBronRoom;
