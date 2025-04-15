
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { ProductGrid } from "@/components/home/ProductGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { Features } from "@/components/home/Features";
import { FAQ } from "@/components/home/FAQ";
import { SocialMedia } from "@/components/home/SocialMedia";

const Index = () => {
  return (
    <div className="min-h-screen bg-ducky-cream">
      <Header />
      <main>
        <Hero />
        <ProductCarousel />
        <ProductGrid />
        <Testimonials />
        <Features />
        <FAQ />
        <SocialMedia />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
