"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Server,
  Database,
  Key,
  Zap,
  Shield,
  Plug,
  Eye,
  BrainCircuit,
  Settings,
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import dynamic from "next/dynamic";
const ParticleCardBackground = dynamic(() => import("@/components/ParticleCardBackground"), { ssr: false, loading: () => null });

const lifecycleStages = [
  {
    icon: Eye,
    title: "Perceive",
    desc: "We begin by perceiving the unseen infrastructure. We analyze your data flow requirements, security protocols, and third-party integration points to map out a resilient backend foundation.",
    color: "text-blue-500"
  },
  {
    icon: BrainCircuit,
    title: "Reason",
    desc: "In the reasoning phase, we architect for reliability. From database schema design to API structure planning, we reason through every logic path to ensure high availability and scalability.",
    color: "text-purple-500"
  },
  {
    icon: Settings,
    title: "Act",
    desc: "Nexiqo then moves to Act. We implement robust server-side logic, harden security layers, and integrate complex APIs. We build the engine that powers your digital application seamlessly.",
    color: "text-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Learn",
    desc: "Finally, we Learn. We perform deep log analysis and system performance monitoring post-launch. By learning from traffic patterns, we continuously optimize the infrastructure for peak efficiency.",
    color: "text-emerald-500"
  }
];

export default function BackendDevelopmentPage() {
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
            <Server className="w-5 h-5 text-primary-soft" />
            <span className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 bg-white/5 backdrop-blur-sm">
              Backend Development
            </span>
          </div>

          <h1 style={{ animation: "heroFadeUp 0.45s 0.05s ease both" }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            Resilient engines <br className="hidden md:block" />
            <span className="text-primary-soft">built for scale</span>
          </h1>

          <p style={{ animation: "heroFadeUp 0.45s 0.1s ease both" }}
            className="max-w-2xl text-base md:text-lg text-white/70 leading-relaxed mt-6"
          >
            We build the mission-critical infrastructure that powers your agency.
            Secure, scalable, and intelligent backend systems that never skip a beat.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 max-w-full mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Benefits of Backend with Nexiqo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the power of a stable, secure, and highly efficient technical foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Enterprise Security",
              desc: "We implement multi-layered security protocols to protect your data and ensure system integrity."
            },
            {
              title: "High Availability",
              desc: "Our backend architectures are designed for maximum uptime, handling traffic spikes with ease."
            },
            {
              title: "Seamless Integration",
              desc: "We build flexible APIs that connect perfectly with third-party tools, legacy systems, and modern frontends."
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
              Our Backend Lifecycle
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A disciplined approach to identifying requirements and engineering robust server-side logic.
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
              Ready to build a <br /> robust engine?
            </h2>
            <p className="text-white/60 mb-12 text-lg max-w-2xl mx-auto">
              Let&apos;s architect a backend that scales with your ambition and provides the reliability your users deserve.
            </p>
            <Link href="/contact">
              <Button className="h-16 px-10 rounded-full bg-primary-soft text-foreground hover:bg-primary-hover text-xl font-bold shadow-2xl hover:scale-105 transition-all">
                Let&apos;s Build It!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Activities Section */}
      <section className="py-24 px-6 max-w-full mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Key Activities of Nexiqo&apos;s Backend Service
          </h2>
          <p className="text-muted-foreground text-lg">
            Engineering excellence that powers modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Modern API Architecture",
              desc: "We develop high-performance REST and GraphQL APIs that ensure efficient data communication between all your systems."
            },
            {
              title: "Scalable Database Design",
              desc: "We design and optimize SQL and NoSQL databases to manage your data reliably as you grow from zero to millions of users."
            },
            {
              title: "Secure Auth & Logic",
              desc: "Deep implementation of JWT, OAuth, and RBAC to protect user identities and maintain strict control over application logic."
            },
            {
              title: "Cloud infrastructure Setup",
              desc: "We host and manage your backend on AWS, Vercel, or DigitalOcean, ensuring optimal deployment pipelines and uptime."
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
            Book a call to discuss your backend <ArrowRight className="w-5 h-5 text-primary-soft" />
          </Link>
        </div>
      </section>
    </div>
  );
}

