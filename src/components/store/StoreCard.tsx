import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Store } from "@/types/store";

interface StoreCardProps {
  store: Store;
  onGenerateQR: (store: Store) => void;
}

const StoreCard = ({ store, onGenerateQR }: StoreCardProps) => {
  return (
    <Card className="p-6">
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
            onClick={() => onGenerateQR(store)}
            className="w-full mt-4"
          >
            Generate QR Code
          </Button>
        )}
      </div>
    </Card>
  );
};

export default StoreCard;