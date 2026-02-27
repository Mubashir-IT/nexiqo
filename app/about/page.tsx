"use client";

import { motion } from "framer-motion";
import { Users, Code, Target, Award, FileCode, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { teamMembers } from "@/lib/team-data";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent font-sans pt-6">
      {/* Hero Section */}
      <section className="relative min-h-[20vh] bg-transparent text-white pt-22 pb-10 px-6 overflow-hidden flex flex-col justify-center items-center z-10">
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-4">
          <div style={{ animation: "heroFadeUp 0.4s ease both" }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Users className="w-5 h-5 text-primary-soft" />
            <span className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/60 bg-white/5 backdrop-blur-sm">
              About Us
            </span>
          </div>

          <h1 style={{ animation: "heroFadeUp 0.45s 0.05s ease both" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            We are full stack <br className="hidden md:block" />
            <span className="text-primary-soft">website developers</span>
          </h1>

          <p style={{ animation: "heroFadeUp 0.45s 0.1s ease both" }}
            className="max-w-md text-sm md:text-md text-white/80 leading-relaxed"
          >
            Specializing in building custom websites from frontend to backend. We create high-performing digital solutions for your business.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="py-20 px-6 max-w-full mx-auto"
      >
        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Who We Are
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p className="text-lg">
              We are a team of full-stack developers dedicated to building high-performance websites and digital platforms.
            </p>
            <p>
              We design and develop custom websites from the ground up, handling both frontend and backend to deliver complete, scalable, and reliable solutions. Every project is built with a strong focus on usability, speed, and long-term maintainability.
            </p>
            <p>
              Our expertise covers modern frontend technologies, robust backend systems, and seamless third-party integrations. We work closely with our clients to understand their goals, challenges, and vision, ensuring every website is not only visually engaging but strategically built to perform.
            </p>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 mt-16"
          >
            What We Specialize In
          </motion.h2>
          <div className="space-y-10 text-white/80 leading-relaxed">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Custom Full-Stack Development
              </h3>
              <p>
                We create tailored web solutions engineered specifically for your business requirements. No templates, no shortcuts. Just clean, efficient, and scalable development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                WordPress Development & Design
              </h3>
              <p className="mb-4">
                We build powerful, flexible WordPress websites with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Custom theme development</li>
                <li>Plugin development & customization</li>
                <li>WooCommerce integration</li>
                <li>Performance optimization</li>
                <li>Security hardening</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                SEO & Growth Optimization
              </h3>
              <p className="mb-4">
                Beyond development, we help businesses increase visibility and attract the right audience through comprehensive SEO strategies.
              </p>
              <ul className="space-y-3 ml-2">
                <li>
                  <span className="font-medium text-white">On-Page SEO</span>
                  <br />
                  <span className="text-sm">Content structure, keyword optimization, meta tags, headings</span>
                </li>
                <li>
                  <span className="font-medium text-white">Off-Page SEO</span>
                  <br />
                  <span className="text-sm">Link building, authority signals, brand mentions</span>
                </li>
                <li>
                  <span className="font-medium text-white">Technical SEO</span>
                  <br />
                  <span className="text-sm">Site speed, mobile optimization, structured data, crawlability</span>
                </li>
                <li>
                  <span className="font-medium text-white">Local SEO</span>
                  <br />
                  <span className="text-sm">Google Business Profile optimization, local citations, map visibility</span>
                </li>
              </ul>
              <p className="mt-4">
                Our goal is simple: build websites that not only function flawlessly but also drive measurable growth.
              </p>
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 mt-16"
          >
            How We Work
          </motion.h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              We believe successful projects come from collaboration, transparency, and a clear understanding of business objectives. From planning to launch and beyond, we stay aligned with your vision and focused on delivering real results.
            </p>
          </div>
        </motion.div>

        {/* Meet the Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet the Team
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Our team of full stack developers brings together expertise in frontend and backend development. We combine technical skills with a collaborative approach to deliver exceptional websites for our clients.
            </p>
            <p className="text-white/80 leading-relaxed">
              Each team member specializes in different aspects of website development, from creating beautiful user interfaces to building robust backend systems. Together, we work as a cohesive unit to bring your website vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent opacity-100" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary-soft font-medium mb-3">{member.role}</p>
                  <p className="text-white/80 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Full Stack Development
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We handle both frontend and backend development, delivering complete website solutions from start to finish. We use modern technologies like React, Next.js, Node.js, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our full stack expertise ensures seamless integration between frontend and backend, creating fast, scalable, and maintainable websites.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center mb-6">
                <FileCode className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                WordPress Design
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We create custom WordPress websites with beautiful designs and powerful functionality. Our WordPress services include custom theme development, plugin creation, and WooCommerce integration.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We build WordPress sites that are fast, secure, SEO-friendly, and easy to manage. From custom themes to plugin development, we deliver professional WordPress solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                SEO Services
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We provide comprehensive SEO services to improve your website's search engine visibility. Our SEO approach includes On-Page SEO, Off-Page SEO, Technical SEO, and Local SEO.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We optimize content, build quality backlinks, improve site speed, and implement local SEO strategies to help your website rank better and attract more organic traffic.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Maintenance & Support
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We provide ongoing website maintenance, updates, and support to keep your site running smoothly. From bug fixes to feature additions, we ensure your website continues to perform well.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our support includes regular updates, security monitoring, performance optimization, and technical assistance whenever you need it.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {[
            {
              icon: Code,
              title: "Full Stack Expertise",
              desc: "We handle both frontend and backend development, delivering complete website solutions from start to finish."
            },
            {
              icon: Target,
              title: "Custom Solutions",
              desc: "Every project is tailored to your business needs. No templates, just custom-built websites designed for your goals."
            },
            {
              icon: Users,
              title: "Collaborative Approach",
              desc: "We work closely with you throughout the development process, ensuring your vision becomes reality."
            },
            {
              icon: Award,
              title: "Quality Focus",
              desc: "We build fast, scalable, and maintainable websites that perform well and grow with your business."
            }
          ].map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 bg-transparent rounded-[3rem] p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to work with us?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your website development project and see how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="h-14 px-8 rounded-full bg-primary-soft text-foreground hover:bg-primary-hover text-lg font-bold">
                Get in Touch
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outline" className="h-14 px-8 rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 text-lg font-medium">
                View Our Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

