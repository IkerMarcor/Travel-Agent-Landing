import { motion } from "motion/react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = (): JSX.Element => {
  const benefitCards = [
    {
      icon: "/vector-37.svg",
      iconAlt: "Vector",
      iconWidth: "w-[29px]",
      iconHeight: "h-[30.74px]",
      title: "World wide traveling",
      description:
        "Explore diverse cultures and stunning landscapes around the globe.",
    },
    {
      icon: "/cards.svg",
      iconAlt: "Group",
      iconWidth: "w-[62.37px]",
      iconHeight: "h-[31.98px]",
      title: "Lot of choices",
      description:
        "Discover diverse cultures and stunning landscapes across the globe.",
    },
    {
      icon: "/union.svg",
      iconAlt: "Union",
      iconWidth: "w-[33px]",
      iconHeight: "h-[28.24px]",
      title: "Our Responsibility",
      description:
        "At Majestic Travel, we prioritize sustainable and ethical travel practices.",
    },
    {
      icon: "/tickets.svg",
      iconAlt: "Group",
      iconWidth: "w-9",
      iconHeight: "h-[31.02px]",
      title: "Easy Booking",
      description:
        "With Majestic Travel, booking your dream trip is simple and stress-free.",
    },
  ];

  return (
    <section>
      <div className="flex flex-col gap-8 container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <h2 className="w-full text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 break-words leading-tight">
            We <span className="italic font-semibold">provide</span> you{" "}
            <span className="italic font-semibold">best</span> services.
          </h2>

          <p className="w-full my-4 text-base text-gray-600">
            At Majestic Travel, customer satisfaction is our top priority. We
            offer unparalleled service and personalized experiences to ensure
            your journey is nothing short of exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {benefitCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl border-none shadow-lg bg-[#cceaff]"
            >
              <CardContent className="p-6 flex flex-col items-start gap-4">
                {card.icon ? (
                  <img
                    className={`${card.iconWidth} ${card.iconHeight}`}
                    alt={card.iconAlt}
                    src={card.icon}
                  />
                ) : (
                  <div className={`${card.iconWidth} ${card.iconHeight}`}></div>
                )}

                <h3 className="text-2xl font-normal">{card.title}</h3>

                <p className="text-base text-gray-600 font-medium leading-6">
                  {card.description}
                </p>

                <a
                  href="#"
                  className="text-base font-medium leading-6 underline"
                >
                  Learn More
                </a>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
