// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../components/locales/en.json";
import ru from "../components/locales/ru.json";
import tr from "../components/locales/tr.json";
import uz from "../components/locales/uz.json";
import zh from "../components/locales/zh.json";


i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    uz: { translation: uz },
    ru: { translation: ru },
    tr: { translation: tr },
    zh: { translation: zh },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
