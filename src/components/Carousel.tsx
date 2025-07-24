import {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
  ReactNode,
} from "react";

type CarouselProps = {
  children: ReactNode;
  interval?: number;
  className?: string;
  itemCount: number;
};

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ children, interval = 3000, className = "", itemCount}, ref) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => scrollRef.current as HTMLDivElement);

    useEffect(() => {
      const container = scrollRef.current;
      if (!container || itemCount === 0) return;

      const scroll = () => {
        const scrollAmount =
          (container.scrollWidth - container.clientWidth) / itemCount;

        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft + scrollAmount >= maxScrollLeft - 5) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      };

      const scrollInterval = setInterval(scroll, interval);
      return () => clearInterval(scrollInterval);
    }, [interval]);

    return (
      <div
        ref={scrollRef}
        className={`overflow-hidden snap-x snap-mandatory ${className}`}
      >
        <div className="flex w-max gap-4">
          {Array.isArray(children)
            ? children.map((child, i) => (
                <div key={i} className="carousel-item flex-none">
                  {child}
                </div>
              ))
            : children}
        </div>
      </div>
    );
  }
);