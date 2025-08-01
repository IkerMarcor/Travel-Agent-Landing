import { PageCasing } from "@/components/PageCasing";
import { NotFoundSection } from "@/sections/blog_page/NotFoundSection";
import { useLocation } from "react-router-dom";

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const SingleBlogPage = (): JSX.Element => {
  const location = useLocation();
  const params = location.state as BlogPost || undefined;
  if (params === undefined) {
    // Fallback if no state is provided, could redirect or show an error
    return (
      <PageCasing>
        <NotFoundSection />
      </PageCasing>
    );
  }

  return (
    <PageCasing>
      <section>
        <div className="flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold mb-4">{params.title}</h1>
          <img src={params.image} alt={params.title} className="mb-4" />
          <p className="text-lg mb-4">{params.description}</p>
        </div>
      </section>
    </PageCasing>
  );
};

export default SingleBlogPage;
