import React from "react";

export const FooterSubsection = (): JSX.Element => {
  // Navigation links data
  const mainLinks = ["Home", "Tours", "Packages", "Our Partner", "Services"];

  const secondaryLinks = ["Our Team", "Blog", "Contact Us", "Careers"];

  return (
    <footer className="w-full bg-cyan-600 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and description section */}
          <div className="flex flex-col gap-8 max-w-[471px]">
            <img
              className="w-[153px] h-[89.56px]"
              alt="Travel Tourism Logo"
              src="/frame-1000002643.svg"
            />

            <p className="font-normal text-white text-lg tracking-[0.09px] leading-[22.5px]">
              Travel Tourism is a customer-oriented organization offering
              professional, world-class tourism solutions.
            </p>

            {/* Social media icons */}
            <img
              className="flex-none"
              alt="Social Media Links"
              src="/frame-48095444.svg"
            />
          </div>

          {/* Navigation links section */}
          <div className="flex gap-16 mt-8 md:mt-0">
            {/* First column of links */}
            <div className="flex flex-col gap-4">
              {mainLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-normal text-white text-base tracking-[0.08px] leading-[19.2px] whitespace-nowrap"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Second column of links */}
            <div className="flex flex-col gap-4">
              {secondaryLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-normal text-white text-base tracking-[0.08px] leading-[19.2px] whitespace-nowrap"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="text-center mt-16">
          <p className="font-normal text-white text-base tracking-[0.08px] leading-5">
            Copyright @2025
          </p>
        </div>
      </div>
    </footer>
  );
};
