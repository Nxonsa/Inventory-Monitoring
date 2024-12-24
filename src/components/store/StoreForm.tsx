import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NewStore } from "@/types/store";

interface StoreFormProps {
  newStore: NewStore;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const StoreForm = ({ newStore, onInputChange, onSubmit }: StoreFormProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="name">Store Name</Label>
        <Input
          id="name"
          name="name"
          value={newStore.name}
          onChange={onInputChange}
          placeholder="Enter store name"
        />
      </div>
      <div>
        <Label htmlFor="ownerName">Owner Name</Label>
        <Input
          id="ownerName"
          name="ownerName"
          value={newStore.ownerName}
          onChange={onInputChange}
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
          onChange={onInputChange}
          placeholder="Enter email"
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          value={newStore.phone}
          onChange={onInputChange}
          placeholder="Enter phone number"
        />
      </div>
      <div>
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          value={newStore.address}
          onChange={onInputChange}
          placeholder="Enter street address"
        />
      </div>
      <div>
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          name="city"
          value={newStore.city}
          onChange={onInputChange}
          placeholder="Enter city"
        />
      </div>
      <div>
        <Label htmlFor="state">State</Label>
        <Input
          id="state"
          name="state"
          value={newStore.state}
          onChange={onInputChange}
          placeholder="Enter state"
        />
      </div>
      <div>
        <Label htmlFor="zipCode">ZIP Code</Label>
        <Input
          id="zipCode"
          name="zipCode"
          value={newStore.zipCode}
          onChange={onInputChange}
          placeholder="Enter ZIP code"
        />
      </div>
      <div>
        <Label htmlFor="idNumber">ID/Passport Number</Label>
        <Input
          id="idNumber"
          name="idNumber"
          value={newStore.idNumber}
          onChange={onInputChange}
          placeholder="Enter ID or Passport number"
        />
      </div>
      <div className="md:col-span-2">
        <Button onClick={onSubmit} className="w-full mt-6">
          Add Store
        </Button>
      </div>
    </div>
  );
};

export default StoreForm;