// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

 export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // scrolls to top smoothly, or use `window.scrollTo(0, 0);` for instant
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};
