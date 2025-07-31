import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const PageCasing = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
