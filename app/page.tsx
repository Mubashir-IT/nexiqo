"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Smartphone, FileText, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiNodedotjs, SiGooglesearchconsole, SiGoogleadsense, SiOpenai } from "react-icons/si";
import LogoLoop from "@/components/LogoLoop";
import { teamMembers } from "@/lib/team-data";
import Link from "next/link";
import Image from "next/image";

const ProcessCarousel = dynamic(() => import("@/components/sections/process-carousel").then(m => ({ default: m.ProcessCarousel })), { ssr: false });
const TestimonialSlider = dynamic(() => import("@/components/sections/testimonial-slider").then(m => ({ default: m.TestimonialSlider })), { ssr: false });
const WhatWeDo = dynamic(() => import("@/components/sections/what-we-do").then(m => ({ default: m.WhatWeDo })), { ssr: false });

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: easeOut },
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-white font-sans selection:bg-primary/20 selection:text-foreground">
      {/* Hero */}
      <section className="relative min-h-screen pt-28 md:pt-32 pb-12 px-6 overflow-hidden">
        {/* Soft tech glow accents */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[42vw] h-[42vw] rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute bottom-0 left-[-10%] w-[36vw] h-[36vw] rounded-full bg-violet-400/10 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left copy */}
          <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="flex flex-wrap justify-center lg:justify-start gap-2"
            >
              {["Full Stack", "AI Agents", "SEO", "Product Design"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full border border-foreground/10 text-[10px] uppercase tracking-widest text-foreground/60 bg-white shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground"
            >
              Building digital{" "}
              <span className="text-primary">architectures</span>{" "}
              that perform
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: easeOut }}
              className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Cutting-edge web solutions that combine stunning design with enterprise-grade performance.
              We build digital experiences that captivate users and drive real business results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24, ease: easeOut }}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <Link href="/contact">
                <Button className="h-14 px-8 rounded-full bg-foreground text-white hover:bg-foreground/90 text-base font-bold transition-all hover:scale-[1.03] active:scale-95 group shadow-lg shadow-foreground/10">
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/process">
                <Button
                  variant="outline"
                  className="h-14 px-8 rounded-full border-foreground/15 bg-white text-foreground hover:bg-foreground/5 text-base font-semibold"
                >
                  Our Process
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right 3D visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: easeOut }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[560px] aspect-square"
            >
              <div className="absolute inset-6 rounded-full bg-primary/10 blur-3xl" />
              <Image
                src="/images/hero3.png"
                alt="Nexiqo collaborative digital workspace"
                fill
                priority
                className="object-contain drop-shadow-2xl relative z-10"
                sizes="(max-width: 768px) 90vw, 560px"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Logo loop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: easeOut }}
          className="relative z-10 w-full max-w-[1400px] mx-auto mt-16 md:mt-20"
        >
          <div style={{ height: "40px" }}>
            <LogoLoop
              logos={[
                { node: <SiOpenai className="text-foreground/70" />, title: "AI Agents", href: "/services/ai-agents" },
                { node: <SiReact className="text-foreground/70" />, title: "React", href: "https://react.dev" },
                { node: <SiNextdotjs className="text-foreground/70" />, title: "Next.js", href: "https://nextjs.org" },
                { node: <SiNodedotjs className="text-foreground/70" />, title: "Node.js", href: "https://nodejs.org" },
                { node: <SiGooglesearchconsole className="text-foreground/70" />, title: "SEO", href: "https://search.google.com/search-console" },
                { node: <SiGoogleadsense className="text-foreground/70" />, title: "Google AdSense", href: "https://www.google.com/adsense" },
              ]}
              speed={80}
              direction="left"
              logoHeight={40}
              gap={40}
              hoverSpeed={20}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology stack and services"
              renderItem={(item, key) => {
                const content = (
                  <div className="flex items-center gap-3">
                    <span className="logoloop__node">{item.node}</span>
                    <span className="text-foreground/70 text-sm font-medium whitespace-nowrap">{item.title}</span>
                  </div>
                );
                return item.href ? (
                  <a
                    key={key}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="logoloop__link"
                    aria-label={item.ariaLabel || item.title || "logo link"}
                  >
                    {content}
                  </a>
                ) : (
                  <span key={key}>{content}</span>
                );
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Intro */}
      <motion.section
        {...fadeUp}
        className="py-16 md:py-24 px-6 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[950] tracking-tight text-foreground leading-tight mb-6">
          We engineer digital experiences that{" "}
          <span className="text-primary">think</span>,{" "}
          <span className="text-primary">adapt</span>, and{" "}
          <span className="text-primary">perform</span>.
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.12, ease: easeOut }}
          className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          Nexiqo is a full stack web agency built on a structured lifecycle — Perceive, Reason, Act, Learn.
          We don&apos;t just build websites; we craft scalable architectures, intelligent interfaces, and drive
          measurable growth through precision SEO — all under one roof.
        </motion.p>
      </motion.section>

      {/* Benefits */}
      <section className="py-10 px-6 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
            Your website is your hardest-working team member. We make it{" "}
            <span className="text-primary">exceptional</span>.
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            We engineer full stack web systems that attract, engage, and convert — then refine them continuously with data.
            Your growth is the product we&apos;re actually building.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Interface Engineering",
              desc: "First impressions are built in milliseconds. We craft pixel-perfect, blazing-fast interfaces that captivate from the first scroll — and keep users coming back.",
              icon: Smartphone,
            },
            {
              title: "Backend Architecture",
              desc: "The engine behind the experience. We architect secure, scalable APIs and server systems built for performance under pressure.",
              icon: FileText,
            },
            {
              title: "AI Agents",
              desc: "Not chatbots. Not demos. We build autonomous AI agents that plan, use your tools, and execute multi-step workflows — support, sales, research, and ops.",
              icon: Bot,
            },
            {
              title: "Precision SEO",
              desc: "Visibility isn't luck — it's engineering. We apply On-Page, Off-Page, Technical, and Local SEO strategies that compound over time.",
              icon: MessageCircle,
            },
          ].map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 64 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, ease: easeOut, delay: 0.08 + i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm border border-foreground/8 hover:shadow-xl hover:border-primary/20 transition-shadow duration-300"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6">{item.desc}</p>
                </div>
                <div className="flex justify-end">
                  <IconComponent className="w-8 h-8 text-primary opacity-40" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <WhatWeDo />
      <ProcessCarousel />

      {/* Team */}
      <motion.section
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="py-16 px-6 max-w-[1400px] mx-auto"
      >
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Meet the <span className="text-primary">team</span>
          </h2>
          <Link href="/about">
            <Button variant="link" className="text-foreground text-lg font-medium hidden md:flex items-center gap-2">
              View About <ArrowRight size={20} />
            </Button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.08, ease: easeOut }}
              className="group flex flex-row overflow-hidden rounded-2xl border border-foreground/10 bg-white hover:shadow-lg transition-shadow max-w-md w-full"
            >
              <div className="flex-shrink-0 w-36 h-36 sm:w-44 sm:h-44 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="flex flex-col justify-center py-3 pr-4 pl-3 min-w-0 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-foreground mb-0.5 leading-tight">{member.name}</h3>
                <p className="text-primary font-medium text-xs">{member.role}</p>
                <p className="text-muted-foreground text-xs leading-snug line-clamp-4 mt-1">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <TestimonialSlider />

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="relative py-20 md:py-28 px-6"
      >
        <div className="max-w-4xl mx-auto text-center rounded-[2.5rem] bg-foreground text-white p-10 md:p-16 overflow-hidden relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
          <h2 className="relative z-10 text-4xl md:text-6xl font-bold mb-6">
            Ready to start your <span className="text-primary">website project</span>?
          </h2>
          <p className="relative z-10 text-white/70 mb-10 max-w-xl mx-auto">
            Let&apos;s discuss your vision and build something exceptional together.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="h-14 px-8 rounded-full bg-primary text-white hover:bg-primary/90 text-lg font-bold">
                Schedule Intro Call
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
        </div>
      </motion.section>
    </div>
  );
}
