import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      homeTitle: "Designing Innovative Spaces",
      featuredProjects: "Featured Projects",
      viewPortfolio: "View Portfolio",
      contactUs: "Contact Us",
      getInTouch: "Get In Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      sendMessage: "Send Message",
    },
  },
  fa: {
    translation: {
      homeTitle: "طراحی فضاهای نوآورانه",
      featuredProjects: "پروژه‌های برجسته",
      viewPortfolio: "مشاهده پورتفولیو",
      contactUs: "تماس با ما",
      getInTouch: "در تماس باشید",
      name: "نام",
      email: "ایمیل",
      message: "پیام",
      sendMessage: "ارسال پیام",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
