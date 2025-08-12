import { Carousel } from "@/components/Carousel";
import { CarouselItem } from "@/components/CarouselItem";
import Title from "@/components/Title";
import { ViewAllButton } from "@/components/ViewAllButton";
import { useTranslation, Trans } from "react-i18next";

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
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto p-0">
        <Title>
          <Trans i18nKey={"section.testimonials.title"}>
            <span className="italic font-semibold">Discover</span> What Our
            Valued <span className="italic font-semibold">Clients</span> Say
          </Trans>
        </Title>

        <Carousel itemCount={cards.length}>
          {cards.map((t, i) => (
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
