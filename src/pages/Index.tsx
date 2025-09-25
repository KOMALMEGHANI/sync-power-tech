import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
