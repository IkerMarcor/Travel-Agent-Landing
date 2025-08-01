import { Carousel } from "@/components/Carousel";
import { CarouselItem } from "@/components/CarouselItem";
import Title from "@/components/Title";
import { ViewAllButton } from "@/components/ViewAllButton";
export const TestimonialsSection = () => {
  // Testimonial data for mapping
  const testimonials = [
    {
      text: "Majestic Travel exceeded all our expectations! Their attention to detail and personalized service made our trip to Italy unforgettable. Can't wait to book our next adventure with them!",
      author: "Johnathan Smith",
      picture:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      source: "TripAdvisor",
    },
    {
      text: "I highly recommend Majestic Travel for anyone looking for a hassle-free vacation. Their expertise and local knowledge helped us discover hidden gems in Thailand that we never would have found on our own. Thank you for an amazing experience!",
      author: "Emily Chen",
      picture:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      source: "Google Reviews",
    },
    {
      text: "Our family trip to Disney World organized by Majestic Travel was flawless! They took care of every detail, from hotel accommodations to theme park tickets, allowing us to focus on creating magical memories together. Thank you for a wonderful vacation!",
      author: "David Thompson",
      picture:
        "https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg",
      source: "Facebook Reviews",
    },
    {
      text: "Majestic Travel made planning our dream destination wedding in Santorini a breeze! Their team went above and beyond to ensure every aspect of our special day was perfect. We couldn't have asked for a better experience",
      author: "Samantha Patel",
      picture:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      source: "WeddingWire",
    },
    {
      text: "Majestic Travel made planning our dream destination wedding in Santorini a breeze! Their team went above and beyond to ensure every aspect of our special day was perfect. We couldn't have asked for a better experience",
      author: "Samantha Patel",
      picture:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      source: "WeddingWire",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <Title>
          <span className="italic font-semibold">Discover</span> What Our Valued{" "}
          <span className="italic font-semibold">Clients</span> Say
        </Title>

        <Carousel itemCount={testimonials.length}>
          {testimonials.map((t, i) => (
            <CarouselItem
              key={i}
              className="w-[340px] bg-blue-100 rounded-xl p-4 shadow-md"
            >
              <blockquote>
                <p className="mb-4 text-gray-800 line-clamp-6">
                  <em>{t.text}</em>
                </p>
                <footer className="flex items-center gap-3">
                  <img
                    src={t.picture}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{t.author}</div>
                    <div className="text-sm text-gray-500">{t.source}</div>
                  </div>
                </footer>
              </blockquote>
            </CarouselItem>
          ))}
        </Carousel>

        <ViewAllButton pageName="Testimonials" link="testimonials" />
      </div>
    </section>
  );
};
