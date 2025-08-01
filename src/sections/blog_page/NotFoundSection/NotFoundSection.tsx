import { NavLink } from "react-router-dom";

export const NotFoundSection = (): JSX.Element => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full h-full p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-lg">
          The blog post you are looking for does not exist.
        </p>
        <NavLink
          to="/blog"
          className="my-8 bg-blue-500 text-white px-4 py-2 rounded-lg inline-block text-center hover:bg-blue-400 transition-colors"
        >
          Go Back
        </NavLink>
      </div>
    </section>
  );
};
