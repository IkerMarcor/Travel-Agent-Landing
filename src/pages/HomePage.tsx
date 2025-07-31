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
      <div id="home-page" className="bg-white w-full flex flex-col">
        <PageCasing>
          <BannerSection />
          <ServicesSection />
          <TrendingSection />
          <PackagesSection />
          <BlogSection />
          <TestimonialsSection />
          <FaqSection />
          <ContactFormSection />
          <TrustedBySection />
        </PageCasing>
      </div>
    </div>
  );
};

export default HomePage;
