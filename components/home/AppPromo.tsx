import Image from "next/image";
import Link from "next/link";

const AppPromo = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Content Container */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Mockup Wrapper*/}
          <div className="lg:max-w-[45%] md:max-w-[70%] w-full flex items-end">
            <Image
              src="/images/mockup-lrt.png"
              alt="LRT Apps Mockup"
              width={600}
              height={700}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:max-w-[50%] text-white text-center lg:text-left">
            <p className="text-lg mb-2">LRT Apps</p>
            <div className="h-[1.5px] w-16 bg-white mb-6 mx-auto lg:mx-0"></div>

            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Naik LRT,
              <br />
              Double UNTUNGNYAA!
            </h2>

            <p className="text-base lg:text-lg font-normal mb-8 text-gray-200 max-w-md mx-auto lg:mx-0">
              Yuk download aplikasi dan dapatkan berbagai hadiah menarik
              dengan cara scan barcode tiketmu!
            </p>

            {/* Google Play Button */}
            <Link 
              href="https://play.google.com/store/apps/details?id=com.lrt.sumsel" 
              target="_blank"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <Image
                src="/images/google-play.png"
                alt="Get it on Google Play"
                width={200}
                height={60}
                className="w-auto h-10 md:h-12"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppPromo;
