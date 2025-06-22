
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programmer from "./pages/Programmer";
import Music from "./pages/Music";
import TechLeader from "./pages/TechLeader";
import Teacher from "./pages/Teacher";
import Athlete from "./pages/Athlete";
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
          <Route path="/programmer" element={<Programmer />} />
          <Route path="/music" element={<Music />} />
          <Route path="/tech-leader" element={<TechLeader />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/athlete" element={<Athlete />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
