"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Globe,
  Search,
  TrendingUp,
  MapPin,
  FileText,
  BarChart,
  Eye,
  BrainCircuit,
  Settings,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import dynamic from "next/dynamic";
const ParticleCardBackground = dynamic(() => import("@/components/ParticleCardBackground"), { ssr: false, loading: () => null });

const lifecycleStages = [
  {
    icon: Eye,
    title: "Perceive",
    desc: "Every SEO strategy starts with Perception. We perform deep market research, competitor analysis, and technical audits to perceive your current standing and identify high-value opportunities.",
    color: "text-blue-500"
  },
  {
    icon: BrainCircuit,
    title: "Reason",
    desc: "Next is Reasoning. We connect the dots between search intent and your content. We build a robust keyword strategy and content gap analysis to make informed, data-driven decisions.",
    color: "text-purple-500"
  },
  {
    icon: Settings,
    title: "Act",
    desc: "Nexiqo then moves to Act. We implement on-page optimizations, execute quality link-building campaigns, and setup local SEO. We turn strategy into measurable search engine visibility.",
    color: "text-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Learn",
    desc: "Finally, we Learn. We continuously track rankings and traffic patterns. By analyzing what works, we refine our approach, ensuring your search performance keeps growing with your business.",
    color: "text-emerald-500"
  }
];

export default function SEOServicesPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-foreground text-white pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center items-center z-10">
        <ParticleCardBackground />
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] bg-primary-soft/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary-soft/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-4">
          <div style={{ animation: "heroFadeUp 0.4s ease both" }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Search className="w-5 h-5 text-primary-soft" />
            <span className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 bg-white/5 backdrop-blur-sm">
              SEO Services
            </span>
          </div>

          <h1 style={{ animation: "heroFadeUp 0.45s 0.05s ease both" }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            Intelligent visibility <br className="hidden md:block" />
            <span className="text-primary-soft">built for growth</span>
          </h1>

          <p style={{ animation: "heroFadeUp 0.45s 0.1s ease both" }}
            className="max-w-2xl text-base md:text-lg text-white/70 leading-relaxed mt-6"
          >
            We drive organic growth through a data-backed lifecycle that identifies,
            executes, and learns from search trends to keep you ahead.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 max-w-full mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Benefits of SEO with Nexiqo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the power of long-term organic growth driven by intelligent technical and content strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Sustainable Traffic",
              desc: "Build a foundation of organic traffic that continues to perform long after initial campaigns are completed."
            },
            {
              title: "Data-Driven Targeting",
              desc: "We don&apos;t guess. Our keyword and competitive reasoning ensures we target terms that actually convert."
            },
            {
              title: "Technical Excellence",
              desc: "Beyond content, we ensure your site structure and performance are optimized for search engine crawlability."
            }
          ].map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-[2rem] p-10 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <CheckCircle2 className="w-10 h-10 text-primary-soft mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lifecycle Section */}
      <section className="py-24 bg-primary-soft/30 px-6 relative overflow-hidden">
        <div className="max-w-full mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our SEO Lifecycle
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A continuous loop of research, execution, and refinement to maximize your search visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-foreground/5 -translate-y-[100px] z-0" />

            {lifecycleStages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[2.5rem] p-8 border border-gray-100 relative z-10 flex flex-col items-center text-center group hover:bg-foreground hover:text-white transition-colors duration-500"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-white/10 group-transition-colors duration-500`}>
                    <Icon className={`w-8 h-8 ${stage.color} group-hover:text-white transition-colors`} />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4">{stage.title}</h3>
                  <p className="text-sm opacity-70 group-hover:opacity-90 leading-relaxed">
                    {stage.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="py-24 px-6 max-w-full mx-auto text-center">
        <div className="relative bg-foreground rounded-[3rem] p-12 md:p-20 overflow-hidden group">
          <ParticleCardBackground spreadX={15} spreadY={10} spreadZ={5} />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
              Ready to improve <br /> your rankings?
            </h2>
            <p className="text-white/60 mb-12 text-lg max-w-2xl mx-auto">
              Let&apos;s build an SEO strategy that drives targeted traffic and grows your online authority sustainably.
            </p>
            <Link href="/contact">
              <Button className="h-16 px-10 rounded-full bg-primary-soft text-foreground hover:bg-primary-hover text-xl font-bold shadow-2xl hover:scale-105 transition-all">
                Let&apos;s Make It Happen!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Activities Section */}
      <section className="py-24 px-6 max-w-full mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Key Activities of Nexiqo&apos;s SEO Service
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive approach to modern search engine optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "On-Page & Content Strategy",
              desc: "We optimize your content structure, meta tags, and internal linking to ensure search engines understand your value."
            },
            {
              title: "Backlink & Authority Building",
              desc: "We execute quality-driven outreach to gain authoritative links that boost your domain's credibility."
            },
            {
              title: "Technical Site Optimization",
              desc: "We fix crawl errors, improve site speed, and implement schema markup for better rich snippet performance."
            },
            {
              title: "Local SEO & Visibility",
              desc: "We manage Google Business Profiles and local citations to capture high-intent traffic in your geographical area."
            }
          ].map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 p-8 rounded-3xl border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-soft/50 flex items-center justify-center font-bold text-foreground">
                0{i + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{activity.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{activity.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 text-foreground font-bold hover:gap-4 transition-all">
            Book a call to discuss your SEO <ArrowRight className="w-5 h-5 text-primary-soft" />
          </Link>
        </div>
      </section>
    </div>
  );
}

