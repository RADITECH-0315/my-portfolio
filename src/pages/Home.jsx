import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "../components/Home";
import ServicesSection from "../components/Services";
import HowWeWorkSection from "../components/HowWeWork";
import PortfolioSection from "../components/Portfolio";
import TechStackSection from "../components/TechStack";
import AboutSection from "../components/About";
import ContactSection from "../components/Contact";
import FinalCTASection from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HomeSection />
      <ServicesSection />
      <HowWeWorkSection />
      <PortfolioSection />
      <TechStackSection />
      <AboutSection />
      <ContactSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
