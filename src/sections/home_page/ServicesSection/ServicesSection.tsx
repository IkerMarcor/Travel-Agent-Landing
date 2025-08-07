import { motion } from "framer-motion";
import Title from "@/components/Title";
import { useTranslation, Trans } from "react-i18next";

type ServiceCard = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
};

export const ServicesSection = (): JSX.Element => {
  const { t } = useTranslation();

  const cards = (t("section.services.cards", {
    returnObjects: true,
  }) as ServiceCard[]) ?? [];

  return (
    <section aria-labelledby="services-section">
      <div className="flex flex-col gap-8 container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <Title>
            <Trans i18nKey={"section.services.title"}>
              We <span className="italic font-semibold">provide</span> you{" "}
              <span className="italic font-semibold">best</span> services.
            </Trans>
          </Title>

          <p className="w-full my-4 text-base text-gray-600">
            {t("section.services.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, index) => (
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
                  <img alt={card.iconAlt} src={card.icon} />
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
