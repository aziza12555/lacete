import { useEffect, useState } from "react";

const Wellness = () => {
  const [scrollY, setScrollY] = useState(0);

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
            alt="Luxury Room"
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
  Wellness Treatments<br/>for Mind and Body
  </h1>
</div>

      </div>


   <div className="w-full bg-[#03364f] text-white">
  <div className="max-w-7xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Chapdagi rasm */}
    <div>
      <img
        src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/716/ALH_Odisej_exterior_detail_02-scaled-800x0.jpg"
        alt="Exterior Detail"
        className="w-200 h-auto mb-120 rounded-lg object-cover"
      />
    </div>

    {/* O'ngdagi content */}
    <div className="flex flex-col gap-6">
      <p className="leading-relaxed">
        Massage, sauna sessions, beauty treatments such as pedicures and
        manicures, a fitness room with cardio and strength equipment, an
        outdoor children's pool filled with sea water or a sun terrace to relax
        on.
      </p>
      <p className="leading-relaxed">
        Energy Clinic is an exclusive international center for the well-being
        of body, mind and inner self, focusing on revitalization and
        restoration of energy and the feeling of complete relaxation, balance
        and enjoyment.
      </p>

      <div className="space-y-10 gap-4">
        <img
          src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/718/ALH_Odisej_outsidepool_02-scaled-800x0.jpg"
          alt="Outside Pool"
          className="w-600 rounded-lg object-cover"
        />
        <img
          src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/720/ALH_Odisej_beach_01-scaled-800x0.jpg"
          alt="Beach"
          className="w-90 h-60 rounded-lg object-cover"
        />
      </div>
   <div className="flex flex-col mt-100 gap-6 text-[#f1f1f1]">
  <p className=" text-2xl font-serif">
    Energy Clinic restores and relaxes your physical and inner self through a unique fusion of contemporary Western and Traditional Chinese Medicine.
  </p>

  <p className="leading-relaxed text-base">
    With that in mind, we offer various unique treatments and manufacture our own premium line of homegrown organic cosmetic products. We also use and re-sell high-end health and beauty brands such as <span className="font-medium">Sisley</span>, <span className="font-medium">Babor</span>, <span className="font-medium">Decleor</span>, <span className="font-medium">Thalgo</span> and others.
  </p>

  <p className="leading-relaxed text-base">
    Our holistic approach to health and well-being even includes education – we run a successful wellness academy, providing extensive theoretical and practical know-how for a whole generation of tomorrow’s wellness, beauty, and health specialists.academy, providing extensive theoretical and practical know-how for a whole generation of tomorrow’s wellness, beauty and health specialists. Today, Energy Clinic offers a
  </p>

  
</div>

    </div>
  </div>
</div>

    </>
  );
};

export default Wellness;
