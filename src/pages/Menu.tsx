import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import grilledTilapia from "@/assets/grilled-tilapia.jpg";
import tilapiaCurry from "@/assets/tilapia-curry.jpg";
import friedTilapia from "@/assets/fried-tilapia.jpg";

const menuItems = [
  {
    id: 1,
    name: "Grilled Tilapia with Herbs",
    description: "Fresh tilapia grilled to perfection with Mediterranean herbs and vegetables. Served with lemon rice.",
    price: 24.99,
    image: grilledTilapia,
    category: "Grilled"
  },
  {
    id: 2,
    name: "Tilapia Curry",
    description: "Aromatic curry with tender tilapia pieces, coconut milk, and traditional spices. Served with basmati rice.",
    price: 22.99,
    image: tilapiaCurry,
    category: "Curry"
  },
  {
    id: 3,
    name: "Crispy Fried Tilapia",
    description: "Golden crispy tilapia with our secret seasoning blend. Served with tartar sauce and crispy fries.",
    price: 21.99,
    image: friedTilapia,
    category: "Fried"
  },
  {
    id: 4,
    name: "Tilapia Fish Tacos",
    description: "Soft shell tacos filled with seasoned tilapia, fresh slaw, and chipotle sauce.",
    price: 18.99,
    image: grilledTilapia,
    category: "Mexican"
  },
  {
    id: 5,
    name: "Blackened Tilapia",
    description: "Cajun-spiced tilapia with a bold, smoky flavor. Served with dirty rice and green beans.",
    price: 23.99,
    image: friedTilapia,
    category: "Cajun"
  },
  {
    id: 6,
    name: "Tilapia Ceviche",
    description: "Fresh tilapia cured in citrus juices with onions, cilantro, and jalapeños.",
    price: 16.99,
    image: tilapiaCurry,
    category: "Raw"
  }
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-deep-blue mb-4">Our Menu</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted tilapia dishes, made with the freshest fish and finest ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-ocean transition-all duration-300 group">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl text-deep-blue">{item.name}</CardTitle>
                  <span className="text-sm bg-seafoam text-ocean px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <div className="text-2xl font-bold text-coral">${item.price}</div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="ocean" className="w-full" size="lg">
                  <Plus className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Menu;