import { Link } from "react-router-dom";

interface ViewAllButtonProps {
  pageName: string;
  link: string;
}

export const ViewAllButton = ({ pageName, link }: ViewAllButtonProps) => {
  return (
    <div className="flex justify-center m-8">
      <Link
        to={`/${link}`}
        className="inline-block px-6 py-2 text-base font-medium text-[#2e2e2e] bg-white rounded-full shadow-sm hover:shadow-md transition duration-200"
      >
        View All {pageName}
      </Link>
    </div>
  );
};
