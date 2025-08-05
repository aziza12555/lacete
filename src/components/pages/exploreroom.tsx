import { useEffect, useState } from "react";

const Exploreroom = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = Math.min(0.8 + scrollY / 300, 1); // Zoom
  const heightPercent = Math.min(70 + scrollY / 5, 100); // Height: 70vh → 100vh
  const opacity = Math.max(1 - scrollY / 400, 0); // Fade out text

  return (
    <div className="bg-[#f5f5e8]">
      {/* Sarlavha */}
      <div className="sticky top-0 z-30 py-16 md:py-24 text-center bg-[#f5f5e8]">
        <h1
          className="text-[#323a23] font-serif font-medium text-4xl md:text-6xl leading-tight transition-all duration-500"
          style={{
            opacity: opacity,
            transform: `scale(${Math.max(1 - scrollY / 1000, 0.85)})`,
          }}
        >
          Sweeping view of the<br /> Adriatic in your Room
        </h1>
      </div>

      {/* Zoom + Height controlled image */}
      <div
        className="relative w-full overflow-hidden transition-all duration-700 ease-in-out"
        style={{ height: `${heightPercent}vh` }}
      >
        <img
          src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/213/ALH_Odisej_deluxe_seaview_balcony_double_01-scaled-2880x0.jpg"
          alt="Luxury Room"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out"
          style={{ transform: `scale(${scale})` }}
        />
      </div>

      {/* Scroll continuation */}
      <div className="h-[200vh] bg-[#f5f5e8]" />
    </div>
  );
};

export default Exploreroom;
