import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Carousel } from "@/components/Carousel";
import { CarouselItem } from "@/components/CarouselItem";
import { motion } from "motion/react";
import Title from "@/components/Title";
import { destionationCards } from "@/data/destinationCards";

export const TrendingSection = (): JSX.Element => {

  return (
    <section className="bg-gray-100 grid">
      <div className="container mx-auto">
        <Title>
          Our <span className="italic font-semibold">Trending</span>{" "}
          Destinations
        </Title>

        {/* Destination cards */}
        <div className="hidden md:block">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
            {destionationCards.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl shadow-lg group relative"
              >
                <CardContent className="p-0 relative h-[350px] md:h-[450px]">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Content */}
                  <div className="absolute bottom-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-semibold mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-sm mb-4">{destination.description}</p>
                    <div className="flex gap-3">
                      <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-lg">
                        Make a Plan
                      </Button>
                      <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-lg">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel for mobile devices */}
      <Carousel
        className="pt-8 container lg:hidden"
        itemCount={destionationCards.length}
      >
        {destionationCards.map((d, i) => (
          <CarouselItem
            key={i}
            className="carousel-item min-w-[320px] w-[320px] bg-white rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={d.image}
              alt={d.name}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{d.name}</h3>
              <p className="text-sm text-gray-600">{d.description}</p>
              <div className="mt-4 flex gap-2">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Make a Plan
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  );
};
