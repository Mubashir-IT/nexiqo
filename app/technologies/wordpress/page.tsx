"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileCode, Palette, ShoppingCart, Zap, Shield, Settings } from "lucide-react";

export default function WordPressPage() {
  return (
    <div className="min-h-screen bg-transparent font-sans pt-8">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-transparent text-white pt-22 pb-10 px-6 overflow-hidden flex flex-col justify-center items-center z-10">
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-4">
          <div style={{ animation: "heroFadeUp 0.4s ease both" }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <FileCode className="w-5 h-5 text-primary-soft" />
            <span className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 bg-white/5 backdrop-blur-sm">
              WordPress
            </span>
          </div>

          <h1 style={{ animation: "heroFadeUp 0.45s 0.05s ease both" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            WordPress <br className="hidden md:block" />
            <span className="text-primary-soft">development expertise</span>
          </h1>

          <p style={{ animation: "heroFadeUp 0.45s 0.1s ease both" }}
            className="max-w-md text-sm md:text-md text-white/80 leading-relaxed"
          >
            We specialize in custom WordPress development, creating powerful themes, plugins, and WooCommerce solutions that are fast, secure, and easy to manage.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <div className="relative">
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-6 sm:px-12 md:px-20 lg:px-40 max-w-full mx-auto relative z-10">
          <div className="flex flex-col text-center justify-center items-center relative">
            <div className="relative w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[950] tracking-tight text-white leading-tight sm:leading-none mb-6 sm:mb-8 relative z-10 px-4 sm:px-0">
                WordPress powers over 43% <br className="hidden md:block" />
                of all websites worldwide
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-6 max-w-2xl px-4 sm:px-0">
              <p className="text-sm sm:text-base md:text-md text-white/80 leading-relaxed sm:leading-tight">
                We leverage WordPress to create custom, enterprise-grade solutions for businesses of all sizes. Our WordPress development approach combines the platform's powerful content management capabilities with custom development to deliver websites that are not only easy to manage but also perform exceptionally well in terms of speed, security, and search engine optimization.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Benefits Grid */}
      <section className="py-20 px-6 max-w-full mx-auto">
        <div className="flex flex-col gap-8">
          {/* Dark Panel */}
          <div className="relative bg-transparent rounded-[3rem] p-4 md:p-8 lg:p-12 flex flex-col justify-between min-h-[200px] overflow-hidden z-10">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-soft mb-12 leading-tight text-center">
                custom wordpress solutions
              </h2>
              <p className="text-white text-sm leading-tight text-center max-w-2xl">
                Our WordPress expertise spans custom theme development from scratch, bespoke plugin creation, WooCommerce e-commerce integration, advanced performance optimization techniques, and comprehensive security hardening. We follow WordPress coding standards and best practices to ensure maintainable, scalable, and future-proof solutions.
              </p>
            </div>
          </div>

          {/* White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Palette,
                title: "Custom Theme Development",
                desc: "We develop custom WordPress themes from scratch using modern development practices. Our themes are built with clean, semantic HTML5, CSS3, and JavaScript, following WordPress coding standards. Each theme is fully responsive, accessible, and optimized for performance and SEO. We ensure pixel-perfect design implementation with complete control over every aspect of your website's appearance and functionality."
              },
              {
                icon: FileCode,
                title: "Custom Plugin Development",
                desc: "We create bespoke WordPress plugins tailored to your specific business needs. Our plugins are built following WordPress best practices, ensuring compatibility, security, and maintainability. Whether you need custom post types, advanced functionality, or integrations with third-party services, we develop plugins that extend WordPress core functionality seamlessly and efficiently."
              },
              {
                icon: ShoppingCart,
                title: "WooCommerce E-Commerce",
                desc: "We specialize in WooCommerce development, creating powerful online stores with custom product types, payment gateway integrations, shipping solutions, and inventory management. Our WooCommerce implementations include custom themes, extensions, and optimizations to ensure fast, secure, and user-friendly shopping experiences that drive conversions and sales."
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                desc: "We implement comprehensive performance optimization strategies including object caching, database optimization, image compression, lazy loading, CDN integration, and code minification. Our optimization techniques ensure WordPress sites load in under 2 seconds, improving user experience, reducing bounce rates, and positively impacting search engine rankings."
              },
              {
                icon: Shield,
                title: "Security Hardening",
                desc: "We implement enterprise-level security measures including SSL certificates, security plugins, regular security audits, malware scanning, firewall protection, and secure authentication. We follow WordPress security best practices, keep core and plugins updated, and implement measures to protect against common vulnerabilities like SQL injection, XSS attacks, and brute force attempts."
              },
              {
                icon: Settings,
                title: "Content Management",
                desc: "We create intuitive, user-friendly WordPress admin interfaces with custom post types, taxonomies, and meta boxes. We provide comprehensive training and documentation, ensuring your team can easily manage content, update pages, and maintain the website without technical expertise. Our WordPress sites are designed for non-technical users while maintaining professional standards."
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

      {/* Additional Features Section */}
      <section className="py-20 px-6 max-w-full mx-auto">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Why Choose WordPress?
          </h2>
          <p className="text-white/80 leading-relaxed text-center text-lg">
            WordPress offers unparalleled flexibility, extensibility, and a massive ecosystem that makes it the ideal platform for businesses of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Open Source",
              desc: "Free, open-source platform with a massive community and extensive documentation."
            },
            {
              title: "Extensible",
              desc: "Thousands of themes and plugins available, plus unlimited custom development possibilities."
            },
            {
              title: "User-Friendly",
              desc: "Intuitive admin interface that makes content management easy for non-technical users."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-full mx-auto">
        <div className="relative bg-transparent rounded-[3rem] p-12 md:p-16 text-center z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to build with WordPress?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your WordPress project and create a custom solution using this powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="h-14 px-8 rounded-full bg-primary-soft text-foreground hover:bg-primary-hover text-lg font-bold">
                Get in Touch
              </Button>
            </Link>
            <Link href="/services/wordpress-design">
              <Button variant="outline" className="h-14 px-8 rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 text-lg font-medium">
                View WordPress Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

