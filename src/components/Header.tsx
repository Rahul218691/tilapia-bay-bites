import { Button } from "@/components/ui/button";
import { Fish, Menu, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Fish className="h-6 w-6 text-ocean" />
          <span className="text-xl font-bold text-deep-blue">TilapiaBay</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-ocean ${
              location.pathname === "/" ? "text-ocean" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className={`text-sm font-medium transition-colors hover:text-ocean ${
              location.pathname === "/menu" ? "text-ocean" : "text-muted-foreground"
            }`}
          >
            Menu
          </Link>
          <Link 
            to="/live-fish" 
            className={`text-sm font-medium transition-colors hover:text-ocean ${
              location.pathname === "/live-fish" ? "text-ocean" : "text-muted-foreground"
            }`}
          >
            Live Fish
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-coral text-xs text-white rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;