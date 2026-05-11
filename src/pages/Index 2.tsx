import Nav from "@/components/theia/Nav";
import Hero from "@/components/theia/Hero";
import Marquee from "@/components/theia/Marquee";
import Product from "@/components/theia/Product";
import HowItWorks from "@/components/theia/HowItWorks";
import Challenge from "@/components/theia/Challenge";
import Footer from "@/components/theia/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Product />
        <HowItWorks />
        <Challenge />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
