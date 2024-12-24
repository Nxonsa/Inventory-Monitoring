import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const PinVerification = () => {
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === "00085") {
      localStorage.setItem("pinVerified", "true");
      const intendedPath = localStorage.getItem("intendedPath") || "/";
      localStorage.removeItem("intendedPath");
      navigate(intendedPath);
      toast.success("PIN verified successfully");
    } else {
      toast.error("Incorrect PIN");
      setPin("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">Enter PIN</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN"
              className="text-center text-2xl tracking-widest"
              maxLength={5}
            />
          </div>
          <Button type="submit" className="w-full">
            Verify PIN
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default PinVerification;