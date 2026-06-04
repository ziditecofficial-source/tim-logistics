import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { QuickActions } from "@/components/sections/QuickActions";
import { ProductsCarousel } from "@/components/sections/ProductsCarousel";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { InterCity } from "@/components/sections/InterCity";
import { BusinessSegments } from "@/components/sections/BusinessSegments";
import { Programs } from "@/components/sections/Programs";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { DownloadApps } from "@/components/sections/DownloadApps";
import { FaqHome } from "@/components/sections/FaqHome";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Index = () => (
  <SiteLayout>
    <Hero />
    <QuickActions />
    <ProductsCarousel />
    <HowItWorks />
    <Features />
    <InterCity />
    <BusinessSegments />
    <Programs />
    <Stats />
    <Testimonials />
    <DownloadApps />
    <FaqHome />
    <FinalCTA />
  </SiteLayout>
);

export default Index;
