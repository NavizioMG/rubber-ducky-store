
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccountOrders } from "@/components/account/AccountOrders";
import { AccountSubscriptions } from "@/components/account/AccountSubscriptions";
import { AccountReviews } from "@/components/account/AccountReviews";
import { AccountSettings } from "@/components/account/AccountSettings";

const AccountPage = () => {
  return (
    <div className="min-h-screen bg-ducky-cream">
      <Header />
      <main className="container mx-auto py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-black">My Account</h1>
          
          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="orders">
              <AccountOrders />
            </TabsContent>
            
            <TabsContent value="subscriptions">
              <AccountSubscriptions />
            </TabsContent>
            
            <TabsContent value="reviews">
              <AccountReviews />
            </TabsContent>
            
            <TabsContent value="settings">
              <AccountSettings />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccountPage;
