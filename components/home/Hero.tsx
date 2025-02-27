import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search} from "lucide-react"

const Hero = () => {
    return (
        <section className="relative min-h-[50vh]">
            {/* Background Image */}
            <div className="absolute-inset-0">
                <Image src="/images/bg-hero.png" alt="LRT Hero Background" fill className="object-cover"/>
                <div className="absolute inset-0 bg-black/70"/>
            </div>

            {/* Content */}
            <div className="relative h-[50vh] flex flex-col items-center justify-center px-4">
                <p className="text-white/90 mb-12">
                LRT Sumatera Selatan
                </p>

                {/* Main Heading */}
                <h1 className="font-poppins font-bold text-white text-center
                text-3xl md:text-4xl lg:text;[48px]
                leading-[150%] tracking-[0.5px]
                max-w-3xl mb-12">
                    Solusi Transportasi Modern
                    <br/>
                    untuk Mobilitas Lebih Mudah!
                </h1>

                {/* Search Bar */}
                <div className="
                relative 
                w-full max-w-md 
                flex items-center
                ">
                <Input
                    type="text"
                    placeholder="Jadwal kereta terdekat?"
                    className="
                    pl-4 pr-12
                    py-6
                    bg-white/90 
                    backdrop-blur-sm
                    text-gray-800
                    placeholder:text-gray-500
                    w-full
                    rounded-full
                    focus:ring-2 focus:ring-primary
                    hidden md:block
                    "
                />
                {/* Search Icon */}
                <button className="
                    md:absolute md:right-4
                    p-3 md:p-2
                    bg-primary md:bg-transparent
                    rounded-full md:rounded-none
                    text-white md:text-gray-600
                    hover:bg-primary/90 md:hover:bg-transparent
                    transition-colors
                ">
                    <Search className="w-6 h-6" />
                </button>
                </div>
            </div>
    </section>
  )
}

export default Hero

