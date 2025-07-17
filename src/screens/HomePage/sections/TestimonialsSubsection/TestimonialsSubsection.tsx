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
      picture: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      source: "TripAdvisor",
    },
    {
      text: "I highly recommend Majestic Travel for anyone looking for a hassle-free vacation. Their expertise and local knowledge helped us discover hidden gems in Thailand that we never would have found on our own. Thank you for an amazing experience!",
      author: "Emily Chen",
      picture: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      source: "Google Reviews",
    },
    {
      text: "Our family trip to Disney World organized by Majestic Travel was flawless! They took care of every detail, from hotel accommodations to theme park tickets, allowing us to focus on creating magical memories together. Thank you for a wonderful vacation!",
      author: "David Thompson",
      picture: "https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg",
      source: "Facebook Reviews",
    },
    {
      text: "Majestic Travel made planning our dream destination wedding in Santorini a breeze! Their team went above and beyond to ensure every aspect of our special day was perfect. We couldn't have asked for a better experience",
      author: "Samantha Patel",
      picture: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      source: "WeddingWire",
    },
  ];

  return (
    <section>
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
                <blockquote className="relative">
                  <svg
                    className="absolute -top-6 -start-8 size-16 text-gray-100 dark:text-neutral-700"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <div className="relative z-10">
                    <p className="text-gray-800 sm:text-xl dark:text-white line-clamp-6">
                      <em>{testimonial.text}</em>
                    </p>
                  </div>

                  <footer className="mt-6">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <img
                          className="size-10 rounded-full"
                          src={testimonial.picture}
                          alt="Avatar"
                        />
                      </div>
                      <div className="ms-4">
                        <div className="text-base font-semibold text-gray-800 dark:text-neutral-400">
                          {testimonial.author}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-neutral-500">
                          {testimonial.source}
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="outline" size="sm" className="rounded-full">
            View All Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
};
