"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FileCode,
  Palette,
  ShoppingCart,
  Zap,
  Shield,
  Settings,
  Eye,
  BrainCircuit,
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const lifecycleStages = [
  {
    icon: Eye,
    title: "Perceive",
    desc: "We begin by perceiving your brand identity and business objectives. We analyze your content needs and target audience to build a foundation that aligns with your vision.",
    color: "text-blue-500"
  },
  {
    icon: BrainCircuit,
    title: "Reason",
    desc: "Our reasoning phase involves strategic theme selection and plugin planning. We design a scalable information architecture and WooCommerce strategy to ensure a seamless user journey.",
    color: "text-purple-500"
  },
  {
    icon: Settings,
    title: "Act",
    desc: "Nexiqo then moves to Act. We develop custom themes, integrate powerful plugins, and build responsive layouts. This transforms your vision into a high-performance WordPress reality.",
    color: "text-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Learn",
    desc: "Finally, we Learn. We monitor user interactions and security health post-launch. By analyzing performance data, we continuously refine and update your site to keep it growing.",
    color: "text-emerald-500"
  }
];

export default function WordPressDesignPage() {
  return (
    <div className="min-h-screen bg-transparent font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-transparent text-white pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center items-center z-10">
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-4">
          <div style={{ animation: "heroFadeUp 0.4s ease both" }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <FileCode className="w-5 h-5 text-primary-soft" />
            <span className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 bg-white/5 backdrop-blur-sm">
              WordPress Design
            </span>
          </div>

          <h1 style={{ animation: "heroFadeUp 0.45s 0.05s ease both" }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            Custom WordPress <br className="hidden md:block" />
            <span className="text-primary-soft">built for business</span>
          </h1>

          <p style={{ animation: "heroFadeUp 0.45s 0.1s ease both" }}
            className="max-w-2xl text-base md:text-lg text-white/70 leading-relaxed mt-6"
          >
            We create beautiful, high-performing WordPress websites that combine
            ease of management with custom-built power and security.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 max-w-full mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Benefits of Custom WordPress with Nexiqo
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Experience a professional CMS solution that doesn&apos;t compromise on design or performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Tailored User Experience",
              desc: "We build custom themes from the ground up, ensuring your site looks and feels exactly like your brand."
            },
            {
              title: "Performance First",
              desc: "Our WordPress solutions are optimized for speed, passing Core Web Vitals and providing a smooth experience."
            },
            {
              title: "Scalable Functionality",
              desc: "Whether it's a simple blog or a complex e-commerce store, our plugin strategies ensure your site can grow."
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
              Our WordPress Lifecycle
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A structured approach to building powerful, maintainable content management systems.
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
              Ready to build your <br /> WordPress site?
            </h2>
            <p className="text-white/60 mb-12 text-lg max-w-2xl mx-auto">
              Let&apos;s create a custom WordPress solution that empowers your content team and grows your brand.
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Key Activities of Nexiqo&apos;s WordPress Service
          </h2>
          <p className="text-white/80 text-lg">
            Professional development that goes beyond standard templates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Custom Theme Engineering",
              desc: "We develop unique, lightweight themes that follow WordPress coding standards for maximum performance and security."
            },
            {
              title: "Advanced Plugin Strategy",
              desc: "We select and customize the right tools for your needs, ensuring compatibility and avoiding the pitfalls of 'plugin bloat'."
            },
            {
              title: "WooCommerce & Shop Setup",
              desc: "We build powerful e-commerce experiences with deep WooCommerce customization to drive conversions and sales."
            },
            {
              title: "Hardened Security & Speed",
              desc: "Every site we launch includes multi-layered security and advanced caching to protect your data and delight your users."
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
          <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all">
            Book a call to discuss your project <ArrowRight className="w-5 h-5 text-primary-soft" />
          </Link>
        </div>
      </section>
    </div>
  );
}

