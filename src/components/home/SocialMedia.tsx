
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const SocialMedia = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-ducky-yellow/30">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">Stay with us on Social Media!</h2>
        <p className="text-lg text-black/70 mb-8 max-w-2xl mx-auto">
          Follow us for the latest product updates, behind-the-scenes content, and #DuckyMoments from our community.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button className="bg-[#1877F2] hover:bg-[#1877F2]/90">
            <Facebook className="mr-2 h-5 w-5" />
            Facebook
          </Button>
          <Button className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90">
            <Twitter className="mr-2 h-5 w-5" />
            Twitter
          </Button>
          <Button className="bg-[#E4405F] hover:bg-[#E4405F]/90">
            <Instagram className="mr-2 h-5 w-5" />
            Instagram
          </Button>
          <Button className="bg-[#FF0000] hover:bg-[#FF0000]/90">
            <Youtube className="mr-2 h-5 w-5" />
            YouTube
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* This would typically be filled with actual Instagram images */}
          {Array(4).fill(0).map((_, i) => (
            <div 
              key={i} 
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
            >
              <div className="w-full h-full bg-gradient-to-br from-ducky-yellow/50 to-ducky-blue/30 flex items-center justify-center">
                <span className="text-black/50 text-sm">Instagram Image {i + 1}</span>
              </div>
            </div>
          ))}
        </div>
        
        <p className="mt-6 text-black/70 text-sm">
          Tag us @RubberDuckyDrinks or use #DuckyMoments to be featured!
        </p>
      </div>
    </section>
  );
};

export default SocialMedia;
