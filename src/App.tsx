import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Process from "./pages/Process";
import Components from "./pages/Components";
import Games from "./pages/Games";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Quote from "./pages/Quote";
import Materials from "./pages/Materials";
import NotFound from "./pages/NotFound";
import { FloatingQuoteButton } from "./components/FloatingQuoteButton";

const queryClient = new QueryClient();

function AppContent() {
  const location = useLocation();
  const hideOnQuotePage = location.pathname === "/quote";

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/process" element={<Process />} />
        <Route path="/components" element={<Components />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/materials" element={<Materials />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideOnQuotePage && <FloatingQuoteButton />}
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
