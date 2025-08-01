import facebookIcon from "@/svg/facebook-icon.svg";
import twitterIcon from "@/svg/twitter-icon.svg";
import instagramIcon from "@/svg/instagram-icon.svg";
import youtubeIcon from "@/svg/youtube-icon.svg";
import whatsappIcon from "@/svg/whatsapp-icon.svg";

export const Footer = (): JSX.Element => {
  // Navigation links data
  const mainLinks = ["Home", "Tours", "Packages", "Our Partner", "Services"];

  const secondaryLinks = ["Our Team", "Blog", "Contact Us", "Careers"];

  const socialLinks = [
    { name: "Facebook", icon: facebookIcon },
    { name: "Twitter", icon: twitterIcon },
    { name: "Instagram", icon: instagramIcon },
    { name: "YouTube", icon: youtubeIcon },
    { name: "WhatsApp", icon: whatsappIcon },
  ];

  return (
    <footer className="w-full bg-cyan-600 py-16">
      <div className="container mx-auto">
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
            <div className="flex flex-row h-[90px] w-full gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-sky-950 hover:bg-sky-200 transition-colors duration-300"
                >
                  <img
                    src={social.icon}
                    alt={`${social.name} icon`}
                    className="w-1/2 h-1/2"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links section */}
          <div className="flex gap-16 mt-8 md:mt-0">
            {/* First column of links */}
            <div className="flex flex-col gap-4">
              {mainLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-normal text-white text-base tracking-[0.08px] leading-[19.2px] whitespace-nowrap hover:text-gray-300 transition-colors duration-300"
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
                  className="font-normal text-white text-base tracking-[0.08px] leading-[19.2px] whitespace-nowrap hover:text-gray-300 transition-colors duration-300"
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
