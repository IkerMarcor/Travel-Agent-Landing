import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-4xl font-bold">{t("page.not-found.title")}</h1>
      <p className="mt-4">
        {t("page.not-found.description")}
      </p>
      
      <NavLink
        to="/"
        className="my-8 bg-blue-500 text-white px-4 py-2 rounded-lg inline-block text-center hover:bg-blue-400 transition-colors"
      >
        {t("page.not-found.button")}
      </NavLink>
    </div>
  );
};
export default NotFoundPage;
