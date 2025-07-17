import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DestinationsSubsection = (): JSX.Element => {
  // Destination data for mapping
  const destinations = [
    {
      name: "Palawan",
      description:
        "Palawan officially the Province of Palawan is an archipelagic province of the Philippines that is located in the region of Mimaropa.",
      imagePosition: "left-[3px]",
    },
    {
      name: "Norway",
      description:
        "Norway (Bokmål: Norge, Nynorsk: Noreg), formally the Kingdom of Norway, is a Nordic country in Northern Europe, situated on the Scandinavian Peninsula.",
    },
    {
      name: "Seoul",
      description:
        "Seoul, officially Seoul Special City, is the capital of the Republic of Korea (ROK), commonly known as South Korea.",
      topPosition: "top-[339px]",
    },
    {
      name: "Palawan",
      description:
        "Palawan officially the Province of Palawan is an archipelagic province of the Philippines that is located in the region of Mimaropa.",
    },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-5xl text-[#2e2e2e] mb-6">
          <span className="[font-family:'jsMath-cmmi10-Regular',Helvetica] font-normal">
            Trending
          </span>
          <span className="[font-family:'Inter',Helvetica]">
            {" "}
            Destinations.
          </span>
        </h2>

        <div className="w-full bg-[#dbe8ec] rounded-xl overflow-hidden p-6">
          <div className="relative">
            {/* Background image */}
            <img
              className="w-full h-auto object-cover hidden md:block"
              alt="Destination background"
            />

            {/* Destination cards */}
            <div className="flex flex-wrap gap-4 justify-between">
              {destinations.map((destination, index) => (
                <Card
                  key={`destination-${index}`}
                  className="w-full md:w-[423px] h-[534px] rounded-[10px] overflow-hidden relative"
                >
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full bg-cover bg-center">
                      {/* Destination image - would need actual image sources */}
                      {index === 0 && (
                        <img
                          className={`w-full h-full object-cover absolute top-0 ${destination.imagePosition || ""}`}
                          alt={destination.name}
                        />
                      )}

                      {/* Gradient overlay */}
                      <div className="absolute w-full h-[284px] bottom-0 rounded-[0px_0px_10px_10px] bg-[linear-gradient(180deg,rgba(21,21,21,0)_34%,rgba(21,21,21,0.35)_50%,rgba(21,21,21,1)_100%)]" />

                      {/* Content */}
                      <div
                        className={`inline-flex flex-col items-start gap-[15px] absolute ${destination.topPosition || "top-[315px]"} left-[19px]`}
                      >
                        <h3 className="mt-[-1.00px] font-normal text-white text-[32px] tracking-[0] leading-[normal] whitespace-nowrap [font-family:'Inter',Helvetica]">
                          {destination.name}
                        </h3>

                        <p className="w-[337px] [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
                          {destination.description}
                        </p>

                        <div className="flex items-center gap-2">
                          <Button className="bg-white text-[#2e2e2e] rounded-lg hover:bg-gray-100">
                            <span className="[font-family:'Inter',Helvetica] font-medium text-base">
                              Make a Plan!
                            </span>
                          </Button>

                          <Button className="bg-white text-[#2e2e2e] rounded-lg hover:bg-gray-100">
                            <span className="[font-family:'Inter',Helvetica] font-medium text-base">
                              Learn More
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
