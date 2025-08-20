import { Fish, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-blue text-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Fish className="h-6 w-6 text-ocean" />
              <span className="text-xl font-bold">TilapiaBay</span>
            </div>
            <p className="text-sm text-background/80">
              Fresh tilapia fish and delicious recipes delivered to your door.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-background/80 hover:text-ocean transition-colors">Home</a></li>
              <li><a href="/menu" className="text-background/80 hover:text-ocean transition-colors">Menu</a></li>
              <li><a href="/live-fish" className="text-background/80 hover:text-ocean transition-colors">Live Fish</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-ocean" />
                <span className="text-background/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-ocean" />
                <span className="text-background/80">info@tilapiabay.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-ocean" />
                <span className="text-background/80">123 Ocean Drive, Bay City</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Hours</h3>
            <div className="space-y-2 text-sm text-background/80">
              <p>Monday - Friday: 9AM - 8PM</p>
              <p>Saturday: 8AM - 9PM</p>
              <p>Sunday: 10AM - 6PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2024 TilapiaBay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;