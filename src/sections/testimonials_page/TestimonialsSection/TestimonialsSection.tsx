import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

type TestimonialCard = {
  text: string;
  author: string;
  source: string;
  picture: string;
};

export const TestimonialsSection = () => {
  const { t } = useTranslation();

  const cards =
    (t("section.testimonials.cards", {
      returnObjects: true,
    }) as TestimonialCard[]) ?? [];

  return (
    <section className=" bg-[#dbe8ec]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-xl">
          {cards.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className=" bg-white rounded-xl p-4 shadow-md"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
