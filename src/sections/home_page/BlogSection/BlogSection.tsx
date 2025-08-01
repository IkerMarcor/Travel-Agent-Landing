import Title from "@/components/Title";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export const BlogSection = (): JSX.Element => {
  const blogPosts = [
    {
      title: "Top 5 Must-See Destinations in Europe",
      description:
        "Discover the charm and history of Europe's top five must-visit destinations. From Paris to Rome, explore iconic cities and hidden gems.",
      image: "/blog-1.jpg",
    },
    {
      title: "How to Plan the Perfect Beach Vacation",
      description:
        "Get ready for sun and sand with our ultimate guide to planning a beach vacation. Learn how to choose the best destinations and pack like a pro.",
      image: "/blog-2.jpg",
    },
    {
      title: "Exploring Off-the-Beaten-Path Adventures",
      description:
        "Uncover the world's best-kept secrets with our guide to off-the-beaten-path adventures. These hidden gems offer unique experiences away.",
      image: "/blog-3.jpg",
    },
    {
      title: "Tips for Stress-Free Family Travel",
      description:
        "Make family travel a breeze with our top tips for stress-free trips. From packing hacks to activity ideas, we've got you covered for a fun and relaxing vacation.",
      image: "/blog-4.jpg",
    },
    {
      title: "Top 5 Must-See Destinations in Europe",
      description:
        "Discover the charm and history of Europe's top five must-visit destinations. From Paris to Rome, explore iconic cities and hidden gems.",
      image: "/blog-1.jpg",
    },
    {
      title: "How to Plan the Perfect Beach Vacation",
      description:
        "Get ready for sun and sand with our ultimate guide to planning a beach vacation. Learn how to choose the best destinations and pack like a pro.",
      image: "/blog-2.jpg",
    },
    {
      title: "Exploring Off-the-Beaten-Path Adventures",
      description:
        "Uncover the world's best-kept secrets with our guide to off-the-beaten-path adventures. These hidden gems offer unique experiences away.",
      image: "/blog-3.jpg",
    },
    {
      title: "Tips for Stress-Free Family Travel",
      description:
        "Make family travel a breeze with our top tips for stress-free trips. From packing hacks to activity ideas, we've got you covered for a fun and relaxing vacation.",
      image: "/blog-4.jpg",
    },
  ];

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
              {blogPosts.map((post, index) => (
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
                      <a
                        href="#"
                        className="text-base text-[#2e2e2e] font-normal font-['Inter',Helvetica] underline"
                      >
                        Read More
                      </a>
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
        </div>
      </div>
    </section>
  );
};
