import { useState } from "react";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface StoreHistory {
  id: string;
  name: string;
  address: string;
  status: "completed" | "pending" | "reported";
  date: string;
}

const Dashboard = () => {
  const [storeHistory] = useState<StoreHistory[]>([
    {
      id: "1",
      name: "Store A",
      address: "123 Main St, City, State",
      status: "completed",
      date: "2024-02-20",
    },
    {
      id: "2",
      name: "Store B",
      address: "456 Oak Ave, City, State",
      status: "pending",
      date: "2024-02-21",
    },
    {
      id: "3",
      name: "Store C",
      address: "789 Pine St, City, State",
      status: "reported",
      date: "2024-02-22",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending">Pending Stores</TabsTrigger>
            <TabsTrigger value="completed">Completed Stores</TabsTrigger>
            <TabsTrigger value="reported">Reported Stores</TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            <div className="grid gap-4">
              {storeHistory
                .filter((store) => store.status === "pending")
                .map((store) => (
                  <Card key={store.id} className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{store.name}</h3>
                        <p className="text-sm text-gray-600">{store.address}</p>
                        <p className="text-sm text-gray-500">
                          Scheduled: {store.date}
                        </p>
                      </div>
                      <Badge variant="secondary">Pending</Badge>
                    </div>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid gap-4">
              {storeHistory
                .filter((store) => store.status === "completed")
                .map((store) => (
                  <Card key={store.id} className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{store.name}</h3>
                        <p className="text-sm text-gray-600">{store.address}</p>
                        <p className="text-sm text-gray-500">
                          Completed: {store.date}
                        </p>
                      </div>
                      <Badge variant="secondary">Completed</Badge>
                    </div>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="reported">
            <div className="grid gap-4">
              {storeHistory
                .filter((store) => store.status === "reported")
                .map((store) => (
                  <Card key={store.id} className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{store.name}</h3>
                        <p className="text-sm text-gray-600">{store.address}</p>
                        <p className="text-sm text-gray-500">
                          Reported: {store.date}
                        </p>
                      </div>
                      <Badge variant="destructive">Reported</Badge>
                    </div>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;