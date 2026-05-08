import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index.tsx";
import SOC360 from "./pages/SOC360";
import RedTeaming from "./pages/RedTeaming";
import Contacto from "./pages/Contacto";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import PartnerPortal from "./pages/PartnerPortal";
import PartnerLogin from "./pages/PartnerLogin";
import CPCSIRT from "./pages/CPCSIRT";
import BrandProtection from "./pages/BrandProtection";
import Compliance from "./pages/Compliance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Catálogo de Servicios y Páginas */}
          <Route path="/soc-360" element={<SOC360 />} />
          <Route path="/red-teaming" element={<RedTeaming />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<PartnerPortal />} />
          <Route path="/partner-login" element={<PartnerLogin />} />
          <Route path="/cpc-sirt" element={<CPCSIRT />} />
          <Route path="/brand-protection" element={<BrandProtection />} />
          <Route path="/compliance" element={<Compliance />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
