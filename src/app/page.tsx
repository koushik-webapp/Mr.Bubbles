import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueComparison from "@/components/ValueComparison";
import Products from "@/components/Products";
import FreePump from "@/components/FreePump";
import BrandStrip from "@/components/BrandStrip";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ValueComparison />
      <Products />
      <FreePump />
      <BrandStrip />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
