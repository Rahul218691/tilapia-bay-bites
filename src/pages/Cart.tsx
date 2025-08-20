import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import grilledTilapia from "@/assets/grilled-tilapia.jpg";
import tilapiaCurry from "@/assets/tilapia-curry.jpg";

// Mock cart data
const cartItems = [
  {
    id: 1,
    name: "Grilled Tilapia with Herbs",
    price: 24.99,
    quantity: 2,
    image: grilledTilapia
  },
  {
    id: 2,
    name: "Tilapia Curry",
    price: 22.99,
    quantity: 1,
    image: tilapiaCurry
  }
];

const Cart = () => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const delivery = 4.99;
  const total = subtotal + tax + delivery;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-deep-blue mb-8">Your Cart</h1>
          
          {cartItems.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-deep-blue mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-6">Add some delicious tilapia dishes to get started!</p>
                <Button variant="ocean" size="lg">
                  Browse Menu
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full sm:w-20 h-32 sm:h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-deep-blue text-sm sm:text-base">{item.name}</h3>
                          <p className="text-coral font-bold text-lg">${item.price}</p>
                        </div>
                        <div className="flex items-center justify-between w-full sm:w-auto sm:flex-col sm:items-end space-y-2">
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="icon" className="h-8 w-8">
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button variant="outline" size="icon" className="h-8 w-8">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="xl:col-span-1">
                <Card className="sticky top-20">
                  <CardHeader>
                    <CardTitle className="text-lg">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Delivery</span>
                      <span>${delivery.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-base sm:text-lg">
                      <span>Total</span>
                      <span className="text-coral">${total.toFixed(2)}</span>
                    </div>
                    <Button variant="ocean" className="w-full" size="lg">
                      Proceed to Checkout
                    </Button>
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;