"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const articles = [
  {
    category: "Sustainability",
    title: "Unlocking Green Bonds for AI Infrastructure",
    image: "/insights/green-bonds.png",
    date: "April 12, 2024",
  },
  {
    category: "Energy",
    title: "Hybrid Power: The Backbone of Reliable Compute",
    image: "/insights/hybrid-power.png",
    date: "April 08, 2024",
  },
  {
    category: "Technology",
    title: "Scaling UHD Compute with Net-Zero Compliance",
    image: "/insights/compute.png",
    date: "April 02, 2024",
  },
];

export function Insights() {
  return (
    <section id="insights" className="bg-off-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">Knowledge</span>
            <h2 className="text-5xl md:text-7xl font-bold text-brand-dark tracking-tight">Intelligence.</h2>
          </div>
          <Link href="/insights" className="hidden md:block border-b-2 border-brand-dark pb-2 text-brand-dark font-bold text-lg hover:text-brand-dark/60 transition-colors">
            Read all insights
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-dark-gray/40">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-dark-gray leading-tight group-hover:text-dark-gray/60 transition-colors">
                  {article.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
