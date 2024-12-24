import Header from "@/components/Header";
import Scanner from "@/components/Scanner";
import StockCard from "@/components/StockCard";
import Footer from "@/components/Footer";

const Index = () => {
  const stockItems = [
    {
      name: "Product A",
      quantity: 150,
      expiryDate: "2024-06-15",
      status: "active",
    },
    {
      name: "Product B",
      quantity: 75,
      expiryDate: "2024-03-30",
      status: "expiring",
    },
    {
      name: "Product C",
      quantity: 25,
      expiryDate: "2024-02-28",
      status: "expired",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Stock Overview</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {stockItems.map((item, index) => (
                  <StockCard key={index} {...item} />
                ))}
              </div>
            </section>
          </div>
          <div className="lg:col-span-1">
            <Scanner />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;