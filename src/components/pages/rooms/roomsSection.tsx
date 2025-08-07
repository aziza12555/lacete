import { cn } from "@/lib/utils";

interface DiningItemProps {
  index: number;
  title: string;
  description: string;
  hoverImage: string;
  isActive: boolean;
}

const RoomSection = ({
  index,
  title,
  description,
  hoverImage,
  isActive,
}: DiningItemProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col md:flex-row max-w-7xl  mx-auto overflow-hidden transition-all duration-300 cursor-pointer items-stretch", // items-stretch qo'shildi
        isActive ? "bg-[#5b6647] text-white" : " text-[#1f1f1f]"
      )}
      style={{ minHeight: "200px" }} // konteynerning minimal balandligi
    >
      {/* Matn qismi */}
      <div
        className={cn(
          "relative z-10 p-6 md:p-12 flex flex-col justify-center transition-all duration-500 ease-in-out",
          isActive ? "md:w-2/3" : "md:w-full",
          "h-full" // balandlikni to'liq egallashi uchun
        )}
      >
        <h3 className="text-3xl font-serif mb-3">{title}</h3>
        <p className={cn("text-base max-w-lg", isActive ? "text-white" : "text-[#555]")}>
          {description}
        </p>
      </div>

      {/* Rasm qismi */}
      <div
        className={cn(
          "md:relative md:w-1/3 transition-opacity duration-700 ease-in-out",
          isActive ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        style={{ minHeight: 0 }} // rasm konteyneri balandligi bilan moslashishi uchun
      >
        <img
          src={hoverImage}
          alt={title}
          className="w-full object-cover"
          style={{ minHeight: "200px" }} // rasm balandligini minimal qilib qo'ydim
        />
      </div>

      {/* Index raqam */}
      <div
        className={cn(
          "absolute bottom-6 right-6 text-sm font-bold rounded-full px-4 py-1 select-none",
          isActive ? "bg-white text-[#5b6647]" : "bg-[#5b6647] text-white"
        )}
      >
        {String(index).padStart(2, "0")}
      </div>
    </div>
  );
};

export default RoomSection;
