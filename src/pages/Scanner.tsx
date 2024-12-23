import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertTriangle, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Scanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [showReportForm, setShowReportForm] = useState(false);

  const handleReport = () => {
    toast.success("Store reported successfully");
    setShowReportForm(false);
    // This would later connect to admin messaging system
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">QR Scanner</h2>
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                {isScanning ? (
                  <div className="text-sm text-gray-500">Camera feed would appear here</div>
                ) : (
                  <div className="text-sm text-gray-500">Click start to begin scanning</div>
                )}
              </div>
              <Button
                onClick={() => setIsScanning(!isScanning)}
                className="w-full"
              >
                {isScanning ? "Stop Scanning" : "Start Scanning"}
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Report Store</h2>
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowReportForm(!showReportForm)}
              >
                <AlertTriangle className="mr-2 h-4 w-4" />
                Report Issues
              </Button>
              {showReportForm && (
                <div className="space-y-4">
                  <textarea
                    className="w-full p-2 border rounded-md"
                    placeholder="Describe the issue..."
                    rows={4}
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleReport} className="flex-1">
                      Submit Report
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowReportForm(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <h3 className="font-medium flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Admin Communication
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Direct messaging with admin will be available here
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Scanner;