import React from "react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Support", href: "/support" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "AI Infrastructure", href: "/solutions/ai" },
      { name: "Energy Systems", href: "/solutions/energy" },
      { name: "Logistics", href: "/solutions/logistics" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-green px-6 py-16 md:py-24 font-sans border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-md">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-brand-dark">
              GPP
            </Link>
            <p className="mt-6 text-brand-dark/70 leading-relaxed">
              GPP enables the next era of AI with reliable, economically optimized, and low-carbon power and infrastructure solutions.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-brand-dark uppercase tracking-wider text-xs">
              Connect
            </h4>
            <div className="flex gap-6">
              <Link href="#" className="text-brand-dark/80 hover:text-brand-dark transition-colors font-medium">LinkedIn</Link>
              <Link href="#" className="text-brand-dark/80 hover:text-brand-dark transition-colors font-medium">Twitter</Link>
              <Link href="#" className="text-brand-dark/80 hover:text-brand-dark transition-colors font-medium">Instagram</Link>
            </div>
            <button className="mt-4 bg-brand-dark text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-brand-dark/90 transition-all self-start">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-gray/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-dark-gray/50">
          <p>© {new Date().getFullYear()} Green Planet Power. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-brand-dark transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-brand-dark transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
