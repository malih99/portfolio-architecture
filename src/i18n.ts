import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      navHome: "Home",
      navPortfolio: "Portfolio",
      navContact: "Contact",
      homeTitle: "Designing Innovative Spaces",
      homeSubtitle:
        "We combine architecture, interior design, and technology to craft functional, beautiful environments.",
      featuredProjects: "Featured Projects",
      featuredSubtitle:
        "A look at some of our recent work across residential and commercial spaces.",
      viewPortfolio: "View Portfolio",
      viewAllProjects: "View All Projects",
      contactUs: "Contact Us",
      getInTouch: "Get In Touch",
      contactEyebrow: "Contact",
      contactSubtitle:
        "Tell us about your project. We’ll reply within 1–2 business days.",
      contactNote:
        "By sending this form you agree to be contacted about your inquiry.",
      name: "Name",
      yourName: "Your name",
      email: "Email",
      yourEmail: "Your email address",
      message: "Message",
      yourMessage: "Your message",
      sendMessage: "Send Message",
      sending: "Sending…",
      contactSuccess: "Thanks! Your message was sent.",
      contactFail: "Something went wrong. Please try again.",
      portfolioEyebrow: "Our Work",
      portfolioTitle: "Portfolio",
      portfolioSubtitle:
        "A curated selection of our recent architecture and interior design projects.",
      readMore: "Read more",
      backToPortfolio: "Back to portfolio",
      themeLight: "Light",
      themeDark: "Dark",
      language: "Language",
    },
  },
  fa: {
    translation: {
      navHome: "خانه",
      navPortfolio: "نمونه‌کارها",
      navContact: "تماس با ما",
      homeTitle: "طراحی فضاهای نوآورانه",
      homeSubtitle:
        "ترکیبی از معماری، دکوراسیون داخلی و فناوری برای خلق فضاهایی کاربردی و زیبا.",
      featuredProjects: "پروژه‌های منتخب",
      featuredSubtitle:
        "نگاهی به برخی از کارهای اخیر ما در فضاهای مسکونی و تجاری.",
      featuredProjects: "پروژه‌های شاخص",
      featuredSubtitle:
        "مروری بر برخی از کارهای اخیر ما در حوزه‌های مسکونی و تجاری.",
      viewPortfolio: "مشاهده نمونه‌کارها",
      viewAllProjects: "مشاهده همه پروژه‌ها",
      contactUs: "تماس با ما",
      getInTouch: "ارتباط با ما",
      contactEyebrow: "تماس",
      contactSubtitle:
        "دربارهٔ پروژه‌تان بگویید؛ ظرف ۱ تا ۲ روز کاری پاسخ می‌دهیم.",
      contactNote:
        "با ارسال این فرم، با تماس در مورد درخواست خود موافقت می‌کنید.",
      name: "نام",
      yourName: "نام شما",
      email: "ایمیل",
      yourEmail: "نشانی ایمیل شما",
      message: "پیام",
      yourMessage: "متن پیام",
      sendMessage: "ارسال پیام",
      sending: "در حال ارسال…",
      contactSuccess: "متشکریم! پیام شما ارسال شد.",
      contactFail: "خطایی رخ داد. لطفاً دوباره تلاش کنید.",
      portfolioEyebrow: "نمونه‌کارها",
      portfolioTitle: "پورتفولیو",
      portfolioSubtitle: "گلچینی از پروژه‌های اخیر معماری و طراحی داخلی ما.",
      readMore: "بیشتر بخوانید",
      backToPortfolio: "بازگشت به نمونه‌کارها",
      themeLight: "روشن",
      themeDark: "تاریک",
      language: "زبان",
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
    detection: {
      order: ["querystring", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
