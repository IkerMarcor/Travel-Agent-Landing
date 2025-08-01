import Title from "@/components/Title";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { generateSlug } from "@/utils/generateSlug";
import { ViewAllButton } from "@/components/ViewAllButton";

export const BlogSection = (): JSX.Element => {
  const firstSixPosts = blogPosts.slice(0, 6); // Limit to first 6 posts

  return (
    <section className="bg-[#dbe8ec]">
      <div className="container p-0">
        <Title>
          <span className="italic font-semibold">Explore</span> our insights,
          tips and more.
        </Title>

        <div className="relative">
          <div className="overflow-x-scroll md:overflow-hidden scroll-smooth">
            <div className="flex gap-5 rounded-xl bg-[#dbe8ec] p-6 w-max flex-nowrap">
              {firstSixPosts.map((post, index) => (
                <Card
                  key={index}
                  className="border-none shadow-none bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-[400px] w-[400px] flex-shrink-0"
                >
                  <div
                    className="h-[150px] w-full bg-gray-200 mb-[26px] bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="p-2">
                    <CardContent className="flex flex-col gap-4">
                      <h3 className="text-sm text-[#2e2e2e] font-normal font-['Inter',Helvetica]">
                        {post.title}
                      </h3>
                      <p className="text-base text-[#585858] font-normal font-['Inter',Helvetica]">
                        {post.description}
                      </p>
                    </CardContent>
                    <CardFooter className="mt-5">
                      <Link
                        to={`/blog/${generateSlug(post.title)}`}
                        state={post}
                        className="text-base text-[#2e2e2e] font-normal font-['Inter',Helvetica] underline"
                      >
                        Read More
                      </Link>
                    </CardFooter>
                  </div>
                </Card>
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

          <ViewAllButton pageName="Blog Posts" link="blog" />
        </div>
      </div>
    </section>
  );
};
