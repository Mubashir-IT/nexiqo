"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ArrowDown, ArrowUpRight, PenTool, Smartphone, FileText, MessageCircle, Award, Star } from "lucide-react";
import { motion } from "framer-motion";
import { SiWordpress, SiReact, SiNextdotjs, SiNodedotjs, SiGoogle, SiGooglesearchconsole, SiGoogleadsense } from "react-icons/si";
import LogoLoop from "@/components/LogoLoop";
import { teamMembers } from "@/lib/team-data";
import Link from "next/link";
import Image from "next/image";

// Lazy-load heavy Three.js + animation components — load AFTER hero text renders
const HeroScene = dynamic(() => import("@/components/HeroScene"), { ssr: false, loading: () => null });
const ParticleCardBackground = dynamic(() => import("@/components/ParticleCardBackground"), { ssr: false, loading: () => null });

// Lazy-load below-fold section components
const ProcessCarousel = dynamic(() => import("@/components/sections/process-carousel").then(m => ({ default: m.ProcessCarousel })), { ssr: false });
const TestimonialSlider = dynamic(() => import("@/components/sections/testimonial-slider").then(m => ({ default: m.TestimonialSlider })), { ssr: false });
const WhatWeDo = dynamic(() => import("@/components/sections/what-we-do").then(m => ({ default: m.WhatWeDo })), { ssr: false });
const ProjectsCarousel = dynamic(() => import("@/components/sections/projects-carousel").then(m => ({ default: m.ProjectsCarousel })), { ssr: false });

export default function Home() {

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary-soft selection:text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-foreground text-white pt-32 pb-10 px-0 overflow-hidden flex flex-col justify-center items-center">
        {/* Three.js Background Scene - Positioned absolute behind content */}
        <div className="absolute inset-0 z-0">
          <HeroScene />
        </div>

        {/* Background Effects - Lower z-index than content */}
        {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] bg-primary-soft/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary-soft/5 rounded-full blur-[100px]" />
        </div> */}

        <div className="relative z-10 max-w-full mx-auto text-center flex flex-col items-center gap-8">
          {/* Tags */}
          <div
            className="flex flex-wrap justify-center gap-3 mb-4"
            style={{ animation: "heroFadeUp 0.4s ease both" }}
          >
            {["Perceptive Design", "Reasoned Architecture", "Precise Development", "Iterative Learning", "SEO Strategy"].map((tag) => (
              <span key={tag} className="px-4 py-1.5 text-center rounded-full border border-primary-soft/30 text-[10px] uppercase tracking-widest text-primary-soft bg-primary-soft/5 backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>

          <h1
            style={{ animation: "heroFadeUp 0.45s 0.05s ease both" }}
            className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] md:leading-[0.85] text-balance uppercase"
          >
            Building <span className="text-primary-soft">Digital</span> <br />
            Architectures
          </h1>

          <p
            style={{ animation: "heroFadeUp 0.45s 0.1s ease both" }}
            className="max-w-2xl text-base md:text-lg text-white/60 leading-relaxed font-light"
          >
            Cutting-edge web solutions that combine stunning design with enterprise-grade performance. We build digital experiences that captivate users and drive real business results.
          </p>

          <div
            style={{ animation: "heroFadeUp 0.4s 0.15s ease both" }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
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
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden xl:flex flex-col items-center gap-8"
          style={{ animation: "heroFadeIn 0.6s 0.3s ease both" }}
        >
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary-soft/50 to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 whitespace-nowrap font-medium rotate-[-90deg]">
            Est. 2026
          </span>
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary-soft/50 to-transparent" />
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animation: "heroFadeIn 0.6s 0.3s ease both" }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary-soft to-transparent" />
        </div>
        <div className="w-full mt-20">
          <div className="opacity-80" style={{ height: '40px' }}>
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
        <section className="py-10 sm:py-12 md:py-16 lg:py-24 px-6 sm:px-12 md:px-20 lg:px-40 max-w-full mx-auto relative z-10">
          <div className="flex flex-col text-center justify-center items-center relative">
            <div className="relative w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[950] tracking-tight text-foreground leading-tight sm:leading-none mb-6 sm:mb-8 relative z-10 px-4 sm:px-0">
                We engineer digital experiences that think, adapt, and perform.
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-6 max-w-2xl px-4 sm:px-0">
              <p className="text-sm sm:text-base md:text-md text-gray-600 leading-relaxed sm:leading-tight">
                Nexiqo is a full stack web agency built on a structured lifecycle — Perceive, Reason, Act, Learn. We don&apos;t just build websites; we craft scalable architectures, intelligent interfaces, and drive measurable growth through precision SEO — all under one roof.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Benefits Grid */}
      <section className="py-6 px-6 max-w-full mx-auto">
        <div className="flex flex-col gap-8">
          {/* Top - Dark Panel */}
          <div className="relative bg-foreground rounded-[3rem] p-4 md:p-8 lg:p-12 flex flex-col justify-between min-h-[200px] overflow-hidden">
            <ParticleCardBackground />
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-soft mb-12 leading-tight text-center">
                Your website is your hardest-working team member. We make it exceptional.
              </h2>
              <p className="text-white text-sm leading-relaxed text-center max-w-2xl">
                We engineer full stack web systems that attract, engage, and convert — then refine them continuously with data. Your growth is the product we&apos;re actually building.
              </p>
            </div>
          </div>

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
                <div key={i} className="bg-card rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm border border-input hover:shadow-md transition-shadow duration-300">
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Process Carousel */}
      <ProcessCarousel />

      {/* Team Section */}
      <section className="py-10 px-6 max-w-full mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Meet the team
          </h2>
          <Link href="/about">
            <Button variant="link" className="text-foreground text-lg font-medium hidden md:flex items-center gap-2">
              See all members <ArrowRight size={20} />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[4/5]">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent opacity-100" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-primary-soft font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Recent Projects Section */}
      <ProjectsCarousel />

      {/* Footer CTA */}
      <section className="relative py-10 bg-foreground text-white rounded-t-[3rem] mt-10 overflow-hidden">

        <ParticleCardBackground />
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
      </section>
    </div>
  );
}

