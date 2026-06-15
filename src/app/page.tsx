import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <Hero />
        <Services />
        <About />
        <TechStack />
        <Contact />
      </div>

      <Footer />
      <WhatsAppIcon />
    </main>
  );
}
