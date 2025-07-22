import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TrendingSection = (): JSX.Element => {
  // Destination data for mapping
  const destinations = [
    {
      name: "Palawan",
      description:
        "Palawan officially the Province of Palawan is an archipelagic province of the Philippines that is located in the region of Mimaropa.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=80",
    },
    {
      name: "Norway",
      description:
        "Norway, formally the Kingdom of Norway, is a Nordic country in Northern Europe, situated on the Scandinavian Peninsula.",
      image:
        "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1080&q=80",
    },
    {
      name: "Seoul",
      description:
        "Seoul, officially Seoul Special City, is the capital of South Korea.",
      image:
        "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=1080&q=80",
    },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-10">
          <span className="font-light">Trending</span>{" "}
          <span className="font-semibold">Destinations.</span>
        </h2>

        <div className="w-full bg-[#dbe8ec] rounded-xl overflow-hidden p-6">
          <div className="relative">
            {/* Destination cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {destinations.map((destination, index) => (
                <Card
                  key={index}
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
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
