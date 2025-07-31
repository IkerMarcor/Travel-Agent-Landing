import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-4xl font-bold">404 - Not Found</h1>
      <p className="mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <NavLink
        to="/"
        className="my-8 bg-blue-500 text-white px-4 py-2 rounded-lg inline-block text-center hover:bg-blue-400 transition-colors"
      >
        Go to Home
      </NavLink>
    </div>
  );
};
export default NotFoundPage;
