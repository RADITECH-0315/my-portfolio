import React from "react";
import Navbar from "../components/Navbar";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ContactSection />
      <Footer />
    </div>
  );
}
