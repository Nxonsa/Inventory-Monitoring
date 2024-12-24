import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Store, NewStore } from "@/types/store";
import StoreForm from "@/components/store/StoreForm";
import StoreCard from "@/components/store/StoreCard";

const StoreOwner = () => {
  const navigate = useNavigate();
  const [stores, setStores] = useState<Store[]>([]);
  const [newStore, setNewStore] = useState<NewStore>({
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
    const requiredFields = ["name", "ownerName", "email", "phone", "address", "city", "state", "zipCode", "idNumber"];
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
      idNumber: "", // Added this line to fix the build error
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
          <StoreForm
            newStore={newStore}
            onInputChange={handleInputChange}
            onSubmit={addStore}
          />
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {stores.map((store) => (
            <StoreCard
              key={store.id}
              store={store}
              onGenerateQR={generateQRCode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreOwner;