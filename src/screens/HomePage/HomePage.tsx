import React from "react";
import { BenefitsOpSubsection } from "./sections/BenefitsOpSubsection";
import { BenefitsSubsection } from "./sections/BenefitsSubsection";
import { BlogSubsection } from "./sections/BlogSubsection";
import { ContactFormSubsection } from "./sections/ContactFormSubsection/ContactFormSubsection";
import { DestinationsOpSubsection } from "./sections/DestinationsOpSubsection";
import { DestinationsSubsection } from "./sections/DestinationsSubsection";
import { FaqSubsection } from "./sections/FaqSubsection";
import { FooterSubsection } from "./sections/FooterSubsection";
import { HeroSectionSubsection } from "./sections/HeroSectionSubsection";
import { PackagesSubsection } from "./sections/PackagesSubsection";
import { TestimonialsSubsection } from "./sections/TestimonialsSubsection";

export const HomePage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1400px] flex flex-col">
        <HeroSectionSubsection />
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
