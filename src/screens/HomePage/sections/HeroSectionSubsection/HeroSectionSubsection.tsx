import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeroSectionSubsection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", active: true },
    { label: "Blog", active: false },
    { label: "Packages", active: false },
    { label: "Contact Us", active: false },
    { label: "About Us", active: false },
  ];

  return (
    <div className="relative w-full h-[833px]">
      <div className="relative h-[833px]">
        {/* Background image container */}
        <div className="absolute w-full h-[833px] top-0 left-0">
          <img
            className="absolute w-full h-full object-cover"
            alt="Background"
            src="/background-img-sea.jpg"
          />
        </div>

        {/* Image gallery on the right */}
        <div className="absolute w-[830px] h-[536px] top-[183px] right-0">
          <div className="relative w-[828px] h-[470px] top-2.5">
            <div className="relative w-[778px] h-[464px] left-1.5">
              <img
                className="absolute w-[323px] h-[411px] top-8 left-[455px] object-cover"
                alt="Destination image 1"
              />
              <img
                className="absolute w-[399px] h-[432px] top-8 left-0 object-cover"
                alt="Destination image 2"
              />
              <img
                className="absolute w-[296px] h-[455px] top-0 left-[245px] object-cover"
                alt="Destination image 3"
              />
            </div>
          </div>
        </div>

        {/* Hero content - left side */}
        <div className="flex flex-col w-[622px] items-start gap-[50px] absolute top-[245px] left-[53px]">
          {/* Main headline */}
          <div className="relative w-[598px] mt-[-1.00px] [text-shadow:0px_1.56px_1.25px_#00000013] [font-family:'jsMath-cmmi10-Regular',Helvetica] font-normal text-white text-[74px] tracking-[0] leading-[82.9px]">
            <span className="[font-family:'jsMath-cmmi10-Regular',Helvetica] font-normal text-white text-[74px] tracking-[0] leading-[82.9px]">
              Dream
            </span>
            <span className="[font-family:'Vidaloka',Helvetica]">
              {" "}
              | Explore | Discover
            </span>
          </div>

          {/* Subheading */}
          <div className="relative w-[558px] [font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[33.6px]">
            Get the best prices on all excurssions and activities across World.
          </div>

          {/* CTA Button */}
          <Button className="w-[241px] px-[60px] py-[18px] bg-[#05374f] rounded-[50px] text-white text-xl [font-family:'Inter',Helvetica] font-normal">
            Explore Now
          </Button>
        </div>

        {/* Pagination indicator */}
        <div className="absolute w-[685px] h-[21px] top-[709px] left-[705px]">
          <div className="absolute w-[50px] -top-px left-0 [font-family:'Viga',Helvetica] text-lg font-normal tracking-[0] leading-[normal]">
            <span className="text-[#3b505a]">01</span>
            <span className="text-white">/03</span>
          </div>

          <div className="absolute w-[616px] h-[7px] top-[5px] left-[69px]">
            <img
              className="absolute w-[616px] h-0.5 top-[3px] left-0"
              alt="Progress bar background"
              src="/line-2.svg"
            />
            <img
              className="absolute w-[228px] h-[7px] top-0 left-px"
              alt="Progress bar indicator"
              src="/line-3.svg"
            />
          </div>
        </div>

        {/* Header/Navigation */}
        <header className="flex w-full max-w-[1340px] items-center justify-between absolute top-[27px] left-[50px] bg-transparent">
          {/* Logo */}
          <img
            className="relative w-[153px] h-[89.56px]"
            alt="Logo"
            src="/frame-1000002642.svg"
          />

          <div className="flex items-center gap-[50px]">
            {/* Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList className="flex gap-[35px]">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      className={`mt-[-1.00px] font-normal text-lg tracking-[0] leading-[normal] relative w-fit [font-family:'Inter',Helvetica] ${
                        item.active ? "text-[#3b505a]" : "text-white"
                      }`}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Action icons */}
            <div className="inline-flex items-start gap-[19px] relative flex-[0_0_auto]">
              <div className="relative w-[38px] h-[38px]">
                <img
                  className="absolute w-8 h-8 top-[3px] left-0.5"
                  alt="Search icon"
                  src="/vector-42.svg"
                />
              </div>
              <div className="relative w-[38px] h-[38px] bg-[url(/vector-11.svg)] bg-[100%_100%]" />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
