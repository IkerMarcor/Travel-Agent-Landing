import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const BannerSection = (): JSX.Element => {
  const navItems = [
    { label: "Home", active: true },
    { label: "Blog", active: false },
    { label: "Packages", active: false },
    { label: "Contact Us", active: false },
    { label: "About Us", active: false },
  ];

  const carouselImages = [
    "/crsl1.jpg",
    "/crsl2.jpg",
    "/crsl3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

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
            Dream |<strong className="text-yellow-400"> Explore </strong>| Discover
          </h1>

          <p className="mt-4 text-base text-pretty sm:text-lg/relaxed">
            Get the best prices on all excursions and activities across the world.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-yellow-500 bg-yellow-500 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-yellow-400"
              href="#"
            >
              Explore Now
            </a>
          </div>
        </motion.div>
        </div>

        {/* Banner Carousel */}
        <div className="hidden md:block relative h-[400px] rounded-xl overflow-hidden w-1/3 mx-auto">
          <AnimatePresence mode="wait">
            <motion.img
              key={carouselImages[current]}
              src={carouselImages[current]}
              alt="Carousel slide"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1 , delay: 0.2 }}
              className="w-full h-full object-cover absolute inset-0 rounded-xl"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
