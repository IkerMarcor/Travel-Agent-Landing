import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const BlogSection = (): JSX.Element => {
  const blogPosts = [
    {
      title: "Top 5 Must-See Destinations in Europe",
      description:
        "Discover the charm and history of Europe's top five must-visit destinations. From Paris to Rome, explore iconic cities and hidden gems.",
        image: "/blog-1.jpg"
    },
    {
      title: "How to Plan the Perfect Beach Vacation",
      description:
        "Get ready for sun and sand with our ultimate guide to planning a beach vacation. Learn how to choose the best destinations and pack like a pro.",
      image: "/blog-2.jpg"
    },
    {
      title: "Exploring Off-the-Beaten-Path Adventures",
      description:
        "Uncover the world's best-kept secrets with our guide to off-the-beaten-path adventures. These hidden gems offer unique experiences away.",
      image: "/blog-3.jpg"
    },
    {
      title: "Tips for Stress-Free Family Travel",
      description:
        "Make family travel a breeze with our top tips for stress-free trips. From packing hacks to activity ideas, we've got you covered for a fun and relaxing vacation.",
      image: "/blog-4.jpg"
    },
    {
      title: "Top 5 Must-See Destinations in Europe",
      description:
        "Discover the charm and history of Europe's top five must-visit destinations. From Paris to Rome, explore iconic cities and hidden gems.",
        image: "/blog-1.jpg"
    },
    {
      title: "How to Plan the Perfect Beach Vacation",
      description:
        "Get ready for sun and sand with our ultimate guide to planning a beach vacation. Learn how to choose the best destinations and pack like a pro.",
      image: "/blog-2.jpg"
    },
    {
      title: "Exploring Off-the-Beaten-Path Adventures",
      description:
        "Uncover the world's best-kept secrets with our guide to off-the-beaten-path adventures. These hidden gems offer unique experiences away.",
      image: "/blog-3.jpg"
    },
    {
      title: "Tips for Stress-Free Family Travel",
      description:
        "Make family travel a breeze with our top tips for stress-free trips. From packing hacks to activity ideas, we've got you covered for a fun and relaxing vacation.",
      image: "/blog-4.jpg"
    },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-5xl text-[#2e2e2e] font-normal mb-16 font-['Inter',Helvetica]">
          Explore our insights, tips and more.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-xl bg-[#dbe8ec] p-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="border-none shadow-none">
              <div className="h-[200px] w-full bg-gray-200 mb-[26px] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${post.image})` }} />
              <CardContent className="p-0 flex flex-col gap-4">
                <h3 className="text-2xl text-[#2e2e2e] font-normal font-['Inter',Helvetica]">
                  {post.title}
                </h3>
                <p className="text-base text-[#585858] font-normal font-['Inter',Helvetica]">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className="p-0 mt-10">
                <a
                  href="#"
                  className="text-base text-[#2e2e2e] font-normal font-['Inter',Helvetica] underline"
                >
                  Read More
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
