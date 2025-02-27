import Image from "next/image";
import Hero from "@/components/home/Hero"
import AppPromo from "@/components/home/AppPromo"
import AboutLRT from "@/components/home/AboutLRT"
export default function Home() {
  return (
    <main>
      {/* Section Hero untuk menguji navbar transparan */}
      <Hero />
      <AppPromo />
      <AboutLRT />
    </main>
  )
}