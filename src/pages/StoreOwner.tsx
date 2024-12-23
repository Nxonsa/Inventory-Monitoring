import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface Store {
  id: string;
  name: string;
  qrCode?: string;
}

const StoreOwner = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [newStoreName, setNewStoreName] = useState("");
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const generateQRCode = (store: Store) => {
    if (store.qrCode) {
      toast.error("QR code already generated for this store");
      return;
    }

    const qrData = {
      storeId: store.id,
      storeName: store.name,
      timestamp: new Date().toISOString(),
    };

    const updatedStores = stores.map((s) =>
      s.id === store.id ? { ...s, qrCode: JSON.stringify(qrData) } : s
    );

    setStores(updatedStores);
    toast.success("QR code generated successfully");
  };

  const addStore = () => {
    if (!newStoreName.trim()) {
      toast.error("Please enter a store name");
      return;
    }

    const newStore: Store = {
      id: crypto.randomUUID(),
      name: newStoreName.trim(),
    };

    setStores([...stores, newStore]);
    setNewStoreName("");
    toast.success("Store added successfully");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Store Management</h1>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Add New Store</h2>
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="storeName">Store Name</Label>
              <Input
                id="storeName"
                value={newStoreName}
                onChange={(e) => setNewStoreName(e.target.value)}
                placeholder="Enter store name"
              />
            </div>
            <Button
              onClick={addStore}
              className="mt-6"
            >
              Add Store
            </Button>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {stores.map((store) => (
            <Card key={store.id} className="p-6">
              <h3 className="text-lg font-semibold mb-4">{store.name}</h3>
              {store.qrCode ? (
                <div className="flex flex-col items-center">
                  <QRCodeSVG value={store.qrCode} size={200} />
                  <p className="mt-2 text-sm text-gray-500">QR Code Generated</p>
                </div>
              ) : (
                <Button
                  onClick={() => generateQRCode(store)}
                  className="w-full"
                >
                  Generate QR Code
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreOwner;