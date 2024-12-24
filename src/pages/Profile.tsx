import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const userEmail = localStorage.getItem("userEmail") || "";
  const userRole = localStorage.getItem("userRole") || "";

  // Demo agent details
  const agentDetails = {
    name: "John Doe",
    employeeNumber: "EMP-2024-001",
    email: userEmail,
    role: userRole,
    department: "Inventory Management",
    joinDate: "2024-01-15",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Card className="max-w-2xl mx-auto p-6">
          <div className="flex items-center space-x-6 mb-8">
            <Avatar className="h-24 w-24">
              <AvatarImage src="" />
              <AvatarFallback className="text-2xl">
                {agentDetails.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{agentDetails.name}</h1>
              <p className="text-gray-600">
                Employee #{agentDetails.employeeNumber}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Email</h3>
              <p className="text-gray-900">{agentDetails.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Role</h3>
              <p className="text-gray-900 capitalize">{agentDetails.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Department</h3>
              <p className="text-gray-900">{agentDetails.department}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Join Date</h3>
              <p className="text-gray-900">{agentDetails.joinDate}</p>
            </div>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;