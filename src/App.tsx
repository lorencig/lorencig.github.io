import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import Essay from "./pages/Essay";
import { ThemeProvider } from "./components/ThemeProvider";
import { useAnalytics } from "./hooks/use-analytics";

const queryClient = new QueryClient();

const AppContent = () => {
  useAnalytics();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/essays/:slug" element={<Essay />} />
      <Route path="/desci" element={<DeSci />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/phd-project" element={<PhDProject />} />
      <Route path="/read2025" element={<READ2025 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <HelmetProvider>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
