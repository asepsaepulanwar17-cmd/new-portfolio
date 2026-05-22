"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/utils/data-experiences";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceJourney() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(".journey-line-fill", {
        scaleY: 0,
        transformOrigin: "top",
      });

      gsap.set(".journey-entry", {
        opacity: 0,
        y: 70,
        filter: "blur(14px)",
      });

      gsap.set(".journey-dot", {
        scale: 0,
        opacity: 0,
      });

      gsap.to(".journey-line-fill", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".journey-list",
          start: "top 65%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>(".journey-entry").forEach((entry) => {
        const dot = entry.querySelector(".journey-dot");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: entry,
            start: "top 72%",
            end: "bottom 45%",
            scrub: 1,
          },
        });

        tl.to(entry, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "none",
          duration: 0.35,
        });

        tl.to(
          dot,
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            duration: 0.2,
          },
          0
        );

        tl.to(entry, {
          opacity: 0,
          y: -70,
          filter: "blur(14px)",
          ease: "none",
          duration: 0.35,
        });

        tl.to(
          dot,
          {
            scale: 0,
            opacity: 0,
            ease: "none",
            duration: 0.2,
          },
          "<"
        );
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#07090F] px-[70px] py-32 text-white"
    >
      <div className="absolute right-[8%] top-[8%] h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[160px]" />

      <div className="relative z-10 mb-32">
        <h1 className="text-[100px] uppercase leading-[0.78] tracking-[0.35em] text-zinc-500">
          Portfolio
        </h1>

        <h1 className="text-[100px] uppercase leading-[0.78] tracking-[0.35em] text-zinc-500">
          Journey .
        </h1>

        <div className="mt-12 h-[3px] w-[120px] bg-[#178BFF]" />

        <p className="mt-10 max-w-2xl text-[17px] leading-8 text-zinc-400">
          A deeper look into my technical abilities, organizational journey,
          and selected projects that shaped my growth as a developer and
          designer.
        </p>
      </div>

      <div className="journey-list relative z-10 mx-auto max-w-[1180px] pb-36">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10">
          <div className="journey-line-fill h-full w-full bg-gradient-to-b from-[#4DA3FF] via-[#178BFF] to-transparent shadow-[0_0_25px_rgba(23,139,255,0.9)]" />
        </div>

        <div className="space-y-36">
          {experiences.map((item) => (
            <div
              key={item.title}
              className="journey-entry relative grid min-h-[320px] grid-cols-[1fr_80px_1fr] items-center gap-10"
            >
              <div className="relative h-[260px] overflow-hidden border border-white/10 bg-white/[0.03]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="480px"
                  className="object-cover grayscale"
                />
              </div>

              <div className="relative flex h-full items-center justify-center">
                <div className="journey-dot h-6 w-6 rounded-full border border-[#4DA3FF] bg-[#07090F] shadow-[0_0_45px_rgba(23,139,255,1)]" />
              </div>

              <div>
                <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#178BFF]">
                  Experience / {item.year}
                </p>

                <h2 className="mb-4 text-[36px] font-semibold leading-tight">
                  {item.title}
                </h2>

                <p className="mb-5 text-zinc-500">{item.place}</p>

                <p className="max-w-xl text-[16px] leading-8 text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}