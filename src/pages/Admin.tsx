import { useState } from "react";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare } from "lucide-react";

const Admin = () => {
  const [reports] = useState([
    {
      id: 1,
      storeName: "Store A",
      agentName: "John Doe",
      date: "2024-02-21",
      status: "pending",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <Tabs defaultValue="reports" className="space-y-6">
          <TabsList>
            <TabsTrigger value="reports">Reported Stores</TabsTrigger>
            <TabsTrigger value="messages">Agent Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="reports">
            <div className="grid gap-4">
              {reports.map((report) => (
                <Card key={report.id} className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{report.storeName}</h3>
                      <p className="text-sm text-gray-600">
                        Reported by: {report.agentName}
                      </p>
                      <p className="text-sm text-gray-500">
                        Date: {report.date}
                      </p>
                    </div>
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                      {report.status}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-5 w-5" />
                <h2 className="text-lg font-semibold">Agent Communications</h2>
              </div>
              <p className="text-gray-600">
                Messaging system will be implemented here
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;