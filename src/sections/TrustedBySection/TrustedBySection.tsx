import Title from "@/components/Title";

export const TrustedBySection = (): JSX.Element => {
  // Trusted by data for mapping
  const trustedBy = [
    {
      name: "Company A",
      logo: "/Expedia_Logo.png",
    },
    {
      name: "Company B",
      logo: "/Amazon_Logo.png",
    },
    {
      name: "Company C",
      logo: "/Tesla_Logo.png",
    },
  ];

  return (
    <section>
      <div className="container mx-auto flex flex-col max-w-2xl text-center py-16 px-4 gap-6">
        <Title>
          Trusted by <span className="text-yellow-400 font-bold ">2000+</span>
          <br /> customers worldwide
        </Title>

        {/* Trusted by logos */}
        <div className="flex flex-wrap justify-center gap-8 items-center mt-10 px-4">
          {trustedBy.map((company, index) => (
            <div key={index} className="w-28 md:w-32 flex justify-center">
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-12 grayscale opacity-50 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
