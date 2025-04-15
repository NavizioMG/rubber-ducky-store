
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { locations } from "@/data/locations";

const StoreLocator = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredLocations = searchTerm
    ? locations.filter(
        location => 
          location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          location.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
          location.zipCode.includes(searchTerm)
      )
    : locations;
  
  return (
    <div className="min-h-screen bg-ducky-cream">
      <Header />
      
      <main className="container mx-auto py-12 px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black">Find Our Drinks</h1>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Rubber Ducky Drink Co. products are available at select retailers across the country. 
            Enter your city or zip code to find the nearest location.
          </p>
        </div>
        
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter City, State or Zip Code"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 h-12 border-ducky-red focus:ring-ducky-red"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ducky-red h-5 w-5" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-black">Store Locations</h2>
            
            {filteredLocations.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-black/70">No locations found. Try adjusting your search.</p>
              </div>
            ) : (
              <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
                {filteredLocations.map((location) => (
                  <div key={location.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="font-bold text-lg mb-1 text-black">{location.name}</h3>
                    <p className="text-black/70 mb-2">{location.address}</p>
                    <p className="text-black/70 mb-2">{location.city}, {location.state} {location.zipCode}</p>
                    <p className="text-black/70 mb-2">{location.phone}</p>
                    <p className="text-sm text-black/60 mb-3">{location.hours}</p>
                    <Button variant="outline" className="text-ducky-red border-ducky-red hover:bg-ducky-red/10">
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="bg-gray-200 rounded-lg h-[500px] flex items-center justify-center">
            <div className="text-center p-6">
              <MapPin className="h-16 w-16 text-ducky-red mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-black">Map Coming Soon!</h3>
              <p className="text-black/70">
                We're working on integrating an interactive map to help you find our products even easier.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-black">Can't Find Our Drinks Near You?</h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto mb-6">
            We're constantly expanding our availability. If you can't find our drinks locally, 
            you can always order directly from our online store with shipping available nationwide.
          </p>
          <Button variant="yellow" size="lg">Shop Online</Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StoreLocator;
