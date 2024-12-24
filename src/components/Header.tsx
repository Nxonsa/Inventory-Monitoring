import { Menu, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const AgentNavItems = () => (
    <>
      <DropdownMenuItem onClick={() => navigate("/dashboard")}>
        Dashboard
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => navigate("/scanner")}>
        Scanner
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => navigate("/profile")}>
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem onClick={handleLogout}>
        Logout
      </DropdownMenuItem>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav className="flex flex-col space-y-2 mt-6">
                <DropdownMenu>
                  <DropdownMenuContent className="w-full">
                    <AgentNavItems />
                  </DropdownMenuContent>
                </DropdownMenu>
              </nav>
            </SheetContent>
          </Sheet>
          <h1 className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            StockGuard
          </h1>
          
          {/* Demo Quick Access Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-4">
                Demo Quick Access <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => navigate("/")}>
                Home
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/store-owner")}>
                Store Owner
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/scanner")}>
                Scanner
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/admin")}>
                Admin
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/login")}>
                Login
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/signup")}>
                Signup
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-6">
          {userRole === "store-owner" ? (
            <Button
              variant="ghost"
              className="text-sm"
              onClick={() => navigate("/store-owner")}
            >
              Manage Stores
            </Button>
          ) : userRole === "admin" ? (
            <Button
              variant="ghost"
              className="text-sm"
              onClick={() => navigate("/admin")}
            >
              Admin Dashboard
            </Button>
          ) : (
            <>
              <Button
                variant="ghost"
                className="text-sm"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </Button>
              <Button
                variant="ghost"
                className="text-sm"
                onClick={() => navigate("/scanner")}
              >
                Scanner
              </Button>
            </>
          )}
          <Button
            variant="ghost"
            className="text-sm"
            onClick={() => navigate("/profile")}
          >
            Profile
          </Button>
          <Button variant="ghost" className="text-sm" onClick={handleLogout}>
            Logout
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;