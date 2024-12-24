export interface Store {
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

export type NewStore = Omit<Store, "id" | "qrCode">;