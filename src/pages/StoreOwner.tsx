import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface Store {
  id: string;
  name: string;
  ownerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  idNumber: string;
  qrCode?: string;
}

const StoreOwner = () => {
  const navigate = useNavigate();
  const [stores, setStores] = useState<Store[]>([]);
  const [newStore, setNewStore] = useState<Omit<Store, "id" | "qrCode">>({
    name: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    idNumber: "",
  });

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  const generateQRCode = (store: Store) => {
    if (store.qrCode) {
      toast.error("QR code already generated for this store");
      return;
    }

    const qrData = {
      storeId: store.id,
      storeName: store.name,
      location: {
        address: store.address,
        city: store.city,
        state: store.state,
        zipCode: store.zipCode,
      },
      timestamp: new Date().toISOString(),
    };

    const updatedStores = stores.map((s) =>
      s.id === store.id ? { ...s, qrCode: JSON.stringify(qrData) } : s
    );

    setStores(updatedStores);
    toast.success("QR code generated successfully");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewStore((prev) => ({ ...prev, [name]: value }));
  };

  const addStore = () => {
    const requiredFields = ["name", "ownerName", "email", "phone", "address", "city", "state", "zipCode"];
    const missingFields = requiredFields.filter(field => !newStore[field as keyof typeof newStore]);
    
    if (missingFields.length > 0) {
      toast.error(`Please fill in all required fields: ${missingFields.join(", ")}`);
      return;
    }

    const newStoreData: Store = {
      ...newStore,
      id: crypto.randomUUID(),
    };

    setStores([...stores, newStoreData]);
    setNewStore({
      name: "",
      ownerName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    });
    toast.success("Store added successfully");
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Store Management</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Add New Store</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Store Name</Label>
              <Input
                id="name"
                name="name"
                value={newStore.name}
                onChange={handleInputChange}
                placeholder="Enter store name"
              />
            </div>
            <div>
              <Label htmlFor="ownerName">Owner Name</Label>
              <Input
                id="ownerName"
                name="ownerName"
                value={newStore.ownerName}
                onChange={handleInputChange}
                placeholder="Enter owner name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={newStore.email}
                onChange={handleInputChange}
                placeholder="Enter email"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={newStore.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                value={newStore.address}
                onChange={handleInputChange}
                placeholder="Enter street address"
              />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                value={newStore.city}
                onChange={handleInputChange}
                placeholder="Enter city"
              />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                name="state"
                value={newStore.state}
                onChange={handleInputChange}
                placeholder="Enter state"
              />
            </div>
            <div>
              <Label htmlFor="zipCode">ZIP Code</Label>
              <Input
                id="zipCode"
                name="zipCode"
                value={newStore.zipCode}
                onChange={handleInputChange}
                placeholder="Enter ZIP code"
              />
            </div>
            <div>
              <Label htmlFor="idNumber">ID/Passport Number</Label>
              <Input
                id="idNumber"
                name="idNumber"
                value={newStore.idNumber}
                onChange={handleInputChange}
                placeholder="Enter ID or Passport number"
              />
            </div>
          </div>
          <Button onClick={addStore} className="mt-6">
            Add Store
          </Button>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {stores.map((store) => (
            <Card key={store.id} className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{store.name}</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><span className="font-medium">Owner:</span> {store.ownerName}</p>
                  <p><span className="font-medium">ID/Passport:</span> {store.idNumber}</p>
                  <p><span className="font-medium">Email:</span> {store.email}</p>
                  <p><span className="font-medium">Phone:</span> {store.phone}</p>
                  <p><span className="font-medium">Address:</span> {store.address}</p>
                  <p><span className="font-medium">Location:</span> {store.city}, {store.state} {store.zipCode}</p>
                </div>
                {store.qrCode ? (
                  <div className="flex flex-col items-center mt-4">
                    <QRCodeSVG value={store.qrCode} size={200} />
                    <p className="mt-2 text-sm text-gray-500">QR Code Generated</p>
                  </div>
                ) : (
                  <Button
                    onClick={() => generateQRCode(store)}
                    className="w-full mt-4"
                  >
                    Generate QR Code
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreOwner;
