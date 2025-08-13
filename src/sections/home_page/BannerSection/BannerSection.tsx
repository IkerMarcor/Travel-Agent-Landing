import { motion } from "motion/react";
import { ShowcaseCarousel } from "@/components/ShowcaseCarousel";
import { useTranslation, Trans } from "react-i18next";
import { NavLink } from "react-router-dom";

export const BannerSection = (): JSX.Element => {
  const { t } = useTranslation();
  const carouselImages = ["/crsl1.jpg", "/crsl2.jpg", "/crsl3.jpg"];

  return (
    <section className="items-center justify-center text-white min-h-screen overflow-hidden bg-[url('/background-img-sea.jpg')] bg-cover bg-center">
      <div className="w-full flex flex-row container mx-auto items-center">
        {/* Text Content */}
        <div className="w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 2, bounce: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-bold sm:text-5xl">
              <Trans i18nKey="section.banner.title">
                Dream |<strong className="text-yellow-400"> Explore </strong>|
                Discover
              </Trans>
            </h1>

            <p className="mt-4 text-base text-pretty sm:text-lg/relaxed">
              {t("section.banner.description")}
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <NavLink
                className="inline-block rounded border border-yellow-500 bg-yellow-500 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-yellow-400"
                to="/packages"
              >
                {t("common.button.explore-now")}
              </NavLink>
            </div>
          </motion.div>
        </div>

        <div className="hidden md:block relative h-[400px] rounded-xl overflow-hidden w-1/3 mx-auto">
          <ShowcaseCarousel carouselImages={carouselImages} />
        </div>
      </div>
    </section>
  );
};
