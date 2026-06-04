import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/i18n/I18nProvider";
import { PageLoader } from "@/components/PageLoader";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import BusinessesPage from "./pages/BusinessesPage.tsx";
import PartnershipsPage from "./pages/PartnershipsPage.tsx";
import InterUrbanPage from "./pages/InterUrbanPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import FAQsPage from "./pages/FAQsPage.tsx";
import HowItWorksCustomersPage from "./pages/HowItWorksCustomersPage.tsx";
import HowItWorksAgentsPage from "./pages/HowItWorksAgentsPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <I18nProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <PageLoader />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/businesses" element={<BusinessesPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/inter-urban" element={<InterUrbanPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/how-it-works" element={<HowItWorksCustomersPage />} />
            <Route path="/how-it-works/customers" element={<HowItWorksCustomersPage />} />
            <Route path="/how-it-works/agents" element={<HowItWorksAgentsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </I18nProvider>
  </QueryClientProvider>
);

export default App;
