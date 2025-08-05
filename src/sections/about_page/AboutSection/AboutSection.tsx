import { Title } from "@/components/Title"

export const AboutSection = (): JSX.Element => {
  return (
    <section className="bg-[#dbe8ec] py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div>
            <Title>Who <span className="italic font-semibold">We Are...</span></Title>
            <p className="text-lg text-gray-700 mb-4">
              At Wanderlust Travel Co., we specialize in crafting unforgettable adventures around the globe.
              With over a decade of experience, we’ve helped thousands of travelers explore new cultures, 
              savor world-class cuisine, and create lifelong memories.
            </p>
            <p className="text-base text-gray-600">
              Whether you're dreaming of pristine beaches, vibrant cities, or off-the-beaten-path escapes, 
              our team of travel experts is here to make it happen—personalized, stress-free, and always memorable.
            </p>
          </div>

          {/* Image or illustration */}
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/team.jpg" 
              alt="Happy travelers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
};
