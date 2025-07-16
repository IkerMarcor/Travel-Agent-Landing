import { BenefitsSubsection } from "./sections/BenefitsSubsection";
import { BlogSubsection } from "./sections/BlogSubsection";
import { ContactFormSubsection } from "./sections/ContactFormSubsection/ContactFormSubsection";
import { DestinationsSubsection } from "./sections/DestinationsSubsection";
import { FaqSubsection } from "./sections/FaqSubsection";
import { FooterSubsection } from "./sections/FooterSubsection";
import { PackagesSubsection } from "./sections/PackagesSubsection";
import { TestimonialsSubsection } from "./sections/TestimonialsSubsection";
import { BannerSection } from "./sections/BannerSection";

export const HomePage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1400px] flex flex-col">
        <BannerSection />
        <BenefitsSubsection />
        <DestinationsSubsection />
        <PackagesSubsection />
        <BlogSubsection />
        <TestimonialsSubsection />
        <FaqSubsection />
        <ContactFormSubsection />
        <FooterSubsection />
      </div>
    </div>
  );
};
