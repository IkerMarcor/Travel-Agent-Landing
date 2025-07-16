export const BannerSection = (): JSX.Element => {
  const navItems = [
    { label: "Home", active: true },
    { label: "Blog", active: false },
    { label: "Packages", active: false },
    { label: "Contact Us", active: false },
    { label: "About Us", active: false },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center text-white relative w-full min-h-screen overflow-hidden bg-[url('/background-img-sea.jpg')] bg-cover bg-center">
      {/* Navigation (hidden on small screens) */}
      <div className="hidden md:flex justify-between items-center px-10 py-4 absolute top-0 left-0 right-0 z-10">
        {/* Logo */}
        <img
          className="w-[120px] md:w-[153px] h-auto"
          alt="Logo"
          src="/frame-1000002642.svg"
        />

        <nav className="flex gap-x-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              className={`font-normal relative w-fit ${
                item.active ? "text-yellow-400" : "text-white"
              }`}
              href="#"
            >
              {item.label}
            </a>
          ))}
        </nav>

      </div>
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
        {/* Text Content */}
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Dream |<strong className="text-yellow-400"> Explore </strong>|
            Discover
          </h1>

          <p className="mt-4 text-base text-pretty sm:text-lg/relaxed">
            Get the best prices on all excursions and activities across the
            world.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-yellow-500 bg-yellow-500 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-yellow-400"
              href="#"
            >
              Explore Now
            </a>
          </div>
        </div>

        {/* Carrousel */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-1 w-1 rounded-full bg-gray-300" />
              <div className="h-1 w-1 rounded-full bg-gray-300" />
              <div className="h-1 w-1 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
