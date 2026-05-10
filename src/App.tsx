import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Challenge from "./pages/Challenge.tsx";
import Product from "./components/theia/Product";
import Process from "./pages/Process.tsx";
import Team from "./pages/Team.tsx";
import Business from "./pages/Business.tsx";
import System from "./pages/System.tsx";
import References from "./pages/References.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/product" element={<Product />} />
          <Route path="/process" element={<Process />} />
          <Route path="/team" element={<Team />} />
          <Route path="/business" element={<Business />} />
          <Route path="/system" element={<System />} />
          <Route path="/references" element={<References />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
