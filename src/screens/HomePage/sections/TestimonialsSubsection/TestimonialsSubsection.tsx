import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSubsection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      text: "Majestic Travel exceeded all our expectations! Their attention to detail and personalized service made our trip to Italy unforgettable. Can't wait to book our next adventure with them!",
      author: "Johnathan Smith",
    },
    {
      text: "I highly recommend Majestic Travel for anyone looking for a hassle-free vacation. Their expertise and local knowledge helped us discover hidden gems in Thailand that we never would have found on our own. Thank you for an amazing experience!",
      author: "Emily Chen",
    },
    {
      text: "Our family trip to Disney World organized by Majestic Travel was flawless! They took care of every detail, from hotel accommodations to theme park tickets, allowing us to focus on creating magical memories together. Thank you for a wonderful vacation!",
      author: "David Thompson",
    },
    {
      text: "Majestic Travel made planning our dream destination wedding in Santorini a breeze! Their team went above and beyond to ensure every aspect of our special day was perfect. We couldn't have asked for a better experience",
      author: "Samantha Patel",
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <h2 className="text-[#2e2e2e] text-5xl leading-normal max-w-3xl">
            Discover What Our Valued <span className="italic">Clients</span>{" "}
            Have to Say About Their Unforgettable Journeys.
          </h2>

          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeftIcon className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRightIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex flex-nowrap gap-2.5 overflow-x-auto pb-4">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex-none w-[340px] bg-[#cceaff] rounded-xl border-none"
            >
              <CardContent className="flex flex-col justify-between h-[283px] p-6">
                <p className="font-medium text-[#585858] text-base leading-6">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-[15px] mt-4">
                  <div className="w-[51px] h-[51px] rounded-full bg-gray-300"></div>
                  <span className="font-medium text-[#2e2e2e] text-xl leading-[30px]">
                    {testimonial.author}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
