"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search, MousePointer2, FileText, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "full-stack",
    label: "Full Stack Solutions",
    content: "We deliver intelligent, end-to-end web applications. From initial perception of your needs to deep tactical reasoning and high-performance execution, we build solutions that scale with your vision.",
    tags: ["Next.js", "React", "Node.js", "Cloud Infrastructure", "API Design", "Database Systems"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
    link: "/services/full-stack-development"
  },
  {
    id: "frontend",
    label: "Frontend Craft",
    content: "We craft responsive, pixel-perfect user interfaces that captivate and convert. Our frontend lifecycle ensures every pixel is reasoned, every interaction is smooth, and every visual is accessible.",
    tags: ["React", "Next.js", "Framer Motion", "TypeScript", "Performance", "UI/UX"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop",
    link: "/services/frontend-development"
  },
  {
    id: "backend",
    label: "Backend Hub",
    content: "We engineer resilient server-side infrastructures that power your business logic without friction. Secure, high-availability backends that learn and optimize through real-world usage data.",
    tags: ["Node.js", "Resilient APIs", "Security Hardening", "Scalability", "Log Analysis", "Infrastructure"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
    link: "/services/backend-development"
  },
  {
    id: "wordpress",
    label: "Custom WordPress",
    content: "We transform WordPress into a custom-built enterprise engine. Beautiful management interfaces paired with lightweight, hardened themes and plugins tailored strictly to your objectives.",
    tags: ["Theme Engineering", "WooCommerce", "Plugin Strategy", "Performance", "Security", "SEO Ready"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop",
    link: "/services/wordpress-design"
  },
  {
    id: "seo",
    label: "SEO Growth",
    content: "We drive sustainable organic growth through data-backed search strategies. From technical audits to authority building, we ensure your brand stays visible and ahead of the trends.",
    tags: ["Technical SEO", "Growth Strategy", "Ranking Tracking", "Authority Building", "On-Page", "Market Analysis"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    link: "/services/seo-services"
  }
];

export function WhatWeDo() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-20 px-6 max-w-[1400px] mx-auto">
      <div className="bg-primary-soft rounded-[3rem] p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight">
          Intelligent Web Services
        </h2>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 mb-8">
          {/* Tabs Navigation */}
          <div className="flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "text-left px-8 py-6 rounded-2xl text-xl md:text-2xl font-bold transition-all duration-300",
                  activeTab.id === tab.id
                    ? "bg-card text-foreground shadow-sm scale-[1.02]"
                    : "bg-primary-soft text-foreground/40 hover:text-foreground/70 hover:bg-primary-soft/80"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Content Area */}
          <div className="relative rounded-[2rem] overflow-hidden min-h-[500px] group shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img
                  src={activeTab.image}
                  alt={activeTab.label}
                  className="w-full h-full object-cover brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                  <p className="text-white/95 text-lg md:text-2xl leading-relaxed mb-10 max-w-3xl font-medium">
                    {activeTab.content}
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/50 text-sm font-bold tracking-wider uppercase">
                    {activeTab.tags.map((tag, i) => (
                      <span key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-soft" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explore Link Button */}
                <div className="absolute bottom-12 right-12 flex flex-col items-center gap-3">
                  <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase opacity-60">Explore Service</span>
                  <a href={activeTab.link}>
                    <button className="w-20 h-20 rounded-full bg-primary-soft flex items-center justify-center text-foreground hover:scale-110 hover:bg-white transition-all duration-500 shadow-xl group/btn">
                      <ArrowUpRight size={36} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Cards Grid - Updated for Consistency */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Modern CMS Hub",
              desc: "From custom WordPress to headless architectures — we build content systems your team can own and your users will love. Every solution is built to scale, not just to ship.",
              icon: MousePointer2
            },
            {
              title: "Strategic SEO Growth",
              desc: "We align technical precision with market intelligence to ensure your brand leads — not follows — in search visibility and authority. Data informs every decision we make.",
              icon: Search
            },
            {
              title: "Continuous Evolution",
              desc: "Your site doesn't stop growing after launch. Our 'Learn' phase drives ongoing refinement through real-world data, analytics, and proactive maintenance. Because great websites are never truly finished.",
              icon: FileText
            }
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-[2rem] p-10 min-h-[200px] flex flex-col justify-between hover:bg-foreground hover:text-white transition-all duration-500 group shadow-sm hover:shadow-2xl">
              <div>
                <h3 className="text-2xl font-extrabold mb-4">{item.title}</h3>
                <p className="text-muted-foreground group-hover:text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <item.icon className="w-10 h-10 text-primary-soft mt-8 opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}