
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { NewsletterSubmitProps } from "./types";
import { Check } from "lucide-react";

export const NewsletterSignup = ({ source = 'footer' }: { source?: NewsletterSubmitProps['source'] }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSuccess(true);
    setEmail("");
    
    toast({
      title: "Successfully subscribed!",
      description: "Welcome to our newsletter. Check your inbox soon!",
      duration: 3000,
    });

    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={isSuccess ? "pr-10" : ""}
          disabled={isLoading}
        />
        {isSuccess && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Check className="h-5 w-5 text-green-500" />
          </div>
        )}
      </div>
      <Button 
        type="submit" 
        variant="yellow"
        disabled={isLoading || isSuccess}
      >
        {isLoading ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  );
};
