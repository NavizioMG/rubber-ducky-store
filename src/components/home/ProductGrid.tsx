
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

export const ProductGrid = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-ducky-cream">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-black">CHOOSE YOUR DUCKIES</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-black/70">
          Explore our full range of refreshing non-alcoholic beverages. Find your perfect flavor companion!
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
              <Link to={`/products/${product.slug}`} className="block p-4">
                <div className="h-48 flex items-center justify-center mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg mb-1 text-black">{product.name}</h3>
                <p className="text-black/70 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-black">${product.price.toFixed(2)}</span>
                  <Button variant="red" size="sm" className="rounded-full">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
