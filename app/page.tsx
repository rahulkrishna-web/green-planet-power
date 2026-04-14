"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StickyScrollStack } from "@/components/StickyScrollStack";
import { Metrics } from "@/components/Metrics";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Manifesto } from "@/components/Manifesto";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="font-sans relative">
      <Navbar onContactClick={() => setIsModalOpen(true)} />
      <Hero />
      <StickyScrollStack />
      <Metrics />
      <Manifesto />
      <ProjectGrid />
      <Footer onContactClick={() => setIsModalOpen(true)} />
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
}
