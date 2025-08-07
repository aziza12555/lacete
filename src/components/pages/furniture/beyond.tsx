import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Beyond = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 space-y-20">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-serif text-[#094418]">
            Beyond the hotel
          </h1>
          <p className="text-sm text-[#043811] leading-relaxed">
            Discover the history and uniqueness of Mljet,<br />
            which goes all the way back to ancient Greece.
          </p>
        </div>

        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              className="rounded-2xl shadow-md w-full h-auto object-cover"
              src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/399/ALH_Hotel_Supetar_Cavtat_Pool9-800x0.jpg"
              alt="Bead Exhibition"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-[#37423b]">
              A Bead in My Palm
            </h2>
            <p className="text-gray-700 leading-relaxed">
              An exhibition of traditional Croatian <br />
              beaded jewellery and jewellery making <br />
              workshop on the island of Mljet
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.adriaticluxuryhotels.com/blog/a-bead-in-my-palm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5b6647] hover:underline font-medium"
              >
                Read More
              </a>
              <Button
                asChild
                className="bg-[#5b6647] hover:bg-[#6d7b53] h-5 rounded-2xl p-2"
              >
                <a
                  href="https://www.adriaticluxuryhotels.com/blog/a-bead-in-my-palm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Left */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-[#37423b]">
             The Island of<br/> Ulysses
            </h2>
            <p className="text-gray-700 leading-relaxed">
           Have you heard about Ulysses, the great<br/>
            mythical Greek hero and king of Ithaca?<br/>
            According to legends, Odysseus was <br/>
            shipwrecked on the island of Mljet and<br/>
             lured by the nymph Calypso into a cave<br/>
             where he became her hostage.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.adriaticluxuryhotels.com/blog/the-island-of-ulysses/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5b6647] hover:underline font-medium"
              >
                Read More
              </a>
              <Button
                asChild
                className="bg-[#5b6647] hover:bg-[#6d7b53] h-5 rounded-2xl p-2"
              >
                <a
                  href="https://www.adriaticluxuryhotels.com/blog/the-island-of-ulysses/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </div>

          {/* Image Right */}
          <div>
            <img
              className="rounded-2xl shadow-md w-full h-auto object-cover"
              src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/397/ALH_Hotel_Supetar_Cavtat_Pool10-800x0.jpg"
              alt="Bead Workshop"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beyond;
