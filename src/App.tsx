import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPlayers from "./pages/SearchPlayers";
import PlayerProfile from "./pages/PlayerProfile";
import ComparePlayers from "./pages/ComparePlayers";
import AIScout from "./pages/AIScout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<><Navigation /><Home /></>} />
            <Route path="/search" element={<><Navigation /><SearchPlayers /></>} />
            <Route path="/player/:playerId" element={<><Navigation /><PlayerProfile /></>} />
            <Route path="/compare" element={<><Navigation /><ComparePlayers /></>} />
            <Route path="/ai-scout" element={<><Navigation /><AIScout /></>} />
            <Route path="/dashboard" element={<><Navigation /><Dashboard /></>} />
            <Route path="*" element={<><Navigation /><NotFound /></>} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
