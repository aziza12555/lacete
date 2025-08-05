import { useEffect, useRef, useState } from "react";

const text = `Set within the verdant pine and oak tree forest of Mljet National Park,
Hotel Odisej Mljet is just two hours by passenger or car ferry from Dubrovnik.`;

const About = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.8 && rect.bottom > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = text.split(" ");

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex items-center justify-center px-4 py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/4e/7d/ae/4e7dae3b586890dc2a01777b4d2d4e8f.jpg')",
      }}
    >
      <div className=" rounded-xl p-8 max-w-4xl text-center flex flex-wrap gap-x-3 gap-y-5 justify-center text-3xl md:text-5xl font-medium leading-relaxed text-white">
        {words.map((word, i) => (
          <span
            key={i}
            className={`inline-block transform transition-all duration-700 ease-out ${
              visible
                ? "opacity-100 translate-y-0 text-green-200"
                : "opacity-0 translate-y-6 text-[#5b6647]"
            }`}
            style={{
              transitionDelay: `${i * 100}ms`,
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  );
};

export default About;
