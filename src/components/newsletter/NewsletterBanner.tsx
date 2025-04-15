
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export const NewsletterBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-ducky-yellow p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-black font-semibold">Get 10% off your first order!</h3>
          <p className="text-sm text-black/70">
            Subscribe to our newsletter for exclusive deals and updates.
          </p>
        </div>
        <div className="flex flex-1 gap-2">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 bg-white"
          />
          <Button variant="red">Subscribe</Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
