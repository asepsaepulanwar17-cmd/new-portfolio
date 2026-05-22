"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
   slideLeft,
   slideRight,
   imageReveal,
   staggerContainer,
   fadeUp,
} from "../lib/animation";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="
        relative
        min-h-screen
        overflow-hidden
      "
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.35,
      }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.png"
          alt="background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-17.5 py-17.5">
        <div className="grid w-full max-w-362.5 grid-cols-[240px_760px] items-center gap-90">

          {/* LEFT SIDE */}
          <motion.div variants={slideRight} className="flex flex-col justify-between h-155">
            <p className="mt-110 max-w-72.5 text-[17px] leading-[1.8] text-zinc-300">
              “Setiap Baris Kode, Setiap Desain, Dan Setiap
              Solusi Yang Dibuat Adalah Bentuk Komitmen
              Untuk Menjadi Lebih Baik Dari Hari Kemarin.”
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="max-w-190">
            {/* TITLE */}
            <motion.div variants={fadeUp} className="mb-10 border-b border-white/30 pb-6">
              <h2 className="text-[60px] font-light leading-none text-white">
                Contact{" "}
                <span className="text-[#178BFF]">Us</span>
                <span className="text-zinc-400"> -</span>
              </h2>
            </motion.div>

            {/* FORM */}
            <motion.div variants={imageReveal} className="rounded-sm bg-black/45 px-8 py-6 backdrop-blur-sm  max-h-130">
              <h3 className="mb-5 text-[28px] font-medium text-white">
                Send Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Name
                  </label>

                  <input
                    type="text"
                    className="
                      h-12.5
                      w-full
                      border
                      border-white/10
                      bg-[#3A3A3A]
                      px-3
                      outline-none
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Number
                  </label>

                  <input
                    type="text"
                    className="
                      h-12.5
                      w-full
                      border
                      border-white/10
                      bg-[#3A3A3A]
                      px-3
                      outline-none
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Message
                  </label>

                  <textarea
                    className="
                      h-27.5
                      w-full
                      resize-none
                      border
                      border-white/10
                      bg-[#3A3A3A]
                      p-3
                      outline-none
                    "
                  />
                </div>

                <button
                  className="
                    h-10.5
                    w-full
                    bg-[#2E2E2E]
                    text-white
                    transition
                    hover:bg-[#178BFF]
                  "
                >
                  Send Message
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}