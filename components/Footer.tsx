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

interface FooterProps {
  onContactClick?: () => void;
}

export function Footer({ onContactClick }: FooterProps) {
  return (
    <footer className="bg-brand-green px-6 py-16 md:py-24 font-sans border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-brand-dark">
              GPP
            </Link>
            <p className="mt-6 text-brand-dark/70 leading-relaxed text-sm">
              GPP enables the next era of AI with reliable, economically optimized, and low-carbon power and infrastructure solutions.
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((group) => (
              <div key={group.title} className="flex flex-col gap-4">
                <h4 className="font-bold text-brand-dark uppercase tracking-wider text-[10px]">
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-brand-dark/60 hover:text-brand-dark transition-colors text-sm font-medium"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col gap-6 md:max-w-xs">
            <h4 className="font-bold text-brand-dark uppercase tracking-wider text-xs">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4 text-brand-dark/70 text-sm leading-relaxed font-medium">
              <p>
                <span className="font-bold text-brand-dark block mb-1">Green Planet Power</span>
                Unit of Abound Land LLP <br />
                Chennai, Tamil Nadu
              </p>
              <p>
                <span className="font-bold text-brand-dark">Email:</span> <br />
                <a href="mailto:info@greenplanetpower.co.in" className="hover:text-brand-dark transition-colors border-b border-brand-dark/20 pb-0.5">
                  info@greenplanetpower.co.in
                </a>
              </p>
            </div>
            <button 
              onClick={onContactClick}
              className="mt-2 bg-brand-dark text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-brand-dark/90 transition-all self-start shadow-sm cursor-pointer"
            >
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
