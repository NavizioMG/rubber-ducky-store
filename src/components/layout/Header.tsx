
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-ducky-yellow sticky top-0 z-50 py-2 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Link to="/" className="flex items-center">
            <img src="/images/logo.svg" alt="Rubber Ducky Drink Co." className="h-12 mr-2" />
            <span className="text-black font-bold text-lg hidden sm:block">Rubber Ducky</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-black font-medium hover:text-ducky-red transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-black font-medium hover:text-ducky-red transition-colors">
            Shop
          </Link>
          <Link to="/recipes" className="text-black font-medium hover:text-ducky-red transition-colors">
            Recipes
          </Link>
          <Link to="/articles" className="text-black font-medium hover:text-ducky-red transition-colors">
            Articles
          </Link>
          <Link to="/about" className="text-black font-medium hover:text-ducky-red transition-colors">
            About Us
          </Link>
          <Link to="/store-locator" className="text-black font-medium hover:text-ducky-red transition-colors">
            Find Us
          </Link>
        </nav>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 bg-ducky-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ducky-yellow border-t border-black/10 py-4 px-6 z-50 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-black font-medium hover:text-ducky-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-black font-medium hover:text-ducky-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/recipes" 
              className="text-black font-medium hover:text-ducky-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Recipes
            </Link>
            <Link 
              to="/articles" 
              className="text-black font-medium hover:text-ducky-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Articles
            </Link>
            <Link 
              to="/about" 
              className="text-black font-medium hover:text-ducky-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/store-locator" 
              className="text-black font-medium hover:text-ducky-red transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
