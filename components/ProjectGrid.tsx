"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Green Energy Corridor",
    location: "South India",
    image: "/projects/energy-corridor.png",
  },
  {
    title: "18 Months Takeoff",
    location: "Modern Data Center",
    image: "/projects/data-center-new.png"
  },
  {
    title: "Hybrid Power Solutions",
    location: "BESS Integration",
    image: "/projects/bess.png",
  },
];

export function ProjectGrid() {
  return (
    <section id="projects" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-16 px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-dark-gray/40">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-bold text-dark-gray tracking-tight">Focusing on Infrastructure & ESG.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <div key={project.title} className="relative group overflow-hidden rounded-3xl aspect-[4/5] md:aspect-[3/4]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">{project.location}</span>
                <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-tight">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
