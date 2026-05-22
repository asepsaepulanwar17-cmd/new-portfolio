export default function Marquee() {
  return (
    <section className="border-y border-white/10 py-7 overflow-hidden bg-[#0B0E16]">
      <div className="flex whitespace-nowrap animate-[marquee_10s_linear_infinite] gap-12 text-2xl font-medium tracking-[0.2em] uppercase text-zinc-300">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i}>Web Design • Graphic Design • UI/UX Designer • Fullstack Developer</span>
        ))}
      </div>
    </section>
  )
}