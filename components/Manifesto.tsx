"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Globe, Layers, Zap } from "lucide-react";

const manifestos = [
  {
    title: "AI advantage will be defined by infrastructure readiness, not innovation alone.",
    icon: Database,
    className: "md:col-span-3 md:row-span-2 bg-emerald-950/40",
  },
  {
    title: "Nations that build faster will lead longer in the AI economy.",
    icon: Globe,
    className: "md:col-span-3 bg-brand-dark border border-brand-green/10",
  },
  {
    title: "In AI, infrastructure is strategy.",
    icon: Layers,
    className: "md:col-span-1 bg-brand-dark border border-brand-green/10",
  },
  {
    title: "Power, land, and speed—not just code—will determine AI leadership.",
    icon: Zap,
    className: "md:col-span-2 bg-emerald-950/40",
  },
];

export function Manifesto() {
  return (
    <section className="bg-brand-dark py-24 px-6 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <span className="text-brand-green/50 text-sm font-bold uppercase tracking-widest">
            Strategic Vision
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 tracking-tight">
            The Macro Strategy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {manifestos.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`p-8 rounded-[2.5rem] flex flex-col justify-between gap-12 group transition-all hover:bg-emerald-900/20 ${item.className}`}
              >
                <div className="p-3 bg-brand-green/10 rounded-2xl self-start group-hover:bg-brand-green/20 transition-colors">
                  <Icon className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white/90 leading-tight tracking-tight">
                  "{item.title}"
                </h3>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex items-center justify-between border-t border-brand-green/10 pt-8"
        >
          <div className="flex flex-col">
            <h4 className="text-xl font-bold text-white tracking-tighter">
              Green Planet Power<span className="text-xs align-top ml-1 opacity-50 font-normal">TM</span>
            </h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
