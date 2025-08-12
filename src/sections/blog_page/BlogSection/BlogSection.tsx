import { generateSlug } from "@/utils/generateSlug";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type BlogPost = {
  title: string;
  description: string;
  image: string;
};

export const BlogSection = (): JSX.Element => {
  const { t } = useTranslation();

  const blogPosts =
    (t("section.blog.posts", { returnObjects: true }) as BlogPost[]) ?? [];

  return (
    <section className="bg-[#dbe8ec]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-none bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="h-[200px] w-full bg-gray-200 mb-[26px] bg-cover bg-center rounded-t-lg"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <div className="p-2">
                <div className="flex flex-col gap-4 p-6 pt-0">
                  <h3 className="text-2xl text-[#2e2e2e] font-normal font-['Inter',Helvetica]">
                    {post.title}
                  </h3>
                  <p className="text-base text-[#585858] font-normal font-['Inter',Helvetica]">
                    {post.description}
                  </p>
                </div>
                <div className="flex items-center p-6 pt-0 mt-5">
                  <Link
                    to={`/blog/${generateSlug(post.title)}`}
                    state={post}
                    className="text-base text-[#2e2e2e] font-normal font-['Inter',Helvetica] underline"
                  >
                    {t("section.blog.link")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
