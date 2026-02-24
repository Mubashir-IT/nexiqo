"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects-data";

const activeProjects = projects.filter((p) => p.url);
// Duplicate for seamless infinite loop
const loopedProjects = [...activeProjects, ...activeProjects, ...activeProjects];

function LogoImage({ src, alt }: { src: string; alt: string }) {
    const [loaded, setLoaded] = useState(true);
    return (
        <div className={`relative w-10 h-10 shrink-0 ${!loaded ? "hidden" : ""}`}>
            <img
                src={src}
                alt={`${alt} logo`}
                className="w-full h-full object-contain"
                onError={() => setLoaded(false)}
            />
        </div>
    );
}

export function ProjectsCarousel() {
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let pos = 0;
        let animFrame: number;
        const speed = 2; // px per frame

        const animate = () => {
            pos += speed;
            // Reset when we've scrolled through one full set (we have 3 copies)
            const resetAt = track.scrollWidth / 3;

            if (pos >= resetAt) pos = 0;

            track.style.transform = `translateX(-${pos}px)`;
            animFrame = requestAnimationFrame(animate);
        };

        animFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animFrame);
    }, []);

    return (
        <section className="py-10 px-6 max-w-full mx-auto border-t border-gray-200">
            <div className="mb-10">
                <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                    Our Recent Projects
                </h2>
            </div>

            {/* Marquee - logos + names */}
            <div className="overflow-hidden">
                <div ref={trackRef} className="flex gap-0 items-center" style={{ width: "max-content" }}>
                    {loopedProjects.map((project, i) => (
                        <a
                            key={i}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 flex items-center gap-2 px-4 py-4 rounded-2xl hover:shadow-md transition-all duration-300 group cursor-pointer"
                        >
                            {project.logo && (
                                <LogoImage src={project.logo} alt={project.name} />
                            )}
                            <span className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary">
                                {project.name}
                            </span>
                            <ArrowUpRight size={20} className="text-foreground/60 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
