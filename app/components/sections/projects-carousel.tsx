"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects-data";

const activeProjects = projects.filter((p) => p.url);
// Duplicate for seamless infinite loop
const loopedProjects = [...activeProjects, ...activeProjects, ...activeProjects];

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
            // Each card is 50% of the container width + gap (24px)
            const cardWidth = track.parentElement!.offsetWidth / 2 + 12;
            const resetAt = cardWidth * activeProjects.length;

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

            {/* Marquee Carousel */}
            <div className="overflow-hidden">
                <div ref={trackRef} className="flex gap-6" style={{ width: "max-content" }}>
                    {loopedProjects.map((project, i) => (
                        <div
                            key={i}
                            onClick={() => project.url && window.open(project.url, "_blank")}
                            className="relative flex-shrink-0 overflow-hidden rounded-3xl cursor-pointer group shadow-md hover:shadow-xl transition-shadow duration-300"
                            style={{ width: "calc(50vw - 3.5rem)", maxWidth: "640px", aspectRatio: "16/9" }}
                        >
                            <img
                                src={project.img}
                                alt={project.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                <ArrowUpRight size={18} className="text-foreground" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
