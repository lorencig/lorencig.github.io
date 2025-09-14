
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Publications from "./pages/Publications";
import Blog from "./pages/Blog";
import DeSci from "./pages/DeSci";
import Curriculum from "./pages/Curriculum";
import PhDProject from "./pages/phdproject";
import READ2025 from "./pages/READ2025";
import { ThemeProvider } from "./components/ThemeProvider";
import { useAnalytics } from "./hooks/use-analytics";

const queryClient = new QueryClient();

const AppContent = () => {
  // Initialize analytics tracking
  useAnalytics();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/desci" element={<DeSci />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/phd-project" element={<PhDProject />} />
      <Route path="/read2025" element={<READ2025 />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <AppContent />
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
