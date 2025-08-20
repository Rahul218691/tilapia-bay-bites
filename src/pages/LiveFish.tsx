import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Fish, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroTilapia from "@/assets/hero-tilapia.jpg";

const fishOptions = [
  {
    id: 1,
    name: "Fresh Live Tilapia",
    description: "Premium quality live tilapia, perfect for your own preparation. Sourced from sustainable farms.",
    weight: "1-2 lbs",
    price: 12.99,
    unit: "per lb",
    availability: "In Stock",
    image: heroTilapia
  },
  {
    id: 2,
    name: "Large Live Tilapia",
    description: "Bigger sized live tilapia for family meals. Fresh from our sustainable aquaculture farms.",
    weight: "2-3 lbs",
    price: 11.99,
    unit: "per lb",
    availability: "In Stock",
    image: heroTilapia
  },
  {
    id: 3,
    name: "Jumbo Live Tilapia",
    description: "Extra large tilapia for special occasions. Premium quality with excellent taste.",
    weight: "3+ lbs",
    price: 14.99,
    unit: "per lb",
    availability: "Limited Stock",
    image: heroTilapia
  }
];

const LiveFish = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-deep-blue mb-4">Fresh Live Tilapia</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get the freshest live tilapia delivered directly to your door. Perfect for those who prefer to prepare their fish at home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {fishOptions.map((fish) => (
            <Card key={fish.id} className="overflow-hidden hover:shadow-ocean transition-all duration-300">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={fish.image} 
                    alt={fish.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg sm:text-xl text-deep-blue flex-1 mr-2">{fish.name}</CardTitle>
                  <Badge 
                    variant={fish.availability === "In Stock" ? "default" : "secondary"}
                    className={`${fish.availability === "In Stock" ? "bg-ocean" : "bg-coral"} text-xs whitespace-nowrap`}
                  >
                    {fish.availability === "Limited Stock" ? (
                      <span className="hidden sm:inline">Limited Stock</span>
                    ) : (
                      fish.availability
                    )}
                    {fish.availability === "Limited Stock" && (
                      <span className="sm:hidden">Limited</span>
                    )}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{fish.description}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
                  <div className="text-sm text-muted-foreground">
                    Weight: <span className="font-medium text-deep-blue">{fish.weight}</span>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-xl sm:text-2xl font-bold text-coral">${fish.price}</div>
                    <div className="text-sm text-muted-foreground">{fish.unit}</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="ocean" className="w-full" size="lg">
                  <Fish className="w-4 h-4 mr-2" />
                  Order Live Fish
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <Card className="bg-gradient-seafoam border-ocean/20">
          <CardContent className="p-8 text-center">
            <Truck className="w-12 h-12 text-ocean mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-deep-blue mb-4">Fresh Delivery Guarantee</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We ensure all live tilapia are delivered fresh and healthy. Our specialized transport maintains optimal conditions 
              for live fish delivery within 24 hours of your order.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-semibold text-deep-blue">Same Day Delivery</div>
                <div className="text-sm text-muted-foreground">Orders placed before 2PM</div>
              </div>
              <div>
                <div className="font-semibold text-deep-blue">Temperature Controlled</div>
                <div className="text-sm text-muted-foreground">Optimal transport conditions</div>
              </div>
              <div>
                <div className="font-semibold text-deep-blue">100% Fresh Guarantee</div>
                <div className="text-sm text-muted-foreground">Or full refund</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default LiveFish;