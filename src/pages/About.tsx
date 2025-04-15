
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-ducky-cream">
      <Header />
      
      <main>
        <section className="py-16 px-4 md:px-8 bg-ducky-yellow">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Our Rubber Ducky Story</h1>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              Founded in 2021, Rubber Ducky Drink Co. is on a mission to bring joy, flavor, and fun 
              to the non-alcoholic beverage market.
            </p>
          </div>
        </section>
        
        <section className="py-16 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-black">Why Rubber Ducky?</h2>
                <p className="text-lg text-black/70 mb-4">
                  Remember the simple joy a little rubber duck brings to bath time? That's exactly 
                  the feeling we wanted to capture in our beverages - happiness, playfulness, and 
                  unexpected delight.
                </p>
                <p className="text-lg text-black/70 mb-4">
                  Our founder, Alex, was looking for a premium non-alcoholic option that didn't feel 
                  like a compromise. During a particularly stressful day, Alex found comfort in a 
                  relaxing bath - complete with a rubber duck floating nearby. That moment of simple 
                  joy sparked the idea: what if we could bottle that same feeling?
                </p>
                <p className="text-lg text-black/70">
                  Today, Rubber Ducky Drink Co. creates beverages that bring a smile to your face 
                  with every sip, proving that you don't need alcohol to have a sophisticated and 
                  enjoyable drinking experience.
                </p>
              </div>
              
              <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <img 
                    src="/images/logo.svg" 
                    alt="Rubber Ducky Logo" 
                    className="w-40 h-40 mx-auto mb-4" 
                  />
                  <p className="text-black/70">Founder Photo Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 md:px-8 bg-ducky-yellow/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-black">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-black">Quality Ingredients</h3>
                <p className="text-black/70">
                  We use only the finest ingredients, crafting beverages with real fruit extracts, 
                  natural flavors, and thoughtfully sourced components that deliver exceptional taste.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-black">Inclusivity</h3>
                <p className="text-black/70">
                  We believe everyone deserves to participate in social drinking rituals with something 
                  special in their glass, regardless of whether they consume alcohol.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-black">Playful Sophistication</h3>
                <p className="text-black/70">
                  We craft beverages that are sophisticated in flavor but delivered with a playful spirit. 
                  Premium doesn't have to be pretentious.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 md:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <img 
                    src="/images/products/yellow-can.png" 
                    alt="Rubber Ducky Product" 
                    className="h-64 mx-auto" 
                  />
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-black">Our Process</h2>
                <p className="text-lg text-black/70 mb-4">
                  Creating the perfect non-alcoholic beverage is both an art and a science. Our drinks are 
                  formulated by expert mixologists and food scientists who understand how to deliver complex 
                  flavor profiles without alcohol.
                </p>
                <p className="text-lg text-black/70 mb-4">
                  We begin with identifying the key notes we want to highlight, then work backward to create 
                  a balanced formula using natural extracts, botanical infusions, and carefully calibrated 
                  sweetness levels.
                </p>
                <p className="text-lg text-black/70">
                  Each flavor undergoes extensive taste testing with diverse panels to ensure it delivers 
                  a remarkable experience worthy of your glass. We don't release anything that doesn't bring 
                  a smile to our faces - or yours!
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 md:px-8 bg-ducky-red">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Join the Ducky Team</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              We're always looking for passionate, creative people to join our growing team. 
              If you're excited about transforming the non-alcoholic beverage space, we'd love to hear from you!
            </p>
            <Button variant="yellow" size="lg">View Open Positions</Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
