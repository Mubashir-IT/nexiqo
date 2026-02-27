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
const lifecycleStages = [
  {
    icon: Eye,
    title: "Perceive",
    desc: "We begin with deep analysis: market research, competitor evaluation, keyword discovery, and technical audits to identify real opportunities.",
    color: "text-blue-500"
  },
  {
    icon: BrainCircuit,
    title: "Reason",
    desc: "We connect search intent with your business goals. This stage defines keyword strategy, content planning, and structural improvements.",
    color: "text-purple-500"
  },
  {
    icon: Settings,
    title: "Act",
    desc: "We execute. On-page optimization, technical fixes, authority building, and local SEO implementation transform strategy into measurable visibility.",
    color: "text-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Learn",
    desc: "We monitor rankings, traffic, and user behavior. Insights guide ongoing refinements so performance keeps improving.",
    color: "text-emerald-500"
  }
];

export default function SEOServicesPage() {
  return (
    <div className="min-h-screen bg-transparent font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-transparent text-white pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center items-center z-10">
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
            Intelligent Visibility. <br className="hidden md:block" />
            <span className="text-primary-soft">Built for Growth.</span>
          </h1>

          <p style={{ animation: "heroFadeUp 0.45s 0.1s ease both" }}
            className="max-w-2xl text-base md:text-lg text-white/70 leading-relaxed mt-6"
          >
            We drive sustainable organic growth through a data-driven SEO lifecycle designed to research, execute, measure, and continuously refine.
          </p>
          <p style={{ animation: "heroFadeUp 0.45s 0.15s ease both" }}
            className="max-w-2xl text-base md:text-lg text-white/60 leading-relaxed"
          >
            Search is constantly evolving. Our strategies ensure your business stays visible, competitive, and positioned for long-term success.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 max-w-full mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Benefits of SEO with Nexiqo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience growth powered by precision, performance, and strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Sustainable Traffic",
              desc: "We build a strong organic foundation that continues delivering results long after short-term campaigns end."
            },
            {
              title: "Data-Driven Targeting",
              desc: "No guesswork. Our keyword research and competitive analysis focus on terms that attract qualified, conversion-ready visitors."
            },
            {
              title: "Technical Excellence",
              desc: "Beyond content, we optimize site structure, speed, and crawlability so search engines can properly index and rank your website."
            },
            {
              title: "Compounding Growth",
              desc: "SEO is an asset. Each improvement builds momentum, increasing visibility and authority over time."
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
              A continuous optimization loop built around research, execution, and learning.
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
        <div className="relative bg-transparent rounded-[3rem] p-12 md:p-20 overflow-hidden group">

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
              Ready to Strengthen Your Rankings?
            </h2>
            <p className="text-white/60 mb-12 text-lg max-w-2xl mx-auto">
              Let&apos;s build an SEO strategy that attracts targeted traffic, increases authority, and drives consistent growth.
            </p>
            <Link href="/contact">
              <Button className="h-16 px-10 rounded-full bg-primary-soft text-foreground hover:bg-primary-hover text-xl font-bold shadow-2xl hover:scale-105 transition-all">
                Let&apos;s Make It Happen.
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Activities Section */}
      <section className="py-24 px-6 max-w-full mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Key Activities of Nexiqo&apos;s SEO Services
          </h2>
          <p className="text-muted-foreground text-lg">
            A complete, modern SEO framework.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              num: "01",
              title: "On-Page & Content Optimization",
              desc: "Content structure, keyword alignment, metadata, internal linking, and relevance improvements."
            },
            {
              num: "02",
              title: "Backlink & Authority Development",
              desc: "Quality-focused outreach and link acquisition to strengthen domain credibility."
            },
            {
              num: "03",
              title: "Technical SEO & Performance",
              desc: "Site speed, indexing, crawlability, structured data, and error resolution."
            },
            {
              num: "04",
              title: "Local SEO & Map Visibility",
              desc: "Google Business Profile optimization, local citations, and geo-targeted visibility."
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
                {activity.num}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{activity.num} — {activity.title}</h3>
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

