"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, ShieldCheck } from "lucide-react";

const stats = [
  { 
    label: "16 MW UHD compute - Each Phase", 
    value: "16MW",
    icon: Zap 
  },
  { 
    label: "Plug & Play for Phase-wise growth", 
    value: "GROWTH",
    icon: TrendingUp 
  },
  { 
    label: "20 years Tax-free Structuring", 
    value: "20 YRS",
    icon: ShieldCheck 
  },
];

export function Metrics() {
  return (
    <section className="bg-brand-green py-20 px-6 relative -mt-16 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="flex flex-col gap-6 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-dark/5 rounded-2xl group-hover:bg-brand-dark/10 transition-colors">
                    <Icon className="w-6 h-6 text-brand-dark" />
                  </div>
                  <span className="text-3xl md:text-5xl font-bold text-brand-dark tracking-tighter">
                    {stat.value}
                  </span>
                </div>
                
                <p className="text-lg font-medium text-brand-dark/70 max-w-[260px] leading-tight pl-2 border-l-2 border-brand-dark/10">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 pt-24 border-t border-brand-dark/10">
          <motion.h2 
            initial={{ opacity:0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-brand-dark max-w-4xl tracking-tight leading-tight"
          >
            Net Zero compliance for <span className="text-emerald-800">Green Bonds.</span>
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
