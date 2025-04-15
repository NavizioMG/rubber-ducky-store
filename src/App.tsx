
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetail from "./pages/products/[slug]";
import StoreLocator from "./pages/StoreLocator";
import Recipes from "./pages/Recipes";
import Articles from "./pages/Articles";
import About from "./pages/About";
import WholesaleApplication from "./pages/wholesale/Apply";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/store-locator" element={<StoreLocator />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/wholesale/apply" element={<WholesaleApplication />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
