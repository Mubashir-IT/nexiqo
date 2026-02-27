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
      className="relative bg-transparent text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-full mx-auto px-6 py-12 md:py-16">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
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
                className="h-14 w-auto object-contain"

              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Full stack developers specializing in website creation and development. We build custom websites from frontend to backend, create WordPress solutions, and provide comprehensive SEO services.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-soft hover:text-foreground flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-soft hover:text-foreground flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-soft hover:text-foreground flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/nexiqo_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-soft hover:text-foreground flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6 text-primary-soft">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/full-stack-development" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link href="/services/frontend-development" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link href="/services/backend-development" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  Backend Development
                </Link>
              </li>
              <li>
                <Link href="/services/wordpress-design" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  WordPress Design
                </Link>
              </li>
              <li>
                <Link href="/services/seo-services" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance-support" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <h3 className="text-lg font-bold mb-6 text-primary-soft">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/action-plan" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  Action Plan
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 text-primary-soft">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary-soft mt-0.5 shrink-0" />
                <a href="info@nexiqo.co" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  info@nexiqo.co
                </a>
              </li>
              {/* <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary-soft mt-0.5 shrink-0" />
                <a href="tel:+441234567890" className="text-white/70 hover:text-primary-soft transition-colors text-sm">
                  +44 123 456 7890
                </a>
              </li> */}
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-soft mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  London, United Kingdom
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-2 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Nexiqo. All rights reserved.
            </p>
            {/* <div className="flex flex-wrap gap-6 text-sm">
              <Link href="#" className="text-white/60 hover:text-primary-soft transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/60 hover:text-primary-soft transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/60 hover:text-primary-soft transition-colors">
                Cookie Policy
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

