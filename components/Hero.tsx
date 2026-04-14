"use client";

import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="bg-[#B9F2B9] pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-7xl lg:text-8xl font-bold text-[#2D3A2D] leading-[1.05] tracking-tight max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          GPP enables the next era of AI with reliable, economically optimized, and low-carbon power and infrastructure solutions.
        </motion.h1>
      </div>
    </section>
  );
}
