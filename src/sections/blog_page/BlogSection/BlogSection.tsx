import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { generateSlug } from "@/utils/generateSlug";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

export const BlogSection = (): JSX.Element => {

  return (
    <section className="bg-[#dbe8ec]">
      <div className="container mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogPosts.map((post, index) => (
            <Card key={index} className="border-none shadow-none bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-[200px] w-full bg-gray-200 mb-[26px] bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${post.image})` }} />
              <div className="p-2">
              <CardContent className="flex flex-col gap-4">
                <h3 className="text-2xl text-[#2e2e2e] font-normal font-['Inter',Helvetica]">
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
    </section>
  );
};