import React from "react";
import Navbar from "../components/Navbar";
import PortfolioSection from "../components/Portfolio";
import Footer from "../components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PortfolioSection />
      <Footer />
    </div>
  );
}
