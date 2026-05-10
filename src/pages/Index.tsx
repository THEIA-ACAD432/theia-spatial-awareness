import Nav from "@/components/theia/Nav";
import Hero from "@/components/theia/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Index;
