
import { useState } from "react";
import { Star, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  getReviewsByProductId, 
  getAverageRating,
  getRatingCounts,
  Review
} from "@/data/reviews";

interface ProductReviewsProps {
  productId: string;
}

export const ProductReviews = ({ productId }: ProductReviewsProps) => {
  const [showForm, setShowForm] = useState(false);
  const reviews = getReviewsByProductId(productId);
  const averageRating = getAverageRating(productId);
  const ratingCounts = getRatingCounts(productId);
  
  const totalReviews = reviews.length;
  
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-8 text-black">Customer Reviews</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          {reviews.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-black/70">No reviews yet. Be the first to review this product!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
          
          <div className="mt-8">
            <Button 
              variant="yellow" 
              onClick={() => setShowForm(!showForm)}
              className="w-full md:w-auto"
            >
              {showForm ? "Cancel Review" : "Write a Review"}
            </Button>
            
            {showForm && (
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4 text-black">Share Your Experience</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="review-name">Your Name</Label>
                    <Input id="review-name" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="review-title">Review Title</Label>
                    <Input id="review-title" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label>Rating</Label>
                    <div className="flex space-x-1 mt-1">
                      {Array(5).fill(0).map((_, i) => (
                        <button key={i} className="text-gray-300 hover:text-ducky-red">
                          <Star className="h-6 w-6" />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="review-content">Your Review</Label>
                    <Textarea 
                      id="review-content" 
                      className="mt-1" 
                      rows={5} 
                      placeholder="Share your thoughts about this product..."
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="review-photos">Add Photos (optional)</Label>
                    <Input 
                      id="review-photos" 
                      type="file" 
                      className="mt-1" 
                      accept="image/*" 
                      multiple 
                    />
                  </div>
                  
                  <Button variant="red">Submit Review</Button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div>
          <div className="bg-ducky-yellow/20 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4 text-black">Overall Customer Reviews</h3>
            
            <div className="flex items-center mb-4">
              {Array(5).fill(0).map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-5 w-5 ${
                    i < Math.round(averageRating) 
                      ? "fill-ducky-red text-ducky-red" 
                      : "text-gray-300"
                  }`} 
                />
              ))}
              <span className="ml-2 font-bold text-black">
                {averageRating.toFixed(1)} out of 5
              </span>
            </div>
            
            <p className="text-sm text-black/70 mb-4">
              Based on {totalReviews} review{totalReviews !== 1 ? 's' : ''}
            </p>
            
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center">
                  <div className="w-12 text-sm text-black/70">{rating} star</div>
                  <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-ducky-red" 
                      style={{ 
                        width: `${totalReviews ? (ratingCounts[rating] / totalReviews) * 100 : 0}%` 
                      }}
                    ></div>
                  </div>
                  <div className="w-8 text-sm text-black/70 text-right">
                    {ratingCounts[rating]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="border-b border-gray-200 pb-6">
      <div className="flex items-center mb-3">
        <UserCircle2 className="h-10 w-10 text-gray-400 mr-3" />
        <div>
          <p className="font-semibold text-black">{review.name}</p>
          <p className="text-xs text-black/60">
            {new Date(review.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>
      
      <div className="flex mb-2">
        {Array(5).fill(0).map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${
              i < review.rating 
                ? "fill-ducky-red text-ducky-red" 
                : "text-gray-300"
            }`} 
          />
        ))}
      </div>
      
      <h4 className="font-bold text-black mb-2">{review.title}</h4>
      <p className="text-black/70 mb-4">{review.content}</p>
      
      {review.images && review.images.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {review.images.map((image, i) => (
            <div key={i} className="w-16 h-16 rounded overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-black/50 text-xs">Review Image</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductReviews;
