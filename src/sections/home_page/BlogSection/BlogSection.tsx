import Title from "@/components/Title";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { generateSlug } from "@/lib/generateSlug";
import { ViewAllButton } from "@/components/ViewAllButton";
import { useTranslation, Trans } from "react-i18next";

type BlogPost = {
  title: string;
  description: string;
  image: string;
};

export const BlogSection = (): JSX.Element => {
  const { t } = useTranslation();

  const blogPosts =
    (t("section.blog.posts", { returnObjects: true }) as BlogPost[]) ?? [];

  const firstSixPosts = blogPosts.slice(0, 6); // Limit to first 6 posts

  return (
    <section className="bg-[#dbe8ec]">
      <div className="container p-0">
        <Title>
          <Trans i18nKey={"section.blog.title"}>
            <span className="italic font-semibold">Explore</span> our insights,
            tips and more.
          </Trans>
        </Title>

        <div className="relative">
          <div className="overflow-x-scroll md:overflow-hidden scroll-smooth">
            <div className="flex gap-5 rounded-xl bg-[#dbe8ec] p-6 w-max flex-nowrap">
              {firstSixPosts.map((post, index) => (
                <div
                  key={index}
                  className="border rounded-lg shadow-none bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-[400px] w-[400px] flex-shrink-0"
                >
                  <div
                    className="h-[150px] w-full bg-gray-200 mb-[26px] bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="p-2">
                    <div className="flex flex-col gap-4 p-6 pt-0">
                      <h3 className="line-clamp-1 text-sm text-[#2e2e2e] font-normal font-['Inter',Helvetica]">
                        {post.title}
                      </h3>
                      <p className="line-clamp-4 text-base text-[#585858] font-normal font-['Inter',Helvetica]">
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

          {/* Arrows */}
          <div className="hidden md:block">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() =>
                document
                  .querySelector(".scroll-smooth")
                  ?.scrollBy({ left: -400, behavior: "smooth" })
              }
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#dbe8ec] rounded-full p-2 shadow-lg z-10 hover:brightness-150 transition duration-300"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() =>
                document
                  .querySelector(".scroll-smooth")
                  ?.scrollBy({ left: 400, behavior: "smooth" })
              }
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#dbe8ec] rounded-full p-2 shadow-lg z-10 hover:brightness-150 transition duration-300"
            >
              <ChevronRight />
            </button>
          </div>

          <ViewAllButton link="blog" />
        </div>
      </div>
    </section>
  );
};
