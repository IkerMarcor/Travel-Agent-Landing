import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import PackagesPage from "./pages/PackagesPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import SingleBlogPage from "./pages/SingleBlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/:slug",
    element: <SingleBlogPage />,
  },
  {
    path: "/packages",
    element: <PackagesPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  }
]);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
);
