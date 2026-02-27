"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Code2,
  Server,
  Smartphone,
  Database,
  Zap,
  Shield,
  Eye,
  BrainCircuit,
  Settings,
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const lifecycleStages = [
  {
    icon: Eye,
    title: "Perceive",
    desc: "Every project starts with Perception. We dive deep into your requirements, analyze user behaviors, and understand the technical environment. It's about gaining a crystal-clear picture of what's needed to succeed in real time.",
    color: "text-blue-500"
  },
  {
    icon: BrainCircuit,
    title: "Reason",
    desc: "Next, we move to Reasoning. We connect the dots between your goals and technical possibilities. This stage involves architectural planning, data modeling, and choosing the right tech stack for faster, data-backed decisions.",
    color: "text-purple-500"
  },
  {
    icon: Settings,
    title: "Act",
    desc: "Nexiqo then moves to Act. We implement the frontend, build the robust backend, and automate workflows. This stage transforms ideas into functional solutions, reducing manual overhead and boosting final output quality.",
    color: "text-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Learn",
    desc: "Finally, we Learn. Our systems are built to grow. By analyzing post-deployment performance and user feedback, we continuously refine the application. Your solution doesn't stay stagnant; it evolves with your business.",
    color: "text-emerald-500"
  }
];

export default function FullStackDevelopmentPage() {
  return (
    <div className="min-h-screen bg-transparent font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-transparent text-white pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center items-center z-10">
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-4">
          <div style={{ animation: "heroFadeUp 0.4s ease both" }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Code2 className="w-5 h-5 text-primary-soft" />
            <span className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 bg-white/5 backdrop-blur-sm">
              Full Stack Development
            </span>
          </div>

          <h1 style={{ animation: "heroFadeUp 0.45s 0.05s ease both" }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            Intelligent full stack <br className="hidden md:block" />
            <span className="text-primary-soft">solutions built to scale</span>
          </h1>

          <p style={{ animation: "heroFadeUp 0.45s 0.1s ease both" }}
            className="max-w-2xl text-base md:text-lg text-white/70 leading-relaxed mt-6"
          >
            We handle the entire journey of your digital product, from requirement discovery
            to complex backend architecture and high-performance frontend implementation.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 max-w-full mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Benefits of Full Stack with Nexiqo
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Experience the advantage of a unified development process that bridges the gap between vision and reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Unified Development Cycle",
              desc: "By handling both frontend and backend, we eliminate integration friction and speed up the delivery of your product."
            },
            {
              title: "Built-in Scalability",
              desc: "Our architectural reasoning ensures your application can handle 10x growth without needing a complete overhaul."
            },
            {
              title: "Intelligent UX & Logic",
              desc: "We connect user interactions with powerful backend logic to create experiences that are both beautiful and smart."
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

      {/* Lifecycle Section (Perceive, Reason, Act, Learn) */}
      <section className="py-24 bg-primary-soft/30 px-6 relative overflow-hidden">
        <div className="max-w-full mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Nexiqo's Intelligent Lifecycle
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From initial discovery to continuous evolution, we follow a structured path to ensure project success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {/* Connection Line (Desktop) */}
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
              Ready to revolutionize <br /> with Nexiqo?
            </h2>
            <p className="text-white/60 mb-12 text-lg max-w-2xl mx-auto">
              Let&apos;s turn your data and ideas into a smart, scalable full stack solution.
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
            Key Activities of Nexiqo&apos;s Full Stack Service
          </h2>
          <p className="text-white/80 text-lg">
            We manage the technical complexities so you can focus on growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "System Integration & Discovery",
              desc: "We start by integrating your business data into the discovery phase. We clean, organize, and prepare the technical foundation for your application."
            },
            {
              title: "Architectural Optimization",
              desc: "We test multiple stack configurations and data models to find the optimal path for reliability and performance."
            },
            {
              title: "Seamless Implementation",
              desc: "Once planned, we connect the model to real-world applications. We ensure your frontend and backend work in perfect harmony."
            },
            {
              title: "Continuous Monitoring",
              desc: "We monitor performance and error rates post-launch, ensuring your systems remain modern, secure, and highly functional."
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
            Book a call to discuss your solution <ArrowRight className="w-5 h-5 text-primary-soft" />
          </Link>
        </div>
      </section>
    </div>
  );
}

