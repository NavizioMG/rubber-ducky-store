
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      headline: "SIP, SIP, SUNSHINE WITH OUR REFRESHING DRINKS",
      subheading: "Premium non-alcoholic beverages with real ingredients and playful vibes. Perfect for any occasion!",
      ctaText: "Shop Now",
      ctaLink: "/products",
      image: "/images/products/yellow-can.png",
      bgColor: "bg-ducky-yellow"
    },
    {
      headline: "QUACK-TASTIC FLAVORS FOR EVERY MOOD",
      subheading: "Discover our range of delicious non-alcoholic drinks that bring joy to your day without the alcohol.",
      ctaText: "Explore Flavors",
      ctaLink: "/products",
      image: "/images/products/pink-can.png",
      bgColor: "bg-pink-300"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  const currentSlideData = slides[currentSlide];
  
  return (
    <section className={`${currentSlideData.bgColor} transition-colors duration-500`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px] px-4 md:px-8">
        <div className="flex flex-col justify-center py-16 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-4">
            {currentSlideData.headline}
          </h1>
          <p className="text-lg md:text-xl text-black/80 mb-8 max-w-lg">
            {currentSlideData.subheading}
          </p>
          <div>
            <Link to={currentSlideData.ctaLink}>
              <Button variant="red" size="xl" className="group">
                {currentSlideData.ctaText}
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="flex items-center justify-center order-1 md:order-2 py-8 md:py-0">
          <img
            src={currentSlideData.image}
            alt="Rubber Ducky Drink"
            className="max-h-[350px] md:max-h-[450px] object-contain animate-[float_6s_ease-in-out_infinite]"
            style={{
              animation: "float 6s ease-in-out infinite",
              filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1))"
            }}
          />
        </div>
      </div>
      
      <div className="flex justify-center pb-4 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-ducky-red" : "bg-black/20"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
