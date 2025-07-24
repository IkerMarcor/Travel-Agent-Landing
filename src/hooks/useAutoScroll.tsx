import { useRef, useEffect } from "react";

export function useAutoScroll(
  scrollAmount: number = 200,
  delay: number = 2000
) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current as HTMLDivElement;

    if (!scrollContainer) return;
    // console.log("scrollContainer:",scrollContainer)
    console.log("scrollWidth:", scrollContainer.scrollWidth);
    console.log("clientWidth:", scrollContainer.clientWidth);
    console.log("scrollLeft (before):", scrollContainer.scrollLeft);
    const interval = setInterval(() => {
    //   console.log("scrollLeft: ", scrollContainer.scrollLeft);
      if (!scrollContainer) return;

      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      // Auto-scroll
      scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      // Reset to start if reached the end
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        maxScrollLeft - 10
      ) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, delay);

    return () => clearInterval(interval);
  }, [scrollAmount, delay]); // Dependency array to allow reactivity

  return {
    scrollRef,
  };
}
