import { useTranslation } from "react-i18next";

const cards = [
  {
    id: "myBirthday",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzBxl6_yKNRV1-Z4LEoxTYMHFk94PsPFlqFg&s",
  },
  {
    id: "movieParty",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4ViXEgQjig-bhn5rx6-txIZfIhZuDk2VQA&s",
  },
  {
    id: "picnic",
    image:
      "https://i.pinimg.com/736x/1e/58/6a/1e586a8a4c2fdb64743991a7db044b01.jpg",
  },
  {
    id: "ladiesParty",
    image:
      "https://i.pinimg.com/736x/15/21/8b/15218b928f49e41a758edb2069acc567.jpg",
  },
];

type CardProps = {
  title: string;
  copy: string;
  button: string;
  image: string;
};

function Card({ title, copy, button, image }: CardProps) {

  return (
    <div
      tabIndex={0}
      className="group relative flex flex-col justify-end overflow-hidden rounded-lg mt-20 text-white shadow-lg cursor-pointer h-[350px] sm:h-auto sm:min-h-[500px]"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
      />

      <div className="relative z-10 p-6 text-center transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] transform translate-y-[calc(100%-4.5rem)] group-hover:translate-y-0 group-focus:translate-y-0">
        <h2 className="text-xl font-bold leading-tight">{title}</h2>
        <p className="mt-4 font-serif italic text-lg leading-relaxed opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0">
          {copy}
        </p>
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
  const { t } = useTranslation();

  return (
    <main className="max-w-7xl mx-auto p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 font-sans">
      {cards.map(({ id, image }) => (
        <Card
          key={id}
          title={t(`cards.${id}.title`)}
          copy={t(`cards.${id}.copy`)}
          button={t(`cards.${id}.button`)}
          image={image}
        />
      ))}
    </main>
  );
}
