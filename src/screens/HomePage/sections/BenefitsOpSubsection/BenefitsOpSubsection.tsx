import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const BenefitsOpSubsection = (): JSX.Element => {
  const benefitCards = [
    {
      icon: "/frame-1000002644.svg",
      iconAlt: "Travel icon",
      iconClassName: "w-[91.04px] h-[85.18px]",
      title: "Travels & Tours",
      description:
        "Discover the world's wonders with our personalized travel experiences.",
    },
    {
      icon: "/come-back-later.svg",
      iconAlt: "Hotel icon",
      iconClassName: "w-[118px] h-[92.96px]",
      title: "Hotel Reservation",
      description:
        "Discover the world's wonders with our personalized travel experiences.",
    },
    {
      id: "car-rental",
      title: "Car Rentals",
      description:
        "Discover the world's wonders with our personalized travel experiences.",
      customIcon: true,
    },
  ];

  return (
    <section className="w-full flex items-center gap-[42px] py-8">
      {benefitCards.map((card, index) => (
        <Card key={index} className="flex-1 border-none shadow-none">
          <CardContent className="flex items-center gap-6 p-0">
            {card.customIcon ? (
              <div className="relative w-[121px] h-[62.63px]">
                <div className="relative h-[63px]">
                  <img
                    className="absolute w-[51px] h-[51px] top-0 left-6"
                    alt="Vector"
                    src="/vector-31.svg"
                  />
                  <img
                    className="absolute w-[121px] h-[43px] top-[11px] left-0"
                    alt="Vector"
                    src="/vector-40.svg"
                  />
                  <img
                    className="absolute w-[18px] h-[18px] top-11 left-[86px]"
                    alt="Vector"
                    src="/vector-39.svg"
                  />
                  <img
                    className="absolute w-[29px] h-[15px] top-[18px] left-[69px]"
                    alt="Vector"
                    src="/vector-24.svg"
                  />
                  <img
                    className="absolute w-[18px] h-1 top-[46px] left-[59px]"
                    alt="Vector"
                    src="/vector-30.svg"
                  />
                  <img
                    className="absolute w-[27px] h-[13px] top-[18px] left-[37px]"
                    alt="Vector"
                    src="/vector-33.svg"
                  />
                  <img
                    className="absolute w-[18px] h-[18px] top-11 left-5"
                    alt="Vector"
                    src="/vector-35.svg"
                  />
                  <img
                    className="absolute w-3 h-1.5 top-[38px] left-0"
                    alt="Vector"
                    src="/vector.svg"
                  />
                </div>
              </div>
            ) : (
              <img
                className={`relative ${card.iconClassName}`}
                alt={card.iconAlt}
                src={card.icon}
              />
            )}

            <div className="flex flex-col items-start gap-[15px] flex-1">
              <h3 className="self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#161c2d] text-2xl tracking-[-0.50px] leading-8">
                {card.title}
              </h3>
              <p className="self-stretch opacity-70 [font-family:'Inter',Helvetica] font-normal text-[#161c2d] text-[17px] tracking-[-0.20px] leading-[29px]">
                {card.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
