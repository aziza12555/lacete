const cards = [
  {
    title: "My Birthday",
    copy: "Celebrate your special day with unforgettable moments and joyful memories.",
    button: "View Trips",
    image:
      "https://www.pinterest.com/pin/44121271345529009/",
  },
  {
    title: "Movie Party",
    copy: "Grab your popcorn and get ready for an epic night of films and fun.",
    button: "View Trips",
    image:
      "https://i.pinimg.com/originals/fd/16/66/fd16660fa9f438c7d91f95d12f5e8c27.jpg",
  },
  {
    title: "Picnic",
    copy: "Enjoy the great outdoors with delicious food and relaxing vibes.",
    button: "Book Now",
    image:
      "https://i.pinimg.com/736x/1e/58/6a/1e586a8a4c2fdb64743991a7db044b01.jpg",
  },
  {
    title: "Ladies Party",
    copy: "Dance, laugh, and create memories with your favorite people tonight.",
    button: "Book Now",
    image:
      "https://i.pinimg.com/736x/15/21/8b/15218b928f49e41a758edb2069acc567.jpg",
  },
];

function Card({ title, copy, button, image }) {
  return (
    <div
      tabIndex={0}
      className="group relative flex flex-col justify-end overflow-hidden rounded-lg mt-20 text-white shadow-lg cursor-pointer
                 h-[350px] sm:h-auto sm:min-h-[350px]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
      />

      {/* Content */}
      <div className="relative z-10 p-6 text-center transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] transform translate-y-[calc(100%-4.5rem)] group-hover:translate-y-0 group-focus:translate-y-0">
        <h2 className="text-xl font-bold leading-tight">{title}</h2>

        {/* Description hidden initially, visible on hover/focus */}
        <p className="mt-4 font-serif italic text-lg leading-relaxed opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0">
          {copy}
        </p>

        {/* Button hidden initially, visible on hover/focus */}
        <button
          type="button"
          className="mt-6 px-6 py-3 text-xs font-bold tracking-wide uppercase bg-black bg-opacity-80 hover:bg-opacity-90 focus:outline-yellow-300 focus:outline focus:outline-offset-2 opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0"
        >
          {button}
        </button>
      </div>
    </div>
  );
}

export default function CardGrid() {
  return (
    <main className="max-w-7xl mx-auto p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 font-sans">
      {cards.map(({ title, copy, button, image }) => (
        <Card
          key={title}
          title={title}
          copy={copy}
          button={button}
          image={image}
        />
      ))}
    </main>
  );
}
