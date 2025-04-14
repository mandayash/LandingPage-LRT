import Image from "next/image";
import SearchDropdown from "./SearchDropdown";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-hero.png"
          alt="LRT Hero Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-[60vh] flex flex-col items-center justify-center px-4">
        <p className="text-white/90 mb-12 mt-20"></p>

        {/* Main Heading */}
        <h1
          className="font-poppins font-bold text-white text-center
                text-3xl md:text-4xl lg:text-5xl
                leading-[150%] tracking-[0.5px]
                max-w-3xl mb-12"
        >
          Solusi Transportasi Modern
          <br />
          untuk Mobilitas Lebih Mudah!
        </h1>

        {/* Search Barn */}
        <div className="mb-24 md:mb-0 w-full max-w-md">
          <SearchDropdown />
        </div>
      </div>
    </section>
  );
};

export default Hero;
