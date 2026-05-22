"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/utils/data-projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(".project-heading", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      });

      gsap.set(cardsRef.current, {
        opacity: 1,
        y: 0,
        rotateY: 0,
        filter: "blur(0px)",
      });

      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
        opacity: 0,
        y: 80,
        rotateY: -15,
        filter: "blur(14px)",
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-[70px] py-32 pb-44">
      <h2 className="project-heading mb-16 text-[64px] font-semibold tracking-[-0.05em]">
        Selected <span className="text-[#178BFF]">Projects</span>
      </h2>

      <div className="grid grid-cols-3 gap-6 [perspective:1200px]">
        {projects.map((project, index) => (
          <div
            key={project.title}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="group min-h-[360px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-[#178BFF]/60"
          >
            <p className="mb-6 text-sm text-[#178BFF]">
              0{index + 1} / {project.category}
            </p>

            <h3 className="mb-5 text-[32px] font-semibold leading-tight">
              {project.title}
            </h3>

            <p className="mb-10 text-[15px] leading-8 text-zinc-400">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="border border-white/10 px-3 py-1 text-sm text-zinc-400 group-hover:border-[#178BFF]/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}