"use client";

import { motion } from "framer-motion";
import { BookingSection } from "@/components/sections/booking-section";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent font-sans pt-6">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-transparent text-white pt-32 pb-10 px-6 overflow-hidden flex flex-col justify-center items-center z-10">
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-4">
          <div style={{ animation: "heroFadeUp 0.4s ease both" }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Calendar className="w-5 h-5 text-primary-soft" />
            <span className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 bg-white/5 backdrop-blur-sm">
              Book a Meeting
            </span>
          </div>

          <h1 style={{ animation: "heroFadeUp 0.45s 0.05s ease both" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            Let's discuss your <br className="hidden md:block" />
            <span className="text-primary-soft">website project</span>
          </h1>

          <p style={{ animation: "heroFadeUp 0.45s 0.1s ease both" }}
            className="max-w-md text-sm md:text-md text-white/80 leading-relaxed"
          >
            Schedule a call with our team to discuss your website development needs. Whether you need full stack development, WordPress design, or SEO services, we're here to help bring your vision to life.
          </p>
        </div>
      </section>

      <BookingSection />

      {/* Services Overview */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="py-20 px-6 max-w-full mx-auto"
      >
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Full Stack Development", desc: "Custom website development from frontend to backend. We build scalable, performant websites using modern technologies like React, Next.js, and Node.js." },
              { title: "WordPress Design", desc: "Custom WordPress themes, plugin development, WooCommerce integration, and WordPress optimization for fast, secure, and SEO-friendly sites." },
              { title: "SEO Services", desc: "Comprehensive SEO including On-Page, Off-Page, Technical, and Local SEO to improve search rankings and drive organic traffic." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-6 max-w-full mx-auto"
      >
        <div className="relative z-10 bg-transparent rounded-[3rem] p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to work with us?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your website development project, WordPress needs, or SEO requirements. We're here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="h-14 px-8 rounded-full bg-primary-soft text-foreground hover:bg-[#c5e885] text-lg font-bold">
                Get in Touch
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

