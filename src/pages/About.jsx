import React from "react";
import Navbar from "../components/Navbar";
import AboutSection from "../components/About";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  );
}
