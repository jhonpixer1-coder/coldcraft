import SiteHeader from "@/components/site-header";
import Banner from "@/components/banner";
import EngineeringHero from "@/components/engineering-hero";
import ProductsSection from "@/components/products-section";
import CompanyProfile from "@/components/company-profile";
import ProjectsSection from "@/components/projects-section";
import ClientLogosCarousel from "@/components/client-logos-carousel";
import TrustCommitmentSection from "@/components/trust-commitment-section";
import CompanyStats from "@/components/company-stats";
import FaqSection from "@/components/faq-section";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Banner />
        <ProductsSection />
        <CompanyProfile />
        <ProjectsSection />
        <ClientLogosCarousel />
        <EngineeringHero />
        <TrustCommitmentSection />
        <CompanyStats />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
