// components/CarouselItem.tsx
import { ReactNode } from "react";

type CarouselItemProps = {
  children: ReactNode;
  className?: string;
};

export const CarouselItem = ({ children, className = "" }: CarouselItemProps) => (
  <div
    className={`flex-none snap-center ${className}`}
  >
    {children}
  </div>
);
