import { useState } from "react";
import { Camera } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Scanner = () => {
  const [isScanning, setIsScanning] = useState(false);

  return (
    <Card className="p-6 backdrop-blur-lg bg-white/80 border border-gray-200/50">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
          <Camera className="h-8 w-8 text-gray-600" />
        </div>
        <h3 className="text-lg font-medium">QR Code Scanner</h3>
        <p className="text-sm text-gray-500">
          Scan a QR code to check stock information
        </p>
        <Button
          onClick={() => setIsScanning(!isScanning)}
          className="w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600"
        >
          {isScanning ? "Stop Scanning" : "Start Scanning"}
        </Button>
      </div>
      {isScanning && (
        <div className="mt-6 aspect-square bg-black/5 rounded-lg flex items-center justify-center">
          <div className="text-sm text-gray-500">Camera feed would appear here</div>
        </div>
      )}
    </Card>
  );
};

export default Scanner;