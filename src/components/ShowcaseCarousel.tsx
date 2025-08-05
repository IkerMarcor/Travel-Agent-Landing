import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const ShowcaseCarousel = ({
  carouselImages,
}: {
  carouselImages: string[];
}) => {
  if (!carouselImages || carouselImages.length === 0) {
    return null; // Return null if no images are provided
  }

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.img
        key={carouselImages[current]}
        src={carouselImages[current]}
        alt="Carousel slide"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full h-full object-cover absolute inset-0 rounded-xl"
      />
    </AnimatePresence>
  );
};
