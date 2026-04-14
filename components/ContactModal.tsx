"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    requirements: ""
  });

  // LIVE: The Web App URL from Google Apps Script deployment
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxgGQTBLFsp7XBwTYzyxMYiumMQbt77H5vHrzKgAbIpPWVux2p9TEFgNLj6pkzmr_aN/exec"; 

  const getMetadata = async () => {
    let ip = "Unknown";
    try {
      const ipRes = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipRes.json();
      ip = ipData.ip;
    } catch (e) { console.error("IP fetch failed", e); }

    const ua = navigator.userAgent;
    let browser = "Unknown";
    let os = "Unknown";

    // Simple Browser detection
    if (ua.includes("Firefox")) browser = "Firefox";
    else if (ua.includes("SamsungBrowser")) browser = "Samsung Browser";
    else if (ua.includes("Opera") || ua.includes("OPR")) browser = "Opera";
    else if (ua.includes("Trident")) browser = "Internet Explorer";
    else if (ua.includes("Edge")) browser = "Edge";
    else if (ua.includes("Chrome")) browser = "Chrome";
    else if (ua.includes("Safari")) browser = "Safari";

    // Simple OS detection
    if (ua.includes("Win")) os = "Windows";
    else if (ua.includes("Mac")) os = "macOS";
    else if (ua.includes("Linux")) os = "Linux";
    else if (ua.includes("Android")) os = "Android";
    else if (ua.includes("iOS")) os = "iOS";

    return { ip, browser, os };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!APPS_SCRIPT_URL) {
      alert("System Error: Google Apps Script URL not configured. Please contact the administrator.");
      return;
    }

    setStatus("loading");

    try {
      const metadata = await getMetadata();
      const payload = { ...formData, ...metadata };

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", requirements: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/20 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-lg bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[2rem] shadow-2xl overflow-hidden p-8 md:p-10"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors text-brand-dark/50"
            >
              <X size={20} />
            </button>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-brand-dark" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-3">Submission Received</h3>
                <p className="text-brand-dark/60 max-w-[300px]">
                  Thank you for your interest. Our infrastructure team will reach out to you shortly.
                </p>
                <button
                  onClick={onClose}
                  className="mt-10 bg-brand-dark text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark/90 transition-all"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-brand-dark tracking-tight">Technical Inquiry</h2>
                  <p className="text-brand-dark/60 mt-2">Scale your AI infrastructure with GPP.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-brand-dark/40 ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/50 border border-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-dark/10 focus:border-brand-dark/20 outline-none transition-all text-brand-dark placeholder:text-brand-dark/30"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-brand-dark/40 ml-1">Email</label>
                      <input
                        required
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/50 border border-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-dark/10 focus:border-brand-dark/20 outline-none transition-all text-brand-dark placeholder:text-brand-dark/30"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-brand-dark/40 ml-1">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/50 border border-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-dark/10 focus:border-brand-dark/20 outline-none transition-all text-brand-dark placeholder:text-brand-dark/30"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-brand-dark/40 ml-1">Company</label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-white/50 border border-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-dark/10 focus:border-brand-dark/20 outline-none transition-all text-brand-dark placeholder:text-brand-dark/30"
                        placeholder="AI Labs Inc."
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <label htmlFor="requirements" className="text-xs font-bold uppercase tracking-widest text-brand-dark/40 ml-1">Brief Requirements</label>
                    <textarea
                      id="requirements"
                      rows={4}
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="w-full bg-white/50 border border-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-brand-dark/10 focus:border-brand-dark/20 outline-none transition-all text-brand-dark placeholder:text-brand-dark/30 resize-none"
                      placeholder="E.g. 16MW compute capacity, UHD cooling..."
                    />
                  </div>

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="w-full bg-brand-dark text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-brand-dark/90 transition-all disabled:opacity-70 mt-4 shadow-xl shadow-brand-dark/10"
                  >
                    {status === "loading" && <Loader2 size={18} className="animate-spin" />}
                    {status === "loading" ? "Submitting Inquiry..." : "Submit Inquiry"}
                  </button>
                  
                  {status === "error" && (
                    <p className="text-red-500 text-sm font-medium text-center mt-2">
                      Something went wrong. Please try again later.
                    </p>
                  )}
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
