import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Package, MapPin, Clock, CheckCircle, Truck, ChefHat } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import grilledTilapia from "@/assets/grilled-tilapia.jpg";
import tilapiaCurry from "@/assets/tilapia-curry.jpg";
import friedTilapia from "@/assets/fried-tilapia.jpg";

// Mock orders data
const orders = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "delivered",
    total: 72.97,
    items: [
      { name: "Grilled Tilapia with Herbs", quantity: 2, price: 24.99, image: grilledTilapia },
      { name: "Tilapia Curry", quantity: 1, price: 22.99, image: tilapiaCurry }
    ],
    deliveryAddress: "123 Ocean Drive, Bay City, BC 12345",
    estimatedDelivery: "Delivered on Jan 15, 2024"
  },
  {
    id: "ORD-002",
    date: "2024-01-18",
    status: "processing",
    total: 21.99,
    items: [
      { name: "Crispy Fried Tilapia", quantity: 1, price: 21.99, image: friedTilapia }
    ],
    deliveryAddress: "123 Ocean Drive, Bay City, BC 12345",
    estimatedDelivery: "Expected by Jan 19, 2024"
  },
  {
    id: "ORD-003",
    date: "2024-01-20",
    status: "pending",
    total: 47.98,
    items: [
      { name: "Grilled Tilapia with Herbs", quantity: 1, price: 24.99, image: grilledTilapia },
      { name: "Tilapia Curry", quantity: 1, price: 22.99, image: tilapiaCurry }
    ],
    deliveryAddress: "123 Ocean Drive, Bay City, BC 12345",
    estimatedDelivery: "Expected by Jan 21, 2024"
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "delivered":
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    case "processing":
      return <ChefHat className="w-4 h-4 text-orange-500" />;
    case "shipped":
      return <Truck className="w-4 h-4 text-blue-500" />;
    default:
      return <Clock className="w-4 h-4 text-gray-500" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "delivered":
      return "bg-green-100 text-green-800 border-green-200";
    case "processing":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "shipped":
      return "bg-blue-100 text-blue-800 border-blue-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const MyOrders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <Package className="w-8 h-8 text-ocean" />
            <h1 className="text-3xl font-bold text-deep-blue">My Orders</h1>
          </div>
          
          {orders.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-deep-blue mb-2">No orders yet</h3>
                <p className="text-muted-foreground mb-6">You haven't placed any orders yet. Start exploring our delicious menu!</p>
                <Button variant="ocean" size="lg">
                  Browse Menu
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <Card key={order.id} className="overflow-hidden">
                  <CardHeader className="bg-seafoam/30">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                      <div>
                        <CardTitle className="text-lg text-deep-blue">Order {order.id}</CardTitle>
                        <p className="text-sm text-muted-foreground">Placed on {new Date(order.date).toLocaleDateString()}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={`${getStatusColor(order.status)} flex items-center space-x-1`}>
                          {getStatusIcon(order.status)}
                          <span className="capitalize">{order.status}</span>
                        </Badge>
                        <span className="text-lg font-bold text-coral">${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Order Items */}
                      <div className="space-y-3">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex items-center space-x-4">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-deep-blue">{item.name}</h4>
                              <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                            </div>
                            <span className="font-semibold text-coral">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Separator />
                      
                      {/* Delivery Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-ocean" />
                            <span className="font-medium text-deep-blue">Delivery Address</span>
                          </div>
                          <p className="text-sm text-muted-foreground pl-6">{order.deliveryAddress}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-ocean" />
                            <span className="font-medium text-deep-blue">Delivery Status</span>
                          </div>
                          <p className="text-sm text-muted-foreground pl-6">{order.estimatedDelivery}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button variant="ocean" className="flex-1">
                          Track Order
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Reorder Items
                        </Button>
                        {order.status === "delivered" && (
                          <Button variant="outline" className="flex-1">
                            Write Review
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MyOrders;