import { BannerSection } from "../sections/home_page/BannerSection";
import { ServicesSection } from "../sections/home_page/ServicesSection";
import { TrendingSection } from "../sections/home_page/TrendingSection";
import { PackagesSection } from "../sections/home_page/PackagesSection";
import { BlogSection } from "../sections/home_page/BlogSection";
import { TestimonialsSection } from "../sections/home_page/TestimonialsSection";
import { FaqSection } from "../sections/home_page/FaqSection";
import { ContactFormSection } from "../sections/home_page/ContactFormSection";
import { TrustedBySection } from "../sections/home_page/TrustedBySection";
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
