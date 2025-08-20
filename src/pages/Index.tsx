import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Fish, Utensils, Truck, Star, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroTilapia from "@/assets/hero-tilapia.jpg";
import grilledTilapia from "@/assets/grilled-tilapia.jpg";
import tilapiaCurry from "@/assets/tilapia-curry.jpg";
import friedTilapia from "@/assets/fried-tilapia.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="absolute inset-0">
          <img 
            src={heroTilapia} 
            alt="Fresh Tilapia" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Fresh <span className="text-coral">Tilapia</span><br />
            Delivered Daily
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Experience the finest tilapia fish and expertly crafted dishes. From live fish to restaurant-quality meals, 
            we bring the ocean's best to your table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/live-fish">
              <Button variant="coral" size="xl" className="min-w-48">
                <Fish className="w-5 h-5 mr-2" />
                Buy Live Fish
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="seafoam" size="xl" className="min-w-48">
                <Utensils className="w-5 h-5 mr-2" />
                Check Our Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-seafoam/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">Why Choose TilapiaBay?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to bringing you the freshest tilapia and most delicious dishes with unmatched quality and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-ocean/20 hover:shadow-ocean transition-all duration-300">
              <CardContent className="p-8">
                <Truck className="w-12 h-12 text-ocean mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-deep-blue mb-3">Fresh Delivery</h3>
                <p className="text-muted-foreground">
                  Same-day delivery of live fish and prepared meals. Temperature-controlled transport ensures peak freshness.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-ocean/20 hover:shadow-ocean transition-all duration-300">
              <CardContent className="p-8">
                <Star className="w-12 h-12 text-ocean mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-deep-blue mb-3">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Sustainably sourced tilapia from certified farms. Every fish meets our strict quality standards.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-ocean/20 hover:shadow-ocean transition-all duration-300">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-ocean mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-deep-blue mb-3">100% Guarantee</h3>
                <p className="text-muted-foreground">
                  Not satisfied? We offer a full refund. Your satisfaction is our top priority.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">Featured Dishes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular tilapia preparations, crafted by expert chefs using traditional and modern techniques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-ocean transition-all duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={grilledTilapia} 
                  alt="Grilled Tilapia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-deep-blue mb-2">Grilled Tilapia with Herbs</h3>
                <p className="text-muted-foreground mb-4">
                  Mediterranean-style grilled tilapia with fresh herbs and seasonal vegetables.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-coral">$24.99</span>
                  <Button variant="ocean">Order Now</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-ocean transition-all duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={tilapiaCurry} 
                  alt="Tilapia Curry"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-deep-blue mb-2">Aromatic Tilapia Curry</h3>
                <p className="text-muted-foreground mb-4">
                  Rich coconut curry with tender tilapia and authentic spices.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-coral">$22.99</span>
                  <Button variant="ocean">Order Now</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-ocean transition-all duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={friedTilapia} 
                  alt="Fried Tilapia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-deep-blue mb-2">Crispy Fried Tilapia</h3>
                <p className="text-muted-foreground mb-4">
                  Golden crispy coating with our signature seasoning blend.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-coral">$21.99</span>
                  <Button variant="ocean">Order Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/menu">
              <Button variant="outline" size="lg">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-ocean text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust TilapiaBay for the freshest fish and most delicious meals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button variant="coral" size="xl">
                <Utensils className="w-5 h-5 mr-2" />
                Order Food Now
              </Button>
            </Link>
            <Link to="/live-fish">
              <Button variant="seafoam" size="xl">
                <Fish className="w-5 h-5 mr-2" />
                Buy Fresh Fish
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
