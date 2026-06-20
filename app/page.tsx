import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <Services />
      <WhyChooseUs />
    </main>
  );
}
