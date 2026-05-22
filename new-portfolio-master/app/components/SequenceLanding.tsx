"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 240;

const currentFrame = (index: number) =>
  `/sequence/hero/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;

export default function SequenceLanding() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const heroIntroRef = useRef<HTMLDivElement | null>(null);
  const socialRef = useRef<HTMLDivElement | null>(null);
  const aboutTextRef = useRef<HTMLDivElement | null>(null);
  const experienceButtonRef = useRef<HTMLAnchorElement | null>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frame = useRef({ index: 1 });

  const [loaded, setLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    { first: "Web", second: "Designer" },
    { first: "Graphic", second: "Designer" },
    { first: "UI/UX", second: "Designer" },
    { first: "Fullstack", second: "Developer" },
  ];

  const aboutDesc =
    "An Informatics Engineering student focusing on backend development and graphic design, with strong experience in organizational management and creative content production. I am a meticulous, adaptable, and communicative individual, committed to delivering innovative solutions that positively impact teams and projects.";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev === roles.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const renderFrame = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const image = imagesRef.current[Math.floor(frame.current.index) - 1];

    if (!canvas || !context || !image || !image.complete) return;

    const dpr = window.devicePixelRatio || 1;

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    const scale = Math.max(
      window.innerWidth / image.width,
      window.innerHeight / image.height
    );

    const x = window.innerWidth / 2 - (image.width * scale) / 2;
    const y = window.innerHeight / 2 - (image.height * scale) / 2;

    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.drawImage(image, x, y, image.width * scale, image.height * scale);
  };

  useEffect(() => {
    let loadedImages = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new window.Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedImages += 1;

        if (i === 1) {
          renderFrame();
        }

        if (loadedImages === frameCount) {
          imagesRef.current = images;
          setLoaded(true);
          renderFrame();
        }
      };

      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  useLayoutEffect(() => {
    if (
      !loaded ||
      !sectionRef.current ||
      !canvasRef.current ||
      !heroTextRef.current ||
      !heroIntroRef.current ||
      !socialRef.current ||
      !aboutTextRef.current ||
      !experienceButtonRef.current
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(heroTextRef.current, {
        opacity: 0,
        x: -80,
        y: 30,
        filter: "blur(14px)",
      });

      gsap.set(heroIntroRef.current, {
        opacity: 0,
        x: 80,
        y: 30,
        filter: "blur(14px)",
      });

      gsap.set(socialRef.current, {
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
      });

      gsap.set(aboutTextRef.current, {
        opacity: 0,
        x: -90,
        y: 80,
        filter: "blur(18px)",
        pointerEvents: "none",
      });

      gsap.set(".about-char", {
        color: "#71717a",
        opacity: 0.35,
        y: 18,
      });

      gsap.set(experienceButtonRef.current, {
        opacity: 0,
        y: 30,
        pointerEvents: "none",
      });

      const intro = gsap.timeline({
        delay: 0.2,
        defaults: { ease: "power3.out" },
      });

      intro.to(heroTextRef.current, {
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
      });

      intro.to(
        heroIntroRef.current,
        {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
        },
        "-=0.7"
      );

      intro.to(
        socialRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
        },
        "-=0.6"
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            window.dispatchEvent(
              new CustomEvent("cinematic-progress", {
                detail: self.progress,
              })
            );
          },
        },
      });

      tl.to(
        frame.current,
        {
          index: frameCount,
          snap: "index",
          ease: "none",
          onUpdate: renderFrame,
          duration: 1.50,
        },
        0
      );

      tl.to(
        heroTextRef.current,
        {
          opacity: 0,
          x: -180,
          y: -40,
          scale: 0.9,
          filter: "blur(14px)",
          ease: "none",
        },
        0.18
      );

      tl.to(
        heroIntroRef.current,
        {
          opacity: 0,
          x: 180,
          y: -30,
          scale: 0.92,
          filter: "blur(14px)",
          ease: "none",
        },
        0.18
      );

      tl.to(
        socialRef.current,
        {
          opacity: 0,
          y: 60,
          filter: "blur(10px)",
          ease: "none",
        },
        0.18
      );

      tl.to(
        aboutTextRef.current,
        {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          pointerEvents: "auto",
          ease: "none",
        },
        0.42
      );

      tl.to(
        ".about-char",
        {
          opacity: 1,
          y: 0,
          color: "#ffffff",
          stagger: 0.008,
          duration: 0.25,
          ease: "none",
        },
        0.55
      );

      tl.to(
        experienceButtonRef.current,
        {
          opacity: 1,
          y: 0,
          pointerEvents: "auto",
          duration: 0.35,
          ease: "none",
        },
        1.18
      );

      setTimeout(() => ScrollTrigger.refresh(), 300);
      window.addEventListener("resize", renderFrame);
    }, sectionRef);

    return () => {
      window.removeEventListener("resize", renderFrame);
      ctx.revert();
    };
  }, [loaded]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen overflow-hidden bg-[#07090F] text-white"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div className="absolute inset-0 bg-[#07090F]/35" />
      <div className="absolute right-[8%] top-[22%] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute left-[25%] top-[55%] h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[130px]" />

      {!loaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#07090F] text-[#178BFF]">
          
        </div>
      )}

      <div
        ref={heroTextRef}
        className="absolute left-[70px] top-[180px] z-30"
      >
        <h1 className="text-[100px] font-semibold leading-[0.78] tracking-[-0.07em]">
          <div className="relative min-h-[210px] w-[700px] overflow-visible">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentRole}
                className="absolute left-0 top-0"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 25 }}
                transition={{ duration: 0.45 }}
              >
                <div className="relative">
                  {/* KATA ATAS / BACKGROUND */}
                  <div
                    className="
                      relative
                      z-10
                      text-[#178BFF]
                      [text-shadow:0_12px_18px_rgba(23,139,255,0.35)]
                    "
                  >
                    {roles[currentRole].first}
                  </div>

                  {/* KATA BAWAH / CUTTER */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 18,
                      mass: 0.8,
                      delay: 0.1,
                    }}
                    className="
                      relative
                      z-30
                      -mt-[10px]
                      text-white
                      [text-shadow:0_-10px_20px_rgba(7,9,15,0.95)]
                    "
                  >
                    {roles[currentRole].second}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </h1>

        <div className="h-[6px] w-[90px] bg-[#178BFF]" />
      </div>

      <div
        ref={heroIntroRef}
        className="absolute right-[90px] top-[210px] z-30 max-w-[360px]"
      >
        <p className="mb-6 text-[13px] italic text-zinc-400">
          ~ Introduction
        </p>

        <h2 className="mb-7 text-[30px] font-medium leading-[1.3] text-white">
          Informatics Students Who Focus On Web Design And Development
        </h2>

        <p className="text-[15px] leading-loose text-zinc-400">
          I Have A Deep Interest In Web Development And Design, Which
          Motivates Me To Continuously Improve My Skills. Committed To
          Lifelong Learning.
        </p>

        <Link
          href="/experience"
          className="mt-10 inline-block text-[16px] text-[#1F8FFF] hover:underline"
        >
          My Story →
        </Link>
      </div>

      <div
        ref={socialRef}
        className="absolute bottom-[70px] left-[70px] z-30 flex flex-col items-center gap-6"
      >
        <Image src="/images/sosmed/instagram2.png" alt="instagram" width={20} height={20} />
        <Image src="/images/sosmed/linkedin2.png" alt="linkedin" width={20} height={20} />
        <Image src="/images/sosmed/github2.png" alt="github" width={20} height={20} />
      </div>

      <div
        ref={aboutTextRef}
        className="absolute left-[70px] bottom-[60px] z-30 max-w-[680px]"
      >
        <p className="text-[75px] font-light uppercase tracking-[0.3em] text-white">
          Hello
        </p>

        <h2 className="mb-8 text-[40px] font-normal uppercase leading-tight text-[#1F8FFF]">
          I’m Rois Azzam Shiddiq
        </h2>

        <p className="mb-10 max-w-xl text-[15px] leading-8 text-zinc-500">
          {aboutDesc.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="mr-[4px] inline-block whitespace-nowrap"
            >
              {word.split("").map((char, charIndex) => (
                <span
                  key={`${wordIndex}-${charIndex}`}
                  className="about-char inline-block"
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </p>

        <Link
          ref={experienceButtonRef}
          href="/experience"
          className="group inline-flex items-center gap-3 border border-[#178BFF]/40 bg-[#178BFF]/10 px-7 py-4 text-[15px] font-medium text-white transition-all duration-300 hover:border-[#178BFF] hover:bg-[#178BFF]/20"
        >
          View Experience
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}