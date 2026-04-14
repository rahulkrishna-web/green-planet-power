"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "18 months Takeoff",
    location: "South India",
    image: "/projects/data-center.png",
    size: "large",
  },
  {
    title: "Net Zero Infrastructure",
    location: "Tuticorin",
    image: "/projects/substation.png",
    size: "small",
  },
  {
    title: "Hybrid Power Solutions",
    location: "South India",
    image: "/projects/steel.png",
    size: "small",
  },
];

export function ProjectGrid() {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-dark-gray/40">Portfolio</span>
            <h2 className="text-5xl md:text-7xl font-bold text-dark-gray tracking-tight">Commitment in Action.</h2>
          </div>
          <button className="hidden md:block border-b-2 border-dark-gray pb-2 text-dark-gray font-bold text-lg hover:text-dark-gray/60 transition-colors">
            View all projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main large project */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl aspect-[16/9] md:aspect-[21/9]">
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
              <span className="text-white/60 text-sm font-medium mb-2">{projects[0].location}</span>
              <h3 className="text-white text-3xl md:text-5xl font-bold">{projects[0].title}</h3>
            </div>
          </div>

          {/* Smaller projects */}
          {projects.slice(1).map((project) => (
            <div key={project.title} className="relative group overflow-hidden rounded-3xl aspect-[4/3]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="text-white/60 text-sm font-medium mb-1">{project.location}</span>
                <h3 className="text-white text-2xl md:text-3xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
