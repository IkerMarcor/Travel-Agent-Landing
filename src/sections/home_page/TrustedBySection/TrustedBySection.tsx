import Title from "@/components/Title";
import { trustedByLogos } from "@/data/trustedByLogos";

export const TrustedBySection = (): JSX.Element => {

  return (
    <section>
      <div className="container mx-auto flex flex-col max-w-2xl text-center py-16 px-4 gap-6">
        <Title>
          Trusted by <span className="text-yellow-400 font-bold ">2000+</span>
          <br /> customers worldwide
        </Title>

        <div className="flex flex-wrap justify-center gap-8 items-center mt-10 px-4">
          {trustedByLogos.map((company, index) => (
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
