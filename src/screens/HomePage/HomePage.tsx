import { ServicesSection } from "./sections/ServicesSection";
import { BlogSection } from "./sections/BlogSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { TrendingSection } from "./sections/TrendingSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { PackagesSection } from "./sections/PackagesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { BannerSection } from "./sections/BannerSection";

export const HomePage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div id="home-page" className="bg-white w-full flex flex-col">
        <BannerSection />
        <ServicesSection />
        <TrendingSection />
        <PackagesSection />
        <BlogSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactFormSection />
        
        <FooterSection />
      </div>
    </div>
  );
};
