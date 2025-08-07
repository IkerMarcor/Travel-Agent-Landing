import { motion } from "motion/react";
import { ShowcaseCarousel } from "@/components/ShowcaseCarousel";
import { Link } from "react-router-dom";

export const BannerSection = (): JSX.Element => {
  const carouselImages = ["/crsl1.jpg", "/crsl2.jpg", "/crsl3.jpg"];

  return (
    <section className="relative items-center justify-center text-white min-h-screen overflow-hidden">
      <img
        src="/background-img-sea.jpg"
        alt="Sea background"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      <div className="relative z-10 w-full flex flex-row container mx-auto items-center">
        <div className="w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 2, bounce: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-bold sm:text-5xl">
              Dream |<strong className="text-yellow-400"> Explore </strong>|
              Discover
            </h1>

            <p className="mt-4 text-base text-pretty sm:text-lg/relaxed">
              Get the best prices on all excursions and activities across the
              world.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <Link
                className="inline-block rounded border border-yellow-500 bg-yellow-500 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-yellow-400"
                to="/packages"
              >
                Explore Now
              </Link>
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