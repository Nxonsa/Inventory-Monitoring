import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, Package } from "lucide-react";

interface StockCardProps {
  name: string;
  quantity: number;
  expiryDate: string;
  status: "active" | "expiring" | "expired";
}

const StockCard = ({ name, quantity, expiryDate, status }: StockCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success-light text-success-dark";
      case "expiring":
        return "bg-warning-light text-warning-dark";
      case "expired":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <Card className="p-6 backdrop-blur-lg bg-white/80 hover:bg-white/90 transition-all duration-300 border border-gray-200/50 shadow-sm hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <Badge className={getStatusColor(status)} variant="secondary">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        </div>
        <Package className="h-6 w-6 text-gray-400" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Quantity</p>
          <p className="text-lg font-medium text-gray-900">{quantity}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Expiry</p>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4 text-gray-400" />
            <p className="text-sm font-medium text-gray-900">{expiryDate}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StockCard;