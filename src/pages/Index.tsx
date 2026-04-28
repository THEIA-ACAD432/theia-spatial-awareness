import Nav from "@/components/theia/Nav";
import Hero from "@/components/theia/Hero";
import Challenge from "@/components/theia/Challenge";
import HowItWorks from "@/components/theia/HowItWorks";
import Footer from "@/components/theia/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Challenge />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
