import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            StockGuard
          </h1>
        </div>
        <nav className="hidden lg:flex items-center space-x-6">
          <Button variant="ghost" className="text-sm">
            Dashboard
          </Button>
          <Button variant="ghost" className="text-sm">
            Scanner
          </Button>
          <Button variant="ghost" className="text-sm">
            Profile
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;