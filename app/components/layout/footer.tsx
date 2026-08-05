"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative bg-white text-foreground border-t border-foreground/5 overflow-hidden"
    >
      <div className="relative z-10 max-w-full mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <img
                src="/images/nexiqo.png"
                alt="Nexiqo"
                className="h-14 w-auto object-contain brightness-0"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Full stack developers specializing in website creation, AI agent development, and SEO. We build custom websites from frontend to backend, deploy autonomous AI agents, and drive measurable growth.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/nexiqo-digital"
                className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/Nexiqo_digital"
                className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter"
                target="_blank"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61585476089125"
                className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
                target="_blank"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/nexiqo_digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6 text-foreground">Services</h3>
            <ul className="space-y-3">
              {[
                ["/services/full-stack-development", "Full Stack Development"],
                ["/services/frontend-development", "Frontend Development"],
                ["/services/backend-development", "Backend Development"],
                ["/services/ai-agents", "AI Agents"],
                ["/services/seo-services", "SEO Services"],
                ["/services/maintenance-support", "Maintenance & Support"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <h3 className="text-lg font-bold mb-6 text-foreground">Company</h3>
            <ul className="space-y-3">
              {[
                ["/about", "About Us"],
                ["/process", "Our Process"],
                ["/action-plan", "Action Plan"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 text-foreground">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5 shrink-0" />
                <a href="mailto:info@nexiqo.co" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  info@nexiqo.co
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                <a href="tel:+923029090126" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +923029090126
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">Multan, Pakistan</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-foreground/10 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Nexiqo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
