"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const MILESTONES = [
  {
    counter: "01 / 03",
    text: "Benchmarking the  future  of the AI infrastructure stack - the strategic land, innovative steel, and power - on which AI is built.",
  },
  {
    counter: "02 / 03",
    text: "Our co-located hybrid power solutions are the most direct path to reliable, affordable, low-carbon electricity.",
  },
  {
    counter: "03 / 03",
    text: "GPP transforms power intelligence into AI solutions through deep market expertise and breakthrough technologies.",
  },
];

const LAYERS = [
  { label: "Land",     foundation: true  },
  { label: "Power",    foundation: true  },
  { label: "Shell",    foundation: true  },
  { label: "Turnkey",  foundation: false },
  { label: "Compute",  foundation: false },
  { label: "Cloud",    foundation: false },
  { label: "AI Model", foundation: false },
];

// Refined Isometric constants for better form & centering
const SKEW  = 50;
const H     = 22; // lower height for flatter perspective
const W     = 260; // narrower for better centering
const THICK = 5;  // thickness
const GAP   = 45; // tighter gap
const BASE  = 500; // lower baseline to prevent top clipping
const LX    = 135; // centered better horizontally

function topPts(i: number) {
  const y = BASE - i * GAP;
  return `${LX},${y} ${LX+SKEW},${y-H} ${LX+SKEW+W},${y-H} ${LX+W},${y}`;
}

function sidePts(i: number) {
  const y = BASE - i * GAP;
  return `${LX},${y} ${LX},${y+THICK} ${LX+W},${y+THICK} ${LX+W},${y}`;
}

function labelXY(i: number) {
  return { x: LX + SKEW + W / 3 + 10, y: BASE - i * GAP - H / 2 + 5 };
}

export function StickyScrollStack() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 35 });

  // Animation values - faster triggers for 300vh track
  const topY      = useTransform(p, [0, 0.4], [0, -80]);
  const foundFill = useTransform(p, [0, 0.4], ["#B9F2B9", "#B9F2B9"]); // Start with foundation color
  const topFill   = useTransform(p, [0.4, 0.7], ["#2D3A2D", "#B9F2B9"]);
  
  // High contrast label colors
  const foundationLabelColor = "#2D3A2D";
  const topLabelColor = useTransform(p, [0.4, 0.7], ["#FFFFFF", "#2D3A2D"]);

  // Frame animation
  const frameColor = useTransform(p, [0, 0.2], ["#34D399", "#34D399"]); // Active immediately

  const leftBracket = useTransform(p, [0, 0.4], [
    `M 100,520 L 100,410 L 125,399`,
    `M 100,520 L 100,160 L 125,149`
  ]);

  const rightBracket = useTransform(p, [0, 0.4], [
    `M 480,520 L 480,410 L 455,399`,
    `M 480,520 L 480,160 L 455,149`
  ]);

  const op0 = useTransform(p, [0, 0, 0.30, 0.33], [1, 1, 1, 0]);
  const op1 = useTransform(p, [0.35, 0.40, 0.63, 0.66], [0, 1, 1, 0]);
  const op2 = useTransform(p, [0.68, 0.73, 0.95, 0.98], [0, 1, 1, 0]);
  const ops = [op0, op1, op2];

  const wipe = useTransform(p, [0.95, 1.0], [0, 1]);

  return (
    <section ref={ref} className="relative bg-off-white" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex flex-col md:flex-row overflow-hidden">

        {/* LEFT: milestone text */}
        <div className="w-full md:w-[45%] flex-shrink-0 relative flex items-center px-8 md:pl-28 py-20">
          <div className="relative h-72 w-full">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={i}
                style={{ opacity: ops[i] }}
                className="absolute top-0 left-0 flex flex-col gap-6 max-w-xl pl-8 border-l border-[#2D3A2D]/10"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2D3A2D] opacity-50 mb-4 block">
                    {m.counter}
                  </span>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#2D3A2D] leading-[1.1] tracking-tight">
                    {m.text}
                  </h2>
                </div>
                <div className="w-24 h-[2px] bg-[#B9F2B9]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT: isometric SVG stack */}
        <div className="flex-1 flex items-center justify-center p-8">
          <svg viewBox="0 0 600 650" className="w-full h-full" style={{ maxHeight: "75vh" }}>
            <defs>
              <filter id="slabShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                <feOffset dx="2" dy="5" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.15" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="sideGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(0,0,0,0.2)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.02)" />
              </linearGradient>
            </defs>
            
            {/* Structural Frame Brackets */}
            <motion.path
              d={leftBracket}
              style={{ stroke: frameColor }}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.8"
            />
            <motion.path
              d={rightBracket}
              style={{ stroke: frameColor }}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Foundation layers 0,1,2 */}
            {[0, 1, 2].map((i) => {
              const lp = labelXY(i);
              return (
                <g key={i}>
                  <g filter="url(#slabShadow)">
                    <motion.polygon
                      points={sidePts(i)}
                      style={{ fill: foundFill }}
                      className="opacity-40"
                    />
                    <polygon points={sidePts(i)} fill="url(#sideGradient)" />
                    <motion.polygon
                      points={topPts(i)}
                      style={{ fill: foundFill }}
                      stroke="rgba(0,0,0,0.08)"
                      strokeWidth="0.5"
                    />
                  </g>
                  <text 
                    x={lp.x} y={lp.y} 
                    textAnchor="middle" 
                    fontSize="13" 
                    fontWeight="700" 
                    fill={foundationLabelColor} 
                    fontFamily="sans-serif" 
                    className="select-none"
                    opacity="0.85"
                  >
                    {LAYERS[i].label}
                  </text>
                </g>
              );
            })}

            {/* Top layers 3-6, float up */}
            <motion.g style={{ y: topY }}>
              {[3, 4, 5, 6].map((i) => {
                const lp = labelXY(i);
                return (
                  <g key={i}>
                    <g filter="url(#slabShadow)">
                      <motion.polygon
                        points={sidePts(i)}
                        style={{ fill: topFill }}
                        className="opacity-40"
                      />
                      <polygon points={sidePts(i)} fill="url(#sideGradient)" />
                      <motion.polygon
                        points={topPts(i)}
                        style={{ fill: topFill }}
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="0.5"
                      />
                    </g>
                    <motion.text
                      x={lp.x} y={lp.y}
                      textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="sans-serif"
                      style={{ fill: topLabelColor }}
                      className="select-none"
                      opacity="1"
                    >
                      {LAYERS[i].label}
                    </motion.text>
                  </g>
                );
              })}
            </motion.g>

          </svg>
        </div>
      </div>

      {/* Yellow wipe exit */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-brand-green"
        style={{ height: "100vh", scaleY: wipe, transformOrigin: "bottom" }}
      />
    </section>
  );
}
