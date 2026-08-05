"use client";

import { Search, Users, GitBranch, Layout, Palette, Code, Settings, Globe, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const processSteps = [
  {
    id: "discovery",
    label: "Discovery",
    icon: Search,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
    content: {
      title: "Project Discovery",
      description: "We start every website development project with a discovery session. This is where we learn about your business, your goals, your target audience, and what you need from your website. We listen, understand, and plan the technical approach.",
      additional: "We are full stack developers who take a conversation-driven approach. No long forms—just direct discussions to understand your requirements and create a custom development plan.",
      details: [
        "We discuss your business objectives, target audience, and what you want your website to achieve for your business.",
        "We understand your technical requirements, including any integrations, features, or functionality you need.",
        "We identify the best technology stack for your project—whether it's React, Next.js, Node.js, or other modern frameworks.",
        "We define the project scope, timeline, and deliverables so you know exactly what to expect.",
        "We establish communication channels and project management processes to keep you informed throughout development."
      ]
    }
  },
  {
    id: "personas",
    label: "Planning",
    icon: Users,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
    content: {
      title: "User Research & Planning",
      description: "We research your target users and plan the website structure. Understanding who will use your website helps us build features and interfaces that work well for your audience.",
      additional: "This step ensures we develop a website that your users will find intuitive and useful, leading to better engagement and conversions.",
      details: [
        "We identify your primary user types and their needs, goals, and how they'll interact with your website.",
        "We plan the website structure and information architecture to make it easy for users to find what they need.",
        "We determine key features and functionality based on user needs and business goals.",
        "We plan the user experience flow to ensure smooth navigation and clear pathways through your site.",
        "We document technical requirements and user stories to guide the development process."
      ]
    }
  },
  {
    id: "user-flow",
    label: "Architecture",
    icon: GitBranch,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    content: {
      title: "User Flow & Architecture",
      description: "We map out how users will navigate through your website and plan the technical architecture. This ensures both the user experience and the technical structure are well-designed.",
      additional: "By planning user flows and system architecture together, we create websites that are both user-friendly and technically sound.",
      details: [
        "We create user flow diagrams showing how users move through your website to complete key actions.",
        "We design the technical architecture, including frontend structure, backend systems, and database schema.",
        "We plan API endpoints and data flow to ensure smooth communication between frontend and backend.",
        "We identify key pages and features, prioritizing what's most important for your users and business.",
        "We document the technical specifications that will guide our development work."
      ]
    }
  },
  {
    id: "wireframes",
    label: "Design",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
    content: {
      title: "Design & Wireframes",
      description: "We create wireframes and designs for your website. This step establishes the layout, structure, and visual design before we start coding.",
      additional: "Good design and clear wireframes make development more efficient and ensure the final website looks and works exactly as intended.",
      details: [
        "We create wireframes showing the layout and structure of each page, focusing on functionality and user experience.",
        "We design the visual interface, including colors, typography, and component styles that match your brand.",
        "We ensure designs are responsive and will work well on desktop, tablet, and mobile devices.",
        "We create design specifications and assets that our development team will use to build the website.",
        "We review and refine designs with you before moving to development to ensure everything meets your expectations."
      ]
    }
  },
  {
    id: "ui-design",
    label: "Frontend",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop",
    content: {
      title: "Frontend Development",
      description: "We build the frontend of your website using modern technologies. This includes creating responsive layouts, interactive components, and ensuring everything looks and works perfectly.",
      additional: "We use frameworks like React, Next.js, or Vue to build fast, interactive user interfaces. We provide excellent user experiences across all platforms.",
      details: [
        "We develop responsive frontend components that work seamlessly across all devices and screen sizes.",
        "We implement interactive features, animations, and user interface elements that enhance the user experience.",
        "We ensure the frontend is optimized for performance, with fast loading times and smooth interactions.",
        "We integrate with backend APIs to display dynamic content and handle user interactions.",
        "We test the frontend across different browsers and devices to ensure consistent functionality."
      ]
    }
  },
  {
    id: "development",
    label: "Backend",
    icon: Code,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
    content: {
      title: "Backend Development",
      description: "We develop the backend systems that power your website. This includes server-side logic, databases, APIs, and all the technical infrastructure your website needs.",
      additional: "We build robust, scalable backends that handle data, user authentication, integrations, and all the functionality your website requires.",
      details: [
        "We develop server-side logic and APIs that handle business logic, data processing, and integrations.",
        "We design and implement databases to store and manage your website's data efficiently.",
        "We set up authentication and authorization systems to secure user accounts and protect sensitive data.",
        "We integrate third-party services and APIs as needed for payment processing, email, analytics, or other features.",
        "We implement security best practices, including data encryption, secure authentication, and protection against common vulnerabilities."
      ]
    }
  },
  {
    id: "ai-agents",
    label: "AI Agents",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
    content: {
      title: "AI Agent Development",
      description: "We build autonomous AI agents that plan, reason, and execute — going beyond chatbots to complete multi-step work across your tools and systems.",
      additional: "Our AI agent services cover custom agents, multi-agent orchestration, tool integrations, RAG, and production governance so agents deliver outcomes — not just demos.",
      details: [
        "We develop custom agents for support, sales, research, document analysis, and internal operations.",
        "We design multi-agent systems with clear roles so specialized agents collaborate toward shared goals.",
        "We connect agents to CRMs, APIs, databases, and internal tools so they can take real action.",
        "We implement memory, RAG, and evaluation loops for grounded, reliable responses.",
        "We add observability, guardrails, and human-in-the-loop controls for production safety.",
        "We monitor agent quality and refine prompts, tools, and workflows based on real outcomes.",
        "We document and train your team so agents stay maintainable after launch."
      ]
    }
  },
  {
    id: "seo",
    label: "SEO Services",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    content: {
      title: "SEO Optimization",
      description: "We provide comprehensive SEO services to improve your website's search engine visibility and rankings. Our SEO approach covers all aspects of search engine optimization to drive organic traffic.",
      additional: "As an additional service, we offer complete SEO optimization including On-Page SEO, Off-Page SEO, Technical SEO, and Local SEO to help your website rank better in search engines and attract more visitors.",
      details: [
        "On-Page SEO: We optimize content, meta tags, headings, and internal linking structure to improve search engine rankings.",
        "Off-Page SEO: We build quality backlinks, manage social signals, and improve your website's authority and reputation.",
        "Technical SEO: We optimize site speed, mobile responsiveness, structured data, XML sitemaps, and ensure proper indexing.",
        "Local SEO: We optimize for local search, including Google Business Profile setup, local citations, and location-based optimization.",
        "Content Optimization: We optimize existing content and create SEO-friendly content that ranks well and engages users.",
        "Keyword Research: We identify relevant keywords and phrases that your target audience searches for.",
        "SEO Analytics: We track and analyze SEO performance, providing reports on rankings, traffic, and conversions."
      ]
    }
  },
  {
    id: "maintenance",
    label: "Launch & Support",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    content: {
      title: "Testing, Launch & Support",
      description: "We thoroughly test your website, launch it, and provide ongoing support. We ensure everything works perfectly before going live and continue to help after launch.",
      additional: "We provide comprehensive testing, deployment, and ongoing support to ensure your website continues to perform well and meet your business needs.",
      details: [
        "We conduct comprehensive testing to ensure all features work correctly, the site is fast, and there are no bugs or issues.",
        "We deploy your website to production, configure hosting, set up domains, and ensure everything is live and accessible.",
        "We provide ongoing technical support to fix any issues, answer questions, and help with updates or changes.",
        "We monitor website performance, uptime, and security to ensure your site continues to run smoothly.",
        "We offer maintenance plans for regular updates, backups, and security monitoring to keep your website secure and up-to-date."
      ]
    }
  }
];

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(processSteps[0]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const triggerPoint = scrollPosition + viewportHeight * 0.3; // 30% from top of viewport

      let activeIndex = 0;
      let bestMatch = { index: 0, distance: Infinity };

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + scrollPosition;
          const elementBottom = elementTop + rect.height;
          const elementCenter = elementTop + rect.height / 2;

          // Check if section is in the trigger zone
          if (elementTop <= triggerPoint && elementBottom >= triggerPoint) {
            const distance = Math.abs(triggerPoint - elementCenter);
            if (distance < bestMatch.distance) {
              bestMatch = { index, distance };
            }
          }

          // Also check if section is above trigger point but closest
          if (elementBottom < triggerPoint) {
            const distance = triggerPoint - elementBottom;
            if (distance < bestMatch.distance) {
              bestMatch = { index, distance };
            }
          }
        }
      });

      // If we found a match, use it; otherwise use the first section
      activeIndex = bestMatch.index;
      setActiveStep(processSteps[activeIndex]);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden flex flex-col justify-center items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-5">
          <h1
            style={{ animation: "heroFadeUp 0.45s 0.05s ease both" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground"
          >
            Our development{" "}
            <span className="text-primary">process</span>
          </h1>

          <p
            style={{ animation: "heroFadeUp 0.45s 0.1s ease both" }}
            className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Our full stack development process from discovery to launch. We build custom websites with frontend, backend, AI agents, and SEO — tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
          {/* Left Content */}
          <div className="max-w-4xl space-y-20">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                id={step.id}
                className="scroll-mt-32"
              >
                <div className="transition-all duration-500">
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    {step.content.title}
                  </h2>

                  <div className="mb-8 rounded-3xl overflow-hidden shadow-lg border border-foreground/5">
                    <img
                      src={step.image}
                      alt={step.content.title}
                      className="w-full h-[300px] md:h-[400px] object-cover"
                    />
                  </div>

                  <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                    <p>{step.content.description}</p>
                    {step.content.additional && <p>{step.content.additional}</p>}
                    {step.content.details && (
                      <div className="mt-8 space-y-4">
                        <h3 className="text-xl font-bold text-foreground mb-4">What This Includes:</h3>
                        <ul className="space-y-3">
                          {step.content.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                              <span className="text-primary font-bold mt-1 shrink-0">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-16 relative">
              <img
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop"
                alt="Discovery process sticky notes"
                className="w-full h-auto rounded-3xl shadow-lg object-cover border border-foreground/5"
              />
            </div>
          </div>

          {/* Right Navigation Sidebar */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-foreground/10">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3 px-2">
                Process Steps
              </h3>
              <nav className="space-y-2 relative">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  const isActive = activeStep.id === step.id;
                  return (
                    <div key={step.id} className="relative">
                      <button
                        onClick={() => scrollToSection(index)}
                        className={`
                          w-full flex items-center gap-2 p-2 rounded-xl transition-all duration-200 text-left relative z-10
                          ${isActive
                            ? "bg-primary text-white font-bold shadow-sm"
                            : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
                          }
                        `}
                      >
                        <div
                          className={`
                          w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 relative
                          ${isActive
                            ? "bg-white text-primary"
                            : "bg-foreground/5 text-foreground/60"
                          }
                        `}
                        >
                          <IconComponent size={18} />
                        </div>
                        <span className="text-sm font-medium">{step.label}</span>
                      </button>
                      {index < processSteps.length - 1 && (
                        <div
                          className={`
                            absolute left-[29px] top-[56px] w-0.5 h-8 z-0
                            ${isActive ? "bg-primary/40" : "bg-foreground/10"}
                          `}
                        />
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 max-w-4xl mx-auto text-center rounded-[2.5rem] bg-foreground text-white p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
          <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-6">
            Ready to work with <span className="text-primary">us</span>?
          </h2>
          <p className="relative z-10 text-white/70 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your website development project and see how we can help bring your vision to life.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="h-14 px-8 rounded-full bg-primary text-white hover:bg-primary/90 text-lg font-bold">
                Get in Touch
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
      </section>
    </div>
  );
}

