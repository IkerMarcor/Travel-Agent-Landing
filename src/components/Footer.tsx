import { mainLinks, secondaryLinks, socialLinks } from "@/data/links";

export const Footer = (): JSX.Element => {

  return (
    <footer className="w-full bg-cyan-600 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Logo and About */}
          <div className="flex flex-col gap-6 max-w-md">
            <img
              className="w-[153px] h-[90px]"
              alt="Travel Tourism Logo"
              src="/frame-1000002643.svg"
              loading="lazy"
              decoding="async"
            />
            <p className="text-white text-lg leading-relaxed">
              Travel Tourism is a customer-oriented organization offering
              professional, world-class tourism solutions.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.iconAlt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-sky-950 hover:bg-sky-200 transition-colors duration-300"
                >
                  <img
                    src={social.icon}
                    alt={`${social.iconAlt} icon`}
                    className="w-6 h-6 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="flex gap-16 flex-wrap">
            <div className="flex flex-col gap-3">
              {mainLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.to}
                  className="text-white text-base hover:text-gray-300 transition-colors duration-200 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {secondaryLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.to}
                  className="text-white text-base hover:text-gray-300 transition-colors duration-200 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12">
          <p className="text-white text-sm">&copy; 2025 Travel Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};