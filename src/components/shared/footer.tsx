import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#323a23] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
         <Link to={"/"}  className="text-2xl font-semibold font-serif mb-4"> 
         Hotel Jizzakh
         </Link>
          <p className="text-sm text-gray-300">
            Experience the beauty of the Adriatic with unmatched comfort and timeless elegance.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/rooms" className="hover:text-white">Rooms & Suits</Link></li>
            <li><Link to="/dining" className="hover:text-white">Dinning Options</Link></li>
            <li><Link to="/wellness" className="hover:text-white">Wellness</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/discover" className="hover:text-white">Discover MLJet</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300">
            Pomena 2, 20226 Goveđari <br /> Mljet, Croatia
          </p>
          <p className="text-sm text-gray-300 mt-2">Phone: +998 99 999 9999</p>
        <p className="text-sm text-gray-300">Email: hotel.jizzakh@gmail.uz</p>
        </div>

       <div className="flex gap-4 text-white">
      <div className="group relative">
        <Button
        variant="link"
          size="icon"
          className="w-10 h-10 flex  text-white items-center justify-center "
          asChild
        >
          <Link to="https://facebook.com/odisejhotel" target="_blank">
            <>
              <Facebook className="h-5 w-5 group-hover:hidden transition duration-200" />
              <span className="hidden group-hover:block text-xs">hoteljizzakh</span>
            </>
          </Link>
        </Button>
      </div>

      <div className="group relative">
        <Button
        variant="link"
          size="icon"
          className="w-10 h-10 flex  text-white items-center justify-center"
          asChild
        >
          <Link to="https://instagram.com/odisejhotel" target="_blank">
            <>
              <Instagram className="h-5 w-5 group-hover:hidden transition duration-200" />
              <span className="hidden group-hover:block text-xs">1hotelj1zzakh</span>
            </>
          </Link>
        </Button>
      </div>

      <div className="group relative">
        <Button
          variant="link"
          size="icon"
          className="w-10 h-10 flex  text-white items-center justify-center "
          asChild
        >
          <Link to="https://twitter.com/odisejhotel" target="_blank">
            <>
              <Twitter className="h-5 w-5 group-hover:hidden transition duration-200" />
              <span className="hidden group-hover:block text-xs">hotel.jizzakhN1</span>
            </>
          </Link>
        </Button>
      </div>

      <div className="group relative">
        <Button
          variant="link"
          size="icon"
          className="w-10 h-10 text-white flex items-center justify-center "
          asChild
        >
          <a href="mailto:info@odisejhotel.com">
            <>
              <Mail className="h-5 w-5 group-hover:hidden transition duration-200" />
              <span className="hidden group-hover:block text-[10px]">info@hoteljizzakh.com</span>
            </>
          </a>
        </Button>
      </div>
    </div>
        </div>

      <div className="mt-12 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Hotel Jizzakh. All rights reserved.
      </div>
      
    </footer>
  );
};

export default Footer;
