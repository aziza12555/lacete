import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#323a23] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to={"/"} className="text-2xl font-semibold font-serif mb-4">
            {t("footer.hotelName")}
          </Link>
          <p className="text-sm text-gray-300">
            {t("footer.description")}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">{t("footer.quickLinks")}</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/rooms" className="hover:text-white">{t("footer.links.rooms")}</Link></li>
            <li><Link to="/dining" className="hover:text-white">{t("footer.links.dining")}</Link></li>
            <li><Link to="/wellness" className="hover:text-white">{t("footer.links.wellness")}</Link></li>
            <li><Link to="/contact" className="hover:text-white">{t("footer.links.contact")}</Link></li>
            <li><Link to="/discover" className="hover:text-white">{t("footer.links.discover")}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">{t("footer.contactTitle")}</h3>
          <p className="text-sm text-gray-300">
            {t("footer.address.line1")}<br />
            {t("footer.address.line2")}
          </p>
          <p className="text-sm text-gray-300 mt-2">{t("footer.phone")}: +998 99 999 9999</p>
          <p className="text-sm text-gray-300">{t("footer.email")}: hotel.jizzakh@gmail.uz</p>
        </div>

        <div className="flex gap-4 text-white">
          <div className="group relative">
            <Button variant="link" size="icon" className="w-10 h-10 flex text-white items-center justify-center" asChild>
              <Link to="https://facebook.com/odisejhotel" target="_blank">
                <>
                  <Facebook className="h-5 w-5 group-hover:hidden transition duration-200" />
                  <span className="hidden group-hover:block text-xs">hoteljizzakh</span>
                </>
              </Link>
            </Button>
          </div>

          <div className="group relative">
            <Button variant="link" size="icon" className="w-10 h-10 flex text-white items-center justify-center" asChild>
              <Link to="https://instagram.com/odisejhotel" target="_blank">
                <>
                  <Instagram className="h-5 w-5 group-hover:hidden transition duration-200" />
                  <span className="hidden group-hover:block text-xs">1hotelj1zzakh</span>
                </>
              </Link>
            </Button>
          </div>

          <div className="group relative">
            <Button variant="link" size="icon" className="w-10 h-10 flex text-white items-center justify-center" asChild>
              <Link to="https://twitter.com/odisejhotel" target="_blank">
                <>
                  <Twitter className="h-5 w-5 group-hover:hidden transition duration-200" />
                  <span className="hidden group-hover:block text-xs">hotel.jizzakhN1</span>
                </>
              </Link>
            </Button>
          </div>

          <div className="group relative">
            <Button variant="link" size="icon" className="w-10 h-10 text-white flex items-center justify-center" asChild>
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
        &copy; {new Date().getFullYear()} {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default Footer;
