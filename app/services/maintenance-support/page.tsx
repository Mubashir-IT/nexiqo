"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Shield,
  RefreshCw,
  Bug,
  Zap,
  HeadphonesIcon,
  FileCheck,
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
    desc: "Maintaining health starts with Perception. We perform constant health checks and security scans, perceiving potential issues and vulnerabilities before they impact your operations.",
    color: "text-blue-500"
  },
  {
    icon: BrainCircuit,
    title: "Reason",
    desc: "In the reasoning phase, we prioritize. We analyze incoming reports and update logs to reason through the best path for bug resolution and performance enhancement without downtime.",
    color: "text-purple-500"
  },
  {
    icon: Settings,
    title: "Act",
    desc: "Nexiqo then moves to Act. We deploy security patches immediately, resolve bugs with surgical precision, and implement minor feature updates to keep your site modern and secure.",
    color: "text-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Learn",
    desc: "Finally, we Learn. We monitor historical uptime and traffic trends over time. By learning from systemic behavior, we move toward predictive maintenance to prevent future friction.",
    color: "text-emerald-500"
  }
];

export default function MaintenanceSupportPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center items-center z-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-4">
          <div style={{ animation: "heroFadeUp 0.4s ease both" }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Shield className="w-5 h-5 text-primary" />
            <span className="px-4 py-2 rounded-full border border-foreground/10 text-sm text-foreground/60 bg-white shadow-sm">
              Maintenance & Support
            </span>
          </div>

          <h1 style={{ animation: "heroFadeUp 0.45s 0.05s ease both" }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05] text-foreground"
          >
            Seamless operations <br className="hidden md:block" />
            <span className="text-primary">built for longevity</span>
          </h1>

          <p style={{ animation: "heroFadeUp 0.45s 0.1s ease both" }}
            className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed mt-6"
          >
            We provide peace of mind through a proactive maintenance lifecycle that keeps
            your digital assets secure, up-to-date, and performing at their peak.
          </p>
        </div>
      </section>

      {/* Key Activities Section */}
      <section className="py-20 px-6 max-w-full mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Key Activities of Nexiqo&apos;s Support Service
          </h2>
          <p className="text-muted-foreground text-lg">
            What we actually do every month to keep your systems healthy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Security & Patch Management",
              desc: "Immediate application of critical security updates to CMS cores, plugins, libraries, and servers."
            },
            {
              title: "Uptime & Health Monitoring",
              desc: "Automated checks for uptime, SSL, errors, and performance so issues are spotted before users see them."
            },
            {
              title: "Bug Fixes & Change Requests",
              desc: "We resolve bugs, minor UI issues, and small content or feature tweaks as part of your plan."
            },
            {
              title: "Performance & Database Tuning",
              desc: "Regular cleanup of logs, images, and databases so your platform stays fast as it grows."
            }
          ].map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 p-8 rounded-3xl border border-foreground/10 bg-white hover:border-primary/20 transition-colors group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary text-xs">
                0{i + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{activity.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 max-w-full mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Benefits of Maintenance with Nexiqo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Focus on your business while we handle the technical health and stability of your digital platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Zero Downtime Focus",
              desc: "Our proactive monitoring and swift action plans aim for absolute availability and business continuity."
            },
            {
              title: "Hardened Security",
              desc: "Continuous updates and security scans protect your site from evolving web threats and vulnerabilities."
            },
            {
              title: "Expert Assistance",
              desc: "Get priority access to our technical team for bug fixes, questions, and emergency support when you need it."
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
              <CheckCircle2 className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lifecycle Section */}
      <section className="py-4  px-6 relative overflow-hidden">
        <div className="max-w-full mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Support Lifecycle
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A continuous loop of monitoring, resolution, and optimization to ensure long-term stability.
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
      <section className="py-4 px-6 max-w-full mx-auto text-center">
        <div className="rounded-[2.5rem] bg-foreground text-white p-10 md:p-16 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
              Ready for ongoing <br /> peace of mind?
            </h2>
            <p className="text-white/60 mb-12 text-lg max-w-2xl mx-auto">
              Let&apos;s build a support plan that keeps your digital investment safe, fast, and always ready for your users.
            </p>
            <Link href="/contact">
              <Button className="h-16 px-10 rounded-full bg-primary text-white hover:bg-primary/90 text-xl font-bold shadow-2xl hover:scale-105 transition-all">
                Let&apos;s Secure Your Site!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA: Talk About Your Support Needs */}
      <section className="py-4 px-6 max-w-full mx-auto text-center">
        <div className="mt-6">
          <Link href="/contact" className="inline-flex items-center gap-2 text-foreground font-bold hover:gap-4 transition-all">
            Book a call to discuss your support needs <ArrowRight className="w-5 h-5 text-primary" />
          </Link>
        </div>
      </section>
    </div>
  );
}
