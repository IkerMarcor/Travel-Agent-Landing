import { useTranslation } from "react-i18next";

type PackageCard = {
  image: string;
  name: string;
  description: string;
  hasBookNow: boolean;
  isFeatured: boolean;
};

export const PackagesSection = (): JSX.Element => {
   const { t } = useTranslation();
  
    const cards =
      (t("section.packages.cards", { returnObjects: true }) as PackageCard[]) ??
      [];
  
  return (
    <section className=" bg-[#dbe8ec]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-xl">
          {cards.map((card) => (
            <div className="relative rounded-xl overflow-hidden shadow-md h-full group bg-white">
              {/* Featured Tag */}
              {card.isFeatured && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-20">
                  Featured
                </div>
              )}

              {/* Image */}
              {card.image && (
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* Hover Overlay Content */}
              <div className="absolute inset-0 bg-white bg-opacity-90 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-30 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-[#2b2626]">
                      {card.name}
                    </h3>
                  </div>

                  <p className="text-sm text-[#2b2626] mb-4 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {card.hasBookNow && (
                  <button type="button" className="bg-[#2b2626] text-white hover:bg-[#1f1f1f]">
                    Book Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
