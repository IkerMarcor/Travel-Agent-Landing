import { FooterSection } from "../sections/FooterSection";
import { NavBar } from "./NavBar";

export const PageCasing = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
      <FooterSection />
    </>
  );
};
