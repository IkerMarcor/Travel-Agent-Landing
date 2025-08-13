import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ViewAllButtonProps {
  link: string;
}

export const ViewAllButton = ({ link }: ViewAllButtonProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center m-8">
      <Link
        to={`/${link}`}
        className="inline-block px-6 py-2 text-base font-medium text-[#2e2e2e] bg-white rounded-full shadow-sm hover:shadow-md transition duration-200"
      >
        {t("common.button.view-all")}
      </Link>
    </div>
  );
};
