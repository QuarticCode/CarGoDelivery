import { About } from "../components/blocks/About";
import { Contact } from "../components/blocks/Contact";
import { Footer } from "../components/blocks/Footer";
import { Hero } from "../components/blocks/Hero";
import { Navbar } from "../components/blocks/Navbar";
import { Plans } from "../components/blocks/Plans";
import { Services } from "../components/blocks/Services";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
}
