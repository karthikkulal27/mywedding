import Image from "next/image";
import { MotionFade, MotionReveal } from "@/components/MotionReveal";

const heroImage =
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1800&q=80";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src={heroImage}
        alt="Romantic couple"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgb(183_110_121/22%)_0%,transparent_58%)]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-10 pt-24 text-center text-[#F8F4EC] sm:pt-32">
        <MotionFade>
          <p className="mb-6 text-xs tracking-[0.44em] uppercase sm:text-sm">
            Wedding Invitation
          </p>
        </MotionFade>
        <MotionReveal delay={0.1}>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl leading-[1.1] sm:text-7xl md:text-8xl">
            Karthik <span className="mx-1 text-4xl sm:text-6xl">❤️</span> Subhiksha
          </h1>
        </MotionReveal>
        <MotionReveal delay={0.2}>
          <p className="mt-8 text-lg tracking-[0.08em] sm:text-2xl">29 April 2026</p>
        </MotionReveal>
        <MotionReveal delay={0.28}>
          <p className="mx-auto mt-10 max-w-2xl text-sm text-[#F8F4EC]/85 sm:text-base">
            A celebration of love, grace, and a beautiful beginning.
          </p>
        </MotionReveal>
        <MotionReveal delay={0.36}>
          <a
            href="#countdown"
            className="mt-12 inline-flex rounded-full border border-white/45 px-7 py-3 text-xs tracking-[0.2em] uppercase text-white transition hover:bg-white/10"
          >
            Discover More
          </a>
        </MotionReveal>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F8F4EC] to-transparent" />
    </section>
  );
}
