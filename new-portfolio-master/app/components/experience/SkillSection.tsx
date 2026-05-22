"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/utils/data-skills";

gsap.registerPlugin(ScrollTrigger);

export default function SkillSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(".skill-title", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      });

      gsap.set(cardsRef.current, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
      });

      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
        },
        opacity: 0,
        y: 45,
        rotateX: -15,
        filter: "blur(10px)",
        stagger: 0.06,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-[70px] py-32">
      <h2 className="skill-title mb-14 text-[64px] font-semibold tracking-[-0.05em]">
        My <span className="text-[#178BFF]">Skills</span>
      </h2>

      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <div
            key={skill}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="border border-white/10 bg-white/[0.03] px-7 py-6 text-[18px] text-zinc-300 backdrop-blur-sm transition hover:border-[#178BFF]/60 hover:text-white"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}