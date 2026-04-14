"use client";

import React from "react";
import { motion } from "framer-motion";

const blobPaths = [
  "M 100,20 C 144,20 180,56 180,100 C 180,144 144,180 100,180 C 56,180 20,144 20,100 C 20,56 56,20 100,20", // Circle
  "M 100,25 C 160,15 175,70 175,100 C 175,140 144,180 100,180 C 50,180 25,140 25,100 C 25,60 40,35 100,25", // Stretched
  "M 100,15 C 144,15 185,50 185,100 C 185,150 150,175 100,175 C 60,175 15,150 15,100 C 15,40 56,15 100,15", // Skewed
  "M 110,20 C 170,10 180,70 170,110 C 160,150 120,180 80,170 C 40,160 10,120 20,80 C 30,40 50,30 110,20", // Asymmetric
  "M 100,20 C 144,20 180,56 180,100 C 180,144 144,180 100,180 C 56,180 20,144 20,100 C 20,56 56,20 100,20", // Reset Circle
];

function BlobAnimation() {
  return (
    <motion.div
      animate={{ rotate: 360, scale: [1, 1.05, 0.95, 1] }}
      transition={{ 
        rotate: { duration: 30, repeat: Infinity, ease: "linear" }, 
        scale: { duration: 12, repeat: Infinity, ease: "easeInOut" } 
      }}
      className="w-[50vw] h-[50vw] max-w-[350px] max-h-[350px] opacity-80"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
        <defs>
          <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D3A2D" />
            <stop offset="100%" stopColor="#4ADE80" />
          </linearGradient>
        </defs>
        <motion.path
          d={blobPaths[0]}
          animate={{ d: blobPaths }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          fill="url(#blobGrad)"
        />
      </svg>
    </motion.div>
  );
}

export function Hero() {
  const text = "GPP enables the next era of AI with reliable, economically optimized, and low-carbon power and infrastructure solutions.";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
    visible: {
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] as const }
    }
  };

  return (
    <motion.section 
      animate={{ backgroundColor: ["#B9F2B9", "#D2F8D2", "#A6EAA6", "#B9F2B9"] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="min-h-[100svh] w-full flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto z-10 flex flex-col items-center gap-12 md:gap-16">
        {/* Sharp Morphing Blob on Top */}
        <div className="relative z-0">
          <BlobAnimation />
        </div>

        {/* Centered Text below the blob */}
        <div className="text-center">
          <motion.h1 
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#2D3A2D] leading-[1.05] tracking-tight mx-auto max-w-5xl"
          >
            {words.map((word, index) => (
              <motion.span key={index} variants={child} className="inline-block mr-[0.25em] pb-1">
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>
    </motion.section>
  );
}
