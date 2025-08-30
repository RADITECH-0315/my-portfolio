import React from "react";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/Services";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ServicesSection />
      <Footer />
    </div>
  );
}
