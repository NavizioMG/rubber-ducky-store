
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

export const ReviewSubmission = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for auth check and submission logic
    console.log("Review submission will be implemented with auth");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h3 className="text-xl font-bold mb-4">Write a Review</h3>
      <div className="bg-ducky-yellow/20 text-black p-4 rounded-md mb-6">
        <p className="text-sm">
          Note: You'll need to be logged in to submit a review. This feature will be enabled soon!
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Your Name</label>
          <Input type="text" placeholder="Enter your name" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="text-2xl focus:outline-none"
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setRating(star)}
              >
                <Star
                  className={`h-8 w-8 ${
                    star <= (hoveredRating || rating)
                      ? "fill-ducky-yellow text-ducky-yellow"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Your Review</label>
          <Textarea 
            placeholder="Share your thoughts about this product..."
            className="min-h-[120px]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Add Photos (Optional)
          </label>
          <Input
            type="file"
            accept="image/*"
            multiple
            className="cursor-pointer"
          />
          <p className="text-sm text-gray-500 mt-1">
            You can upload up to 3 images
          </p>
        </div>

        <Button type="submit" variant="red" className="w-full md:w-auto">
          Submit Review
        </Button>
      </form>
    </div>
  );
};
