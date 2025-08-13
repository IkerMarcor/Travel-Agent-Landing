import { Carousel } from "@/components/Carousel";
import { CarouselItem } from "@/components/CarouselItem";
import { motion } from "motion/react";
import Title from "@/components/Title";
import { useTranslation, Trans } from "react-i18next";

type TrendingCard = {
  name: string;
  description: string;
  image: string;
};

export const TrendingSection = (): JSX.Element => {
  const { t } = useTranslation();

  const cards =
    (t("section.trending.cards", { returnObjects: true }) as TrendingCard[]) ??
    [];

  return (
    <section className="bg-gray-100 grid">
      <div className="container mx-auto">
        <Title>
          <Trans i18nKey={"section.trending.title"}>
            Our <span className="italic font-semibold">Trending</span>{" "}
            Destinations
          </Trans>
        </Title>

        {/* Destination cards */}
        <div className="hidden md:block">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
            {cards.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl shadow-lg group relative"
              >
                <div className="p-0 relative h-[350px] md:h-[450px]">
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
                      <button
                        type="button"
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      >
                        {t("common.button.make-a-plan")}
                      </button>
                      <button
                        type="button"
                        className="text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        {t("common.button.learn-more")}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel for mobile devices */}
      <Carousel className="pt-8 container lg:hidden" itemCount={cards.length}>
        {cards.map((d, i) => (
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
                <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  {t("common.button.make-a-plan")}
                </button>
                <button
                  type="button"
                  className="text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  {t("common.button.learn-more")}
                </button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  );
};
