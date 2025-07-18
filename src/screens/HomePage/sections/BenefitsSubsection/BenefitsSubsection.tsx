import { Card, CardContent } from "../../../../components/ui/card";

export const BenefitsSubsection = (): JSX.Element => {
  const benefitCards = [
    {
      icon: "/vector-37.svg",
      iconAlt: "Vector",
      iconWidth: "w-[29px]",
      iconHeight: "h-[30.74px]",
      title: "World wide traveling",
      description:
        "Explore diverse cultures and stunning landscapes around the globe.",
    },
    {
      icon: "/cards.svg",
      iconAlt: "Group",
      iconWidth: "w-[62.37px]",
      iconHeight: "h-[31.98px]",
      title: "Lot of choices",
      description:
        "Discover diverse cultures and stunning landscapes across the globe.",
    },
    {
      icon: "/union.svg",
      iconAlt: "Union",
      iconWidth: "w-[33px]",
      iconHeight: "h-[28.24px]",
      title: "Our Responsibility",
      description:
        "At Majestic Travel, we prioritize sustainable and ethical travel practices.",
    },
    {
      icon: "/tickets.svg",
      iconAlt: "Group",
      iconWidth: "w-9", 
      iconHeight: "h-[31.02px]",
      title: "Easy Booking",
      description:
        "With Majestic Travel, booking your dream trip is simple and stress-free.",
    },
  ];

  return (
    <section>
      <div className="flex flex-col gap-8 container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <h2 className="w-full text-5xl text-[#2e2e2e]">
            <span className="font-normal">We </span>
            <span className="font-['jsMath-cmmi10-Regular',Helvetica]">
              provide
            </span>
            <span className="font-normal"> you </span>
            <span className="font-['jsMath-cmmi10-Regular',Helvetica]">
              best
            </span>
            <span className="font-normal"> services.</span>
          </h2>

          <p className="w-full md:w-1/2 text-base text-[#585858] font-medium leading-6">
            At Majestic Travel, customer satisfaction is our top priority. We
            offer unparalleled service and personalized experiences to ensure
            your journey is nothing short of exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {benefitCards.map((card, index) => (
            <Card
              key={index}
              className="bg-[#cceaff] rounded-[11.87px] border-none"
            >
              <CardContent className="p-6 flex flex-col items-start gap-4">
                {card.icon ? (
                  <img
                    className={`${card.iconWidth} ${card.iconHeight}`}
                    alt={card.iconAlt}
                    src={card.icon}
                  />
                ) : (
                  <div className={`${card.iconWidth} ${card.iconHeight}`}></div>
                )}

                <h3 className="text-2xl text-[#2e2e2e] font-normal">
                  {card.title}
                </h3>

                <p className="text-base text-[#585858] font-medium leading-6">
                  {card.description}
                </p>

                <a
                  href="#"
                  className="text-base text-[#222223] font-medium leading-6 underline"
                >
                  Learn More
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
