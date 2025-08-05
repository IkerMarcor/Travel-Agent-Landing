import { motion } from "motion/react";
import { serviceCards } from "@/data/serviceCards";
import Title from "@/components/Title";

export const ServicesSection = (): JSX.Element => {

  return (
    <section>
      <div className="flex flex-col gap-8 container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <Title>
            We <span className="italic font-semibold">provide</span> you{" "}
            <span className="italic font-semibold">best</span> services.
          </Title>

          <p className="w-full my-4 text-base text-gray-600">
            At Majestic Travel, customer satisfaction is our top priority. We
            offer unparalleled service and personalized experiences to ensure
            your journey is nothing short of exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl border-none shadow-lg bg-[#cceaff]"
            >
              <div className="p-6 flex flex-col items-start gap-4">
                {card.icon ? (
                  <img
                    alt={card.iconAlt}
                    src={card.icon}
                  />
                ) : (
                  <span>No icon</span>
                )}

                <h3 className="text-2xl font-normal">{card.title}</h3>

                <p className="text-base text-gray-600 font-medium leading-6">
                  {card.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
