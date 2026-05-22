"use client";

import { testimonials } from "@/utils/data-testimonials";
import { motion } from "framer-motion";
import {
  slideLeft,
  slideRight,
  staggerContainer,
} from "../lib/animation";

export default function Testimonials() {
  const firstRow = [...testimonials, ...testimonials];
  const secondRow = [...testimonials].reverse();

  return (
    <motion.section
      id="work"
      className="overflow-hidden px-16 py-28"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.35,
      }}
    >
      {/* TITLE */}
      <div className="ml-75 flex items-end justify-between">
        <motion.h2
          variants={slideRight}
          className="text-6xl font-light"
        >
          What People Say
        </motion.h2>
      </div>

      <div className="mb-8 mr-70 flex items-end justify-end">
        <motion.h3
          variants={slideLeft}
          className="text-[90px] text-[#178BFF]"
        >
          About Me
        </motion.h3>
      </div>

      {/* ROW 1 */}
      <motion.div variants={slideRight} className="relative mb-5 overflow-hidden">
        <div className="testimonial-row flex gap-5">
          {firstRow.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="
                group
                flex
                h-[230px]
                w-[390px]
                shrink-0
                flex-col
                justify-between
                border
                border-white/10
                bg-[#1A1A1A]/60
                p-6
                backdrop-blur-sm
              "
            >
              <p className="line-clamp-4 text-[14px] leading-[1.9] text-zinc-300">
                “{item.message}”
              </p>

              <div>
                <h3 className="text-[17px] font-semibold text-white">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-[#178BFF]">
                  {item.role}
                </p>

                <span className="text-sm text-zinc-500">
                  {item.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ROW 2 */}
      <motion.div variants={slideLeft} className="relative overflow-hidden">
        <div className="testimonial-row-reverse flex gap-5">
          {secondRow.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="
                group
                flex
                h-[230px]
                w-[390px]
                shrink-0
                flex-col
                justify-between
                border
                border-white/10
                bg-[#1A1A1A]/60
                p-6
                backdrop-blur-sm
              "
            >
              <p className="line-clamp-4 text-[14px] leading-[1.9] text-zinc-300">
                “{item.message}”
              </p>

              <div>
                <h3 className="text-[17px] font-semibold text-white">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-[#178BFF]">
                  {item.role}
                </p>

                <span className="text-sm text-zinc-500">
                  {item.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}