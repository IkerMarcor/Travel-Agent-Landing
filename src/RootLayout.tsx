import { Outlet } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useEffect } from "react";
import i18n from "./config/i18n";

const getUserCountryCode = async (): Promise<string | null> => {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    return data.country_code;
  } catch (error) {
    console.error("Failed to fetch user country", error);
    return null;
  }
};

const RootLayout = () => {

  useEffect(() => {
    const detectLanguage = async () => {
      const savedLang = localStorage.getItem("lang");
      if (savedLang) {
        i18n.changeLanguage(savedLang);
        return;
      }

      const countryCode = await getUserCountryCode();
      const langMap: Record<string, string> = {
        US: "en",
        MX: "es",
        ES: "es",
        // Add more mappings
      };

      const lang = langMap[countryCode || ""] || "en";
      i18n.changeLanguage(lang);
      localStorage.setItem("lang", lang);
    };

    detectLanguage();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default RootLayout;
