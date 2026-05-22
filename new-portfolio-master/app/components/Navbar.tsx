"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavMode = "hero" | "middle" | "contact";

export default function Navbar() {
  const [mode, setMode] = useState<NavMode>("hero");

  useEffect(() => {
    const handleProgress = () => {
      const contact = document.getElementById("contact");
      const contactRect = contact?.getBoundingClientRect();

      if (contactRect && contactRect.top < window.innerHeight * 0.45) {
        setMode("contact");
        return;
      }

      setMode("hero");
    };

    const handleScroll = () => {
      const home = document.getElementById("home");
      const work = document.getElementById("work");
      const contact = document.getElementById("contact");

      if (!home || !work || !contact) return;

      const homeRect = home.getBoundingClientRect();
      const workRect = work.getBoundingClientRect();
      const contactRect = contact.getBoundingClientRect();

      if (contactRect.top < window.innerHeight * 0.45) {
        setMode("contact");
        return;
      }

      if (workRect.top < window.innerHeight * 0.45) {
        setMode("middle");
        return;
      }

      if (homeRect.bottom > window.innerHeight * 0.2) {
        setMode("hero");
        return;
      }

      setMode("middle");
    };

    window.addEventListener("cinematic-progress", handleProgress);
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("cinematic-progress", handleProgress);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = ["HOME", "ABOUT", "REVIEWS", "CONTACT"];

  return (
    <>
      {/* LOGO HERO ONLY */}
      <div
        className={`
          fixed
          left-[70px]
          top-[45px]
          z-[999]
          transition-all
          duration-700
          ease-[cubic-bezier(.22,1,.36,1)]
          ${
            mode === "hero"
              ? "translate-y-0 opacity-100"
              : "-translate-y-8 opacity-0 pointer-events-none"
          }
        `}
      >
        <Link href="#home">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={75}
            height={75}
            priority
          />
        </Link>
      </div>

      {/* NAV */}
      <nav
        className={`
          fixed
          z-[999]
          flex
          transition-all
          duration-700
          ease-[cubic-bezier(.22,1,.36,1)]

          ${
            mode === "hero"
              ? "right-[70px] top-[55px] flex-row items-center gap-[42px]"
              : mode === "middle"
              ? "left-1/2 top-[55px] -translate-x-1/2 flex-row items-center gap-[42px]"
              : "left-[70px] top-[95px] flex-col items-start gap-7"
          }
        `}
      >
        {navItems.map((item) => (
          <Link
            key={item}
            href={
              item === "HOME"
                ? "#home"
                : item === "CONTACT"
                ? "#contact"
                : item === "WORK"
                ? "#work"
                : "#home"
            }
            className="
              text-[26px]
              font-light
              tracking-[-0.02em]
              text-white
              transition
              duration-300
              hover:text-[#178BFF]
            "
          >
            {item}
          </Link>
        ))}
      </nav>
    </>
  );
}