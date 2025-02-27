import Image from "next/image";
import Link from "next/link";

const AppPromo = () => {
    return (
        <section className="relative bg-primary overflow-hidden">
          {/* Background Circle/Semi-circle */}
            <svg 
            className="absolute left-0 bottom-0 md:block hidden"
            width="707" height="270" 
            viewBox="0 0 707 270" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M707 344C707 298.825 697.856 254.093 680.091 212.357C662.326 170.621 636.288 132.699 603.462 100.755C570.637 68.8119 531.667 43.473 488.779 26.1854C445.89 8.89782 399.922 -1.97465e-06 353.5 0C307.078 1.97465e-06 261.11 8.89783 218.221 26.1854C175.333 43.4731 136.363 68.8119 103.538 100.755C70.7122 132.699 44.6736 170.621 26.9086 212.357C9.14354 254.093 -4.05836e-06 298.825 0 344L707 344Z" 
            fill="url(#paint0_linear_9754_1763)"/>
            <defs>
              <linearGradient 
                id="paint0_linear_9754_1763" 
                x1="353.5" y1="0" 
                x2="353.5" y2="344" 
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CF0000"/>
                <stop offset="1" stopColor="#FF8080"/>
              </linearGradient>
            </defs>
          </svg>
    
          {/* Content Container */}
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* Left side - Mockup */}
              <div className="relative z-8 md:-left-16 md:-bottom-16">
                <Image
                  src="/images/mockup-lrt.png"
                  alt="LRT Apps Mockup"
                  width={700}
                  height={800}
                  className="w-full object-contain"
                />
              </div>
    
              {/* Right side - Content */}
              <div className="w-full md:w-1/2 text-white text-center md:text-left">
                <p className="text-lg mb-2">LRT Apps</p>
                <div className="h-[1.5px] w-16 bg-white mb-6 md:mx-0 mx-auto"></div>
                
                <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
                  Naik LRT,
                  <br />
                  Double UNTUNGNYAA!
                </h2>
                
                <p className="text-lg font-normal mb-8 text-gray-200">
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
                    className="w-auto h-12"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )
    }

export default AppPromo
