import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PackagesSubsection = (): JSX.Element => {
  // Package card data for mapping
  const packageCards = [
    {
      id: 1,
      name: "Ain Dubai",
      rating: 4.8,
      description:
        "Experience incredible Dubai moments at the world's largest and tallest observation wheel, 250 meters in the sky!",
      hasBookNow: true,
      hasImage: false,
      isFeatured: false,
    },
    {
      id: 2,
      name: "Amalfi Coast",
      rating: 4.8,
      hasBookNow: false,
      hasImage: true,
      isFeatured: false,
    },
    {
      id: 3,
      name: "Sydney",
      rating: 4.8,
      hasBookNow: false,
      hasImage: true,
      isFeatured: true,
    },
    {
      id: 4,
      name: "Historical place",
      rating: 4.8,
      hasBookNow: false,
      hasImage: true,
      isFeatured: false,
    },
    {
      id: 5,
      name: "Sea Area",
      rating: 4.8,
      hasBookNow: false,
      hasImage: true,
      isFeatured: true,
    },
    {
      id: 6,
      name: "City Tour",
      rating: 4.8,
      hasBookNow: false,
      hasImage: true,
      isFeatured: false,
    },
  ];

  return (
    <div className="w-full py-10">
      <div className="container mx-auto">
        <h2 className="text-5xl text-[#2b2626] font-normal mb-10">
          <span className="font-normal">Our Best </span>
          <span className="font-['jsMath-cmmi10-Regular',Helvetica]">
            Packages
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packageCards.map((card) => (
            <Card
              key={card.id}
              className={`relative h-[354px] rounded-[10px] overflow-hidden ${!card.hasImage ? "bg-neutral-100 shadow-[0px_4px_4px_#00000040]" : ""}`}
            >
              <CardContent className="p-0 h-full">
                {card.hasImage ? (
                  <div className="relative w-full h-full bg-cover bg-center">
                    {/* Background image would be here in a real implementation */}
                    <div className="absolute inset-0 bg-black/30"></div>

                    <div className="flex justify-between items-start p-6">
                      <div className="text-2xl text-white font-normal">
                        {card.name}
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="relative w-[25px] h-[25px]">
                          <img
                            className="absolute w-6 h-[23px] top-px left-px"
                            alt="Star rating"
                            src="/vector-6.svg"
                          />
                        </div>
                        <div className="text-2xl text-white font-normal">
                          {card.rating}
                        </div>
                      </div>
                    </div>

                    {card.isFeatured && (
                      <Badge className="absolute top-[60px] left-0 px-[31px] py-3 rounded-[10px] bg-[linear-gradient(236deg,rgba(231,145,20,1)_2%,rgba(245,245,245,1)_100%)] text-[#2b2626] font-normal">
                        Featured
                      </Badge>
                    )}

                    <div className="absolute bottom-3 right-6 w-6 h-6">
                      <img
                        className="absolute w-[22px] h-[19px] top-[3px] left-px"
                        alt="Heart icon"
                        src="/vector-10.svg"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start">
                      <div className="text-2xl text-[#2b2626] font-normal">
                        {card.name}
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="relative w-[25px] h-[25px]">
                          <img
                            className="absolute w-6 h-[23px] top-px left-px"
                            alt="Star rating"
                            src="/vector-6.svg"
                          />
                        </div>
                        <div className="text-2xl text-[#2b2626] font-normal">
                          {card.rating}
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <p className="text-lg text-[#2b2626] font-normal leading-[25.2px]">
                        {card.description}
                      </p>
                    </div>

                    {card.hasBookNow && (
                      <div className="mt-auto flex items-center justify-between">
                        <div className="text-lg text-[#0c111f99] font-normal tracking-[-0.18px] leading-[23.4px]">
                          Price (as per your day selected)
                        </div>
                        <Button className="bg-[#0d3e55] text-white rounded-[50px] px-14 py-[11px]">
                          Book Now
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
