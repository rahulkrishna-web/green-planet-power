"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "16 MW UHD compute - Each Phase", value: "16MW" },
  { label: "Plug & Play for Phase-wise growth", value: "GROWTH" },
  { label: "20 years Tax-free Structuring", value: "20 YRS" },
];

export function Metrics() {
  return (
    <section className="bg-brand-green py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col gap-6 pl-8 border-l border-brand-dark/10 first:border-l-0 first:pl-0"
            >
              <span className="text-4xl md:text-6xl font-bold text-brand-dark tracking-tighter">
                {stat.value}
              </span>
              <p className="text-lg md:text-xl font-medium text-brand-dark/80 max-w-[240px] leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 pt-24 border-t border-brand-dark/10">
          <h2 className="text-4xl md:text-6xl font-bold text-brand-dark max-w-4xl tracking-tight leading-tight">
            Net Zero compliance for Green Bonds.
          </h2>
        </div>
      </div>
    </section>
  );
}
