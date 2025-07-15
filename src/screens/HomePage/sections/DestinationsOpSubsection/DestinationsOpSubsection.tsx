import { ImageIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DestinationsOpSubsection = (): JSX.Element => {
  // Destination data for mapping
  const destinations = [
    {
      name: "Mount Fuji",
      description:
        "While the view of Mount Fuji from a distance is truly stunning, hiking the mountain is an experience you'll never forget.",
      active: true,
    },
    {
      name: "Kata Beach",
      description:
        "This cozy, secluded beach features calm waters and is a favorite for families and couples to relax, snorkel and body surf.",
      active: true,
    },
    {
      name: "Manukan Island",
      description:
        "Manukan Island is the second largest island in the Tunku Abdul Rahman National Park, Malaysia's first marine national park",
      active: true,
    },
    {
      name: "Taj Mahal",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh,",
      active: true,
    },
    {
      name: "Antelope canyon",
      description:
        "While the view of Mount Fuji from a distance is truly stunning, hiking the mountain is an experience you'll never forget.",
      active: false,
    },
  ];

  // Filter categories
  const filterCategories = [
    { name: "Popular", active: true },
    { name: "United States", active: false },
    { name: "Europe", active: false },
    { name: "Asia", active: false },
    { name: "Africa", active: false },
    { name: "South America", active: false },
    { name: "Canada", active: false },
    { name: "More", active: false },
  ];

  return (
    <section className="w-full py-12 relative">
      <div className="container mx-auto">
        <h2 className="text-5xl text-[#2e2e2e] mb-6">
          <span className="font-normal [font-family:'Inter',Helvetica]">
            Discover{" "}
          </span>
          <span className="[font-family:'jsMath-cmmi10-Regular',Helvetica]">
            Popular
          </span>
          <span className="font-normal [font-family:'Inter',Helvetica]">
            {" "}
            Destinations.
          </span>
        </h2>

        <div className="flex items-start justify-between mb-8">
          <div className="flex items-start gap-2.5 flex-wrap">
            {filterCategories.map((category, index) => (
              <Button
                key={`category-${index}`}
                variant={category.active ? "default" : "outline"}
                className={
                  category.active
                    ? "bg-[#2e2e2e] text-white"
                    : "border-[#dbe8ec] text-[#585858]"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>

          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/frame-75.svg"
          />
        </div>

        <div className="w-full bg-[#dbe8ec] rounded-xl p-8">
          <div className="flex flex-wrap gap-6">
            {destinations.map((destination, index) => (
              <Card
                key={`destination-${index}`}
                className="bg-white rounded-lg w-[320px]"
              >
                <CardContent className="p-2.5 flex flex-col gap-6">
                  <div className="w-[296px] h-[231px] bg-gray-200">
                    {/* Image placeholder */}
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                      <p className="text-xs font-medium text-[#4b4b4b] w-[289px]">
                        Duration: 10 days, 9 nights
                      </p>
                      <h3 className="text-2xl font-normal text-[#2e2e2e] whitespace-nowrap">
                        {destination.name}
                      </h3>
                    </div>

                    <p className="text-base font-normal text-[#585858] w-[289px]">
                      {destination.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      className={`px-6 py-3 ${destination.active ? "bg-[#cceaff]" : "bg-[#dbe8ec]"} text-[#2e2e2e]`}
                      variant="ghost"
                    >
                      Make a Plan!
                    </Button>

                    <Button
                      className={`px-6 py-3 ${destination.active ? "bg-[#cceaff]" : "bg-[#dbe8ec]"} text-[#2e2e2e]`}
                      variant="ghost"
                    >
                      <ImageIcon className="w-[17px] h-[17px] mr-2" />
                      Gallery
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
