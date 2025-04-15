
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join our Duck Club! 🦆</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-sm text-gray-600">
            Subscribe to our newsletter and get 10% off your first order, plus exclusive access to new flavors and special offers!
          </p>
          <form className="space-y-4">
            <Input type="email" placeholder="Enter your email" />
            <Button type="submit" variant="yellow" className="w-full">
              Subscribe Now
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
