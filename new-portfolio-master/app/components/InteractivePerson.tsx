"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

type InteractivePersonProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
};

export default function InteractivePerson({
  src,
  alt,
  width = 900,
  height = 1200,
  className = "",
  imageClassName = "",
}: InteractivePersonProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 18,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 18,
    mass: 0.4,
  });

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);

  const imageX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  const glowX = useTransform(smoothX, [-0.5, 0.5], ["35%", "65%"]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], ["35%", "65%"]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
      }}
      className={`relative select-none ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 18,
        }}
        className="relative"
      >
        {/* glow belakang */}
        <motion.div
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(23,139,255,0.35), transparent 55%)`,
            transform: "translateZ(-80px)",
          }}
          className="absolute inset-0 -z-10 blur-3xl"
        />

        {/* shadow/depth */}
        <div
          className="
            absolute
            bottom-[3%]
            left-1/2
            -z-10
            h-[22%]
            w-[75%]
            -translate-x-1/2
            rounded-full
            bg-black/60
            blur-3xl
          "
        />

        {/* object utama */}
        <motion.div
          style={{
            x: imageX,
            y: imageY,
            transform: "translateZ(80px)",
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority
            draggable={false}
            className={`h-auto object-contain ${imageClassName}`}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}