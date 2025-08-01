import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";

export const PackagesSection = (): JSX.Element => {
  const packageCards = [
    {
      id: 1,
      rating: 4.8,
      name: "Ain Dubai",
      description:
        "Experience incredible Dubai moments at the world's largest and tallest observation wheel, 250 meters in the sky!",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=80",
      hasBookNow: true,
      isFeatured: false,
    },
    {
      id: 2,
      rating: 4.8,
      name: "Amalfi Coast",
      description:
        "Experience incredible Dubai moments at the world's largest and tallest observation wheel, 250 meters in the sky!",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=80",

      hasBookNow: false,
      isFeatured: false,
    },
    {
      id: 3,
      rating: 4.8,
      name: "Sydney",
      description:
        "Experience incredible Dubai moments at the world's largest and tallest observation wheel, 250 meters in the sky!",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1080&q=80",
      hasBookNow: false,
      isFeatured: true,
    },
    {
      id: 4,
      rating: 4.8,
      name: "Historical Place",
      description:
        "Experience incredible Dubai moments at the world's largest and tallest observation wheel, 250 meters in the sky!",
      image:
        "https://images.unsplash.com/photo-1578898885775-e58a44e2828d?auto=format&fit=crop&w=1080&q=80",
      hasBookNow: false,
      isFeatured: false,
    },
    {
      id: 5,
      rating: 4.8,
      name: "Sea Area",
      description:
        "Experience incredible Dubai moments at the world's largest and tallest observation wheel, 250 meters in the sky!",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=80",
      hasBookNow: false,
      isFeatured: true,
    },
    {
      id: 6,
      rating: 4.8,
      name: "City Tour",
      description:
        "Experience incredible Dubai moments at the world's largest and tallest observation wheel, 250 meters in the sky!",
      image:
        "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=1080&q=80",
      hasBookNow: false,
      isFeatured: false,
    },
  ];

  return (
    <section className=" bg-[#dbe8ec]">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-xl">
          {packageCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative rounded-xl overflow-hidden shadow-md h-full group">
                {/* Featured Tag */}
                {card.isFeatured && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-20">
                    Featured
                  </div>
                )}

                {/* Image */}
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Hover Overlay Content */}
                <div className="absolute inset-0 bg-white bg-opacity-90 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-30 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-[#2b2626]">
                        {card.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <img
                          src="/vector-6.svg"
                          alt="Star"
                          className="w-5 h-5"
                        />
                        <span className="text-lg text-[#2b2626] font-medium">
                          {card.rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-[#2b2626] mb-4 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {card.hasBookNow && (
                    <Button className="bg-[#2b2626] text-white hover:bg-[#1f1f1f]">
                      Book Now
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};