"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ArrowDown, ArrowUpRight, PenTool, Smartphone, FileText, MessageCircle, Award, Star } from "lucide-react";
import { motion } from "framer-motion";
import { SiWordpress, SiReact, SiNextdotjs, SiNodedotjs, SiGoogle, SiGooglesearchconsole, SiGoogleadsense } from "react-icons/si";
import LogoLoop from "@/components/LogoLoop";
import { teamMembers } from "@/lib/team-data";
import Link from "next/link";
import Image from "next/image";
import { CodePanel } from "./components/HeroScene";

// Lazy-load below-fold section components
const ProcessCarousel = dynamic(() => import("@/components/sections/process-carousel").then(m => ({ default: m.ProcessCarousel })), { ssr: false });
const TestimonialSlider = dynamic(() => import("@/components/sections/testimonial-slider").then(m => ({ default: m.TestimonialSlider })), { ssr: false });
const WhatWeDo = dynamic(() => import("@/components/sections/what-we-do").then(m => ({ default: m.WhatWeDo })), { ssr: false });
const ProjectsCarousel = dynamic(() => import("@/components/sections/projects-carousel").then(m => ({ default: m.ProjectsCarousel })), { ssr: false });


export default function Home() {
  const heroText = "Building Digital Architectures";
  const [typedHeroText, setTypedHeroText] = useState("");
  const [isResetting, setIsResetting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const TYPE_SPEED = 55;
    const PAUSE_AFTER_COMPLETE = 3600;
    const FADE_OUT_DURATION = 300;
    let charIndex = 0;
    let disposed = false;
    const schedule = (fn: () => void, delay: number) => {
      timeoutRef.current = setTimeout(fn, delay);
    };

    const startTypingLoop = () => {
      if (disposed) return;

      if (charIndex <= heroText.length) {
        setTypedHeroText(heroText.slice(0, charIndex));
        charIndex += 1;
        schedule(startTypingLoop, TYPE_SPEED);
        return;
      }

      schedule(() => {
        if (disposed) return;
        setIsResetting(true);

        schedule(() => {
          if (disposed) return;
          charIndex = 0;
          setTypedHeroText("");
          setIsResetting(false);
          schedule(startTypingLoop, 120);
        }, FADE_OUT_DURATION);
      }, PAUSE_AFTER_COMPLETE);
    };

    startTypingLoop();

    return () => {
      disposed = true;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-[90vh] md:min-h-screen overflow-hidden bg-transparent font-sans selection:bg-primary-soft selection:text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-transparent text-white pt-32 pb-10 px-0 overflow-hidden flex flex-col justify-center">
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-8 px-6 md:px-10 lg:px-0 md:pr-[260px] text-center md:text-left items-center md:items-start md:-left-[100px]">
          {/* Tags */}
          <div
            className="flex flex-wrap justify-center md:justify-start gap-2 mb-4"
            style={{ animation: "heroFadeUp 0.4s ease both" }}
          >
            {["Perceptive Design", "Reasoned Architecture", "Precise Development", "Iterative Learning", "SEO Strategy"].map((tag) => (
              <span key={tag} className="px-2 md:px-3 py-1.5 text-center rounded-full border border-primary-soft/30 text-[10px] uppercase tracking-widest text-primary-soft bg-primary-soft/5 backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>

          <h1
            style={{ animation: "heroFadeUp 0.45s 0.05s ease both" }}
            className="w-full max-w-[12ch] text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] md:leading-[0.9] uppercase"
          >
            <span className="relative inline-block w-full whitespace-pre-wrap wrap-break-word">
              <span aria-hidden="true" className="invisible">
                {heroText}
              </span>
              <span className={`absolute inset-0 transition-opacity duration-300 ${isResetting ? "opacity-0" : "opacity-100"}`}>
                {typedHeroText}
                <span
                  aria-hidden="true"
                  className="ml-2 inline-block h-[0.82em] w-[0.04em] rounded-full bg-slate-600 animate-pulse align-[-0.06em]"
                />
              </span>
            </span>
          </h1>

          <p
            style={{ animation: "heroFadeUp 0.45s 0.1s ease both" }}
            className="max-w-2xl text-base md:text-lg text-white/60 leading-relaxed font-light mx-auto md:mx-0"
          >
            Cutting-edge web solutions that combine stunning design with enterprise-grade performance. We build digital experiences that captivate users and drive real business results.
          </p>

          <div
            style={{ animation: "heroFadeUp 0.4s 0.15s ease both" }}
            className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start"
          >
            <Link href="/contact">
              <Button className="h-16 px-10 rounded-full bg-primary-soft text-foreground hover:bg-white text-base font-bold transition-all hover:scale-105 active:scale-95 group">
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative side element */}
        <div
          className="absolute left-8 top-[45%] -translate-y-1/2 z-10 hidden xl:flex flex-col items-center gap-8"
          style={{ animation: "heroFadeIn 0.6s 0.3s ease both" }}
        >
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary-soft/50 to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 whitespace-nowrap font-medium rotate-[-90deg]">
            Est. 2026
          </span>
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary-soft/50 to-transparent" />
        </div>

        {/* Scroll Indicator */}
        {/* <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animation: "heroFadeIn 0.6s 0.3s ease both" }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary-soft to-transparent" />
        </div> */}
        {/* Logo Loop */}
        <div className="w-full mt-20">
          <div className="" style={{ height: '40px' }}>
            <LogoLoop
              logos={[
                { node: <SiWordpress className="text-primary-soft" />, title: "WordPress", href: "https://wordpress.org" },
                { node: <SiReact className="text-primary-soft" />, title: "React", href: "https://react.dev" },
                { node: <SiNextdotjs className="text-primary-soft" />, title: "Next.js", href: "https://nextjs.org" },
                { node: <SiNodedotjs className="text-primary-soft" />, title: "Node.js", href: "https://nodejs.org" },
                { node: <SiGooglesearchconsole className="text-primary-soft" />, title: "SEO", href: "https://search.google.com/search-console" },
                { node: <SiGoogleadsense className="text-primary-soft" />, title: "Google AdSense", href: "https://www.google.com/adsense" },
              ]}
              speed={80}
              direction="left"
              logoHeight={40}
              gap={40}
              hoverSpeed={20}
              scaleOnHover
              fadeOut
              fadeOutColor="#111827"
              ariaLabel="Technology stack and services"
              renderItem={(item, key) => {
                const content = (
                  <div className="flex items-center gap-3">
                    <span className="logoloop__node">{item.node}</span>
                    <span className="text-primary-soft text-sm font-medium whitespace-nowrap">{item.title}</span>
                  </div>
                );
                return item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="logoloop__link"
                    aria-label={item.ariaLabel || item.title || 'logo link'}
                  >
                    {content}
                  </a>
                ) : (
                  content
                );
              }}
            />
          </div>
        </div>


        <div className="hidden md:block shrink-0 w-[300px]">
            <CodePanel />
          </div>
      </section>

      {/* Logos Section */}
      {/* <section className="relative py-4 bg-foreground overflow-hidden z-10">
      <ParticleCardBackground/>

      </section> */}

      {/* Intro Section */}
      <div className="relative">
        {/* Decorative SVG Line - Overlay on heading, positioned to the left */}
        <div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl pointer-events-none z-0" style={{ left: '0%' }}>
          <img
            src="/images/intro_line_1.svg"
            alt="Decorative line"
            className="w-full h-auto"
          />
        </div>
        {/* Decorative SVG Line 2 - Overlay on heading, positioned in center */}
        <div className="hidden md:block absolute top-[53%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[200px] sm:max-w-xs pointer-events-none z-0">
          <img
            src="/images/intro_line_2.svg"
            alt="Decorative line 2"
            className="w-full h-auto"
          />
        </div>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="py-10 sm:py-12 md:py-16 lg:py-24 px-6 sm:px-12 md:px-20 lg:px-40 max-w-full mx-auto relative z-10"
        >
          <div className="flex flex-col text-center justify-center items-center relative">
            <div className="relative w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[950] tracking-tight text-white leading-tight sm:leading-none mb-6 sm:mb-8 relative z-10 px-4 sm:px-0">
                We engineer digital experiences that think, adapt, and perform.
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-4 sm:space-y-6 max-w-2xl px-4 sm:px-0"
            >
              <p className="text-sm sm:text-base md:text-md text-white/70 leading-relaxed sm:leading-tight">
                Nexiqo is a full stack web agency built on a structured lifecycle — Perceive, Reason, Act, Learn. We don&apos;t just build websites; we craft scalable architectures, intelligent interfaces, and drive measurable growth through precision SEO — all under one roof.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* Benefits Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.5 }}
        className="py-6 px-6 max-w-full mx-auto"
      >
        <div className="flex flex-col gap-8">
          {/* Top - Dark Panel */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative bg-transparent rounded-[3rem] p-4 md:p-8 lg:p-12 flex flex-col justify-between min-h-[200px] overflow-hidden"
          >
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-soft mb-12 leading-tight text-center">
                Your website is your hardest-working team member. We make it exceptional.
              </h2>
              <p className="text-white text-sm leading-relaxed text-center max-w-2xl">
                We engineer full stack web systems that attract, engage, and convert — then refine them continuously with data. Your growth is the product we&apos;re actually building.
              </p>
            </div>
          </motion.div>

          {/* Bottom - White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Interface Engineering",
                desc: "First impressions are built in milliseconds. We craft pixel-perfect, blazing-fast interfaces that captivate from the first scroll — and keep users coming back. Every interaction is intentional, every animation purposeful.",
                icon: Smartphone
              },
              {
                title: "Backend Architecture",
                desc: "The engine behind the experience. We architect secure, scalable APIs and server systems built for performance under pressure — so your platform never breaks when it matters most.",
                icon: FileText
              },
              {
                title: "Custom WordPress",
                desc: "Not templates. Not shortcuts. We build custom WordPress solutions — tailored themes, bespoke plugins, and WooCommerce stores — engineered to rank, convert, and scale on your terms.",
                icon: PenTool
              },
              {
                title: "Precision SEO",
                desc: "Visibility isn't luck — it's engineering. We apply On-Page, Off-Page, Technical, and Local SEO strategies that compound over time, putting your business in front of the clients actively searching for you.",
                icon: MessageCircle
              }
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.12 }}
                  className="bg-card rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm border border-input hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <IconComponent className="w-8 h-8 text-foreground opacity-20" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Process Carousel */}
      <ProcessCarousel />

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="py-10 px-6 max-w-full mx-auto"
      >
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Meet the team
          </h2>
          <Link href="/about">
            <Button variant="link" className="text-white text-lg font-medium hidden md:flex items-center gap-2">
              View About <ArrowRight size={20} />
            </Button>
          </Link>
        </div>

        <div className="max-w-8xl mx-auto justify-center items-center flex flex-cols-2 lg:flex-cols-3 gap-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group flex flex-row overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex-shrink-0 w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 overflow-hidden rounded-l-2xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="flex flex-col justify-center py-2 pr-3 pl-2 min-w-0 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-white mb-0.5 leading-tight">{member.name}</h3>
                <p className="text-primary-soft font-medium text-xs">{member.role}</p>
                <p className="text-white/60 text-xs leading-snug line-clamp-4 mt-0.5">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Recent Projects Section */}
      {/* <ProjectsCarousel /> */}

      {/* Footer CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative py-10 bg-transparent text-white rounded-t-[3rem] mt-10 overflow-hidden"
      >
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Ready to start your <span className="text-primary-soft">website project</span>?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Link href="/contact">
              <Button className="h-14 px-8 rounded-full bg-primary-soft text-foreground hover:bg-primary-soft/80 text-lg font-bold">
                Schedule Intro Call
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outline" className="h-14 px-8 rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 text-lg font-medium">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

