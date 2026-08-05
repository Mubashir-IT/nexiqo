"use client";

import { motion } from "framer-motion";
import { FileText, Target, CheckCircle, ArrowRight, Bot, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const easeOut = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    step: "01",
    title: "Discovery & Planning",
    desc: "We start by understanding your business goals, target audience, and project requirements. This phase includes stakeholder interviews, technical requirements gathering, and project scope definition.",
    icon: Target,
  },
  {
    step: "02",
    title: "Design & Architecture",
    desc: "We create website designs and plan the technical architecture. This includes wireframes, user flows, visual designs, and system architecture planning for both frontend and backend.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Development Phase",
    desc: "We build your website using modern technologies. Our full stack development covers frontend interfaces, backend systems, APIs, databases, and integrations.",
    icon: CheckCircle,
  },
  {
    step: "04",
    title: "AI Agent Development",
    desc: "We design and deploy autonomous AI agents that plan, use your tools, and execute multi-step workflows — with evaluation, observability, and human-in-the-loop controls for production reliability.",
    icon: Bot,
  },
  {
    step: "05",
    title: "SEO Optimization",
    desc: "We implement comprehensive SEO strategies including On-Page SEO, Off-Page SEO, Technical SEO, and Local SEO to improve search rankings and drive organic traffic.",
    icon: Globe,
  },
  {
    step: "06",
    title: "Testing & Launch",
    desc: "We thoroughly test your website for functionality, performance, and compatibility. Once everything is ready, we deploy your website and ensure it's live and running smoothly.",
    icon: ArrowRight,
  },
];

export default function ActionPlanPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground"
          >
            Your website{" "}
            <span className="text-primary">development roadmap</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: easeOut }}
            className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Get a customized action plan for your website development project. We&apos;ll help you understand the steps needed to bring your vision to life.
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center"
        >
          Your Development <span className="text-primary">Journey</span>
        </motion.h2>

        <div className="space-y-6">
          {steps.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: easeOut }}
                className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-foreground/10 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="max-w-4xl mx-auto text-center rounded-[2.5rem] bg-foreground text-white p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
          <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-6">
            Ready to work with <span className="text-primary">us</span>?
          </h2>
          <p className="relative z-10 text-white/70 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your website development project and see how we can help bring your vision to life.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="h-14 px-8 rounded-full bg-primary text-white hover:bg-primary/90 text-lg font-bold">
                Get in Touch
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="h-14 px-8 rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 text-lg font-medium"
              >
                Learn About Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
