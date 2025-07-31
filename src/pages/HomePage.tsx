import { BannerSection } from "../sections/BannerSection";
import { ServicesSection } from "../sections/ServicesSection";
import { TrendingSection } from "../sections/TrendingSection";
import { PackagesSection } from "../sections/PackagesSection";
import { BlogSection } from "../sections/BlogSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { FaqSection } from "../sections/FaqSection";
import { ContactFormSection } from "../sections/ContactFormSection";
import { TrustedBySection } from "../sections/TrustedBySection";
import { PageCasing } from "../components/PageCasing";

const HomePage = () => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <PageCasing>
        <BannerSection />
        <ServicesSection />
        <PackagesSection />
        <TrendingSection />
        <BlogSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactFormSection />
        <TrustedBySection />
      </PageCasing>
    </div>
  );
};

export default HomePage;
