"use client";

import { motion } from "framer-motion";
import { BookingSection } from "@/components/sections/booking-section";
import { Calendar, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5 text-primary" />
            <span className="px-4 py-2 rounded-full border border-foreground/10 text-sm text-foreground/60 bg-white shadow-sm">
              Book a Meeting
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: easeOut }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground"
          >
            Let&apos;s discuss your{" "}
            <span className="text-primary">website project</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: easeOut }}
            className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Schedule a call with our team. Whether you need full stack development, AI agents, or SEO services — we&apos;re here to help bring your vision to life.
          </motion.p>

          {/* Quick contact info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: easeOut }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mt-2"
          >
            <a href="mailto:info@nexiqo.co" className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors">
              <Mail size={16} className="text-primary" /> info@nexiqo.co
            </a>
            <a href="tel:+923029090126" className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors">
              <Phone size={16} className="text-primary" /> +92 302 9090126
            </a>
            <span className="flex items-center gap-2 text-sm text-foreground/70">
              <MapPin size={16} className="text-primary" /> Multan, Pakistan
            </span>
          </motion.div>
        </div>
      </section>

      <BookingSection />

      {/* Services Overview */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="py-20 px-6 max-w-[1400px] mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
          Our <span className="text-primary">Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Full Stack Development", desc: "Custom website development from frontend to backend using React, Next.js, and Node.js." },
            { title: "AI Agents", desc: "Autonomous AI agents that plan, reason, and execute — with tool integrations and production-ready governance." },
            { title: "SEO Services", desc: "On-Page, Off-Page, Technical, and Local SEO to improve rankings and drive organic traffic." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.1, ease: easeOut }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-foreground/10 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="py-16 px-6"
      >
        <div className="max-w-4xl mx-auto text-center rounded-[2.5rem] bg-foreground text-white p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
          <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-6">
            Ready to work with <span className="text-primary">us</span>?
          </h2>
          <p className="relative z-10 text-white/70 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your website project, AI agent needs, or SEO requirements.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button className="h-14 px-8 rounded-full bg-primary text-white hover:bg-primary/90 text-lg font-bold">
                Book a Call
              </Button>
            </a>
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
