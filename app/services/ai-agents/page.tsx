"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Bot,
  Workflow,
  Network,
  ShieldCheck,
  Eye,
  BrainCircuit,
  Settings,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const lifecycleStages = [
  {
    icon: Eye,
    title: "Perceive",
    desc: "We map your workflows, data sources, and goals. We identify where autonomous agents can observe context, reduce manual work, and create measurable business impact.",
    color: "text-blue-500",
  },
  {
    icon: BrainCircuit,
    title: "Reason",
    desc: "We design how agents plan and decide — choosing models, memory, tools, prompts, and guardrails so every action stays aligned with your policies and outcomes.",
    color: "text-purple-500",
  },
  {
    icon: Settings,
    title: "Act",
    desc: "We build and deploy production agents that call APIs, update CRMs, run research, resolve support tasks, and execute multi-step workflows with human-in-the-loop controls.",
    color: "text-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Learn",
    desc: "We monitor quality, latency, and outcomes. Evaluation loops, observability, and continuous refinement keep agents reliable as your business evolves.",
    color: "text-emerald-500",
  },
];

export default function AIAgentsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="relative min-h-[50vh] pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Bot className="w-5 h-5 text-primary" />
            <span className="px-4 py-2 rounded-full border border-foreground/10 text-sm text-foreground/60 bg-white shadow-sm">
              AI Agent Development
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-foreground"
          >
            AI Agents that{" "}
            <span className="text-primary">plan, act &amp; execute</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed mt-6"
          >
            Beyond chatbots. We build autonomous AI systems that observe context, reason through goals,
            use your tools and APIs, and complete multi-step work — with the governance your business needs.
          </motion.p>
        </div>
      </section>

      {/* What are AI Agents */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          What are <span className="text-primary">AI Agents</span>?
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          AI agents are intelligent software systems designed to perceive data, make decisions, and take actions
          toward a specific goal — with minimal constant human input. Unlike simple chatbots that answer one turn at a time,
          agents maintain state, call tools, retrieve knowledge, and execute multi-step tasks until the outcome is done.
        </p>
      </section>

      {/* Key Activities */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Key Activities of Nexiqo&apos;s <span className="text-primary">AI Agent</span> Service
          </h2>
          <p className="text-muted-foreground text-lg">
            The concrete work we do to turn agentic AI into real operational leverage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Sparkles,
              title: "Custom AI Agent Development",
              desc: "We engineer agents for document analysis, research, support, sales ops, and more — selecting the right LLM, prompts, tools, and memory for your use case.",
            },
            {
              icon: Network,
              title: "Multi-Agent Orchestration",
              desc: "We design supervisor/worker crews and role-based agent teams that collaborate, reduce errors, and handle complex workflows end-to-end.",
            },
            {
              icon: Workflow,
              title: "Tool & System Integration",
              desc: "We connect agents to CRMs, ERPs, APIs, databases, and internal tools so they can take real action — not just generate text.",
            },
            {
              icon: ShieldCheck,
              title: "Evaluation, Observability & Governance",
              desc: "We add human-in-the-loop controls, monitoring, RBAC, and evaluation loops so agents stay reliable, auditable, and production-ready.",
            },
          ].map((activity, i) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-6 p-8 rounded-3xl border border-foreground/10 bg-white hover:shadow-lg hover:border-primary/20 transition-all group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <activity.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{activity.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Benefits of <span className="text-primary">AI Agents</span> with Nexiqo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Move past demos. Ship agents that automate work, improve accuracy, and free your team for higher-value decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Workflow Automation at Scale",
              desc: "Automate repetitive and complex multi-step processes — from lead qualification to invoice handling — with agents that plan and execute.",
            },
            {
              title: "Always-On Operations",
              desc: "Run support, research, and internal ops around the clock. Agents work continuously while humans stay in control of critical decisions.",
            },
            {
              title: "Higher Accuracy & Capacity",
              desc: "Reduce manual error in rule-heavy tasks and unlock capacity so your people focus on strategy, creativity, and relationships.",
            },
          ].map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] p-10 border border-foreground/10 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              <CheckCircle2 className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Where AI Agents <span className="text-primary">deliver ROI</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Highest-impact deployments span sales, support, operations, finance, and research-intensive workflows.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Sales & lead qualification",
            "Customer support automation",
            "Research & reporting agents",
            "Ops, finance & onboarding",
          ].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-foreground/10 bg-primary/5 px-6 py-5 text-center font-semibold text-foreground"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lifecycle */}
      <section className="py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our AI Agent <span className="text-primary">Lifecycle</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A structured path from use-case discovery to a monitored, production-grade agent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {lifecycleStages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[2.5rem] p-8 border border-foreground/10 relative z-10 flex flex-col items-center text-center group hover:bg-foreground hover:text-white transition-colors duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors duration-500">
                    <Icon className={`w-8 h-8 ${stage.color} group-hover:text-white transition-colors`} />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4">{stage.title}</h3>
                  <p className="text-sm opacity-70 group-hover:opacity-90 leading-relaxed">{stage.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <div className="rounded-[2.5rem] bg-foreground text-white p-12 md:p-16 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
          <h2 className="relative z-10 text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Ready to deploy <span className="text-primary">AI Agents</span>?
          </h2>
          <p className="relative z-10 text-white/70 mb-10 text-lg max-w-2xl mx-auto">
            Let&apos;s design agents that automate work, integrate with your systems, and deliver outcomes — not just demos.
          </p>
          <Link href="/contact" className="relative z-10 inline-block">
            <Button className="h-16 px-10 rounded-full bg-primary text-white hover:bg-primary/90 text-xl font-bold shadow-2xl hover:scale-105 transition-all">
              Book an Agent Strategy Call
            </Button>
          </Link>
        </div>
        <div className="mt-8">
          <Link href="/contact" className="inline-flex items-center gap-2 text-foreground font-bold hover:gap-4 transition-all">
            Talk about your use case <ArrowRight className="w-5 h-5 text-primary" />
          </Link>
        </div>
      </section>
    </div>
  );
}
