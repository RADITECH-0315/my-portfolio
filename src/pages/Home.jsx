import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "../components/Home";
import ServicesSection from "../components/Services";
import PortfolioSection from "../components/Portfolio";
import AboutSection from "../components/About";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HomeSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
