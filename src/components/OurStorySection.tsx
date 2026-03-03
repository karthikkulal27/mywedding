import Image from "next/image";
import { MotionReveal } from "@/components/MotionReveal";

const storyImage =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80";

export default function OurStorySection() {
  return (
    <section id="story" className="bg-[#FFF9F2] px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center lg:gap-16">
        <MotionReveal className="relative h-96 overflow-hidden rounded-3xl md:h-[540px]">
          <Image
            src={storyImage}
            alt="Couple together"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </MotionReveal>
        <MotionReveal delay={0.12}>
          <article>
            <p className="text-xs tracking-[0.28em] uppercase text-[#B76E79]/80">
              A Journey of Love
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl leading-tight text-[#6C4E54] sm:text-5xl">
            Our Story
            </h2>
            <p className="mt-7 text-lg leading-9 text-[#6C4E54]/90">
              Two hearts, one journey. Karthik and Subhiksha found friendship,
              laughter, and love in life&apos;s little moments. Surrounded by family,
              blessings, and timeless traditions, they now begin a graceful
              forever together.
            </p>
          </article>
        </MotionReveal>
      </div>
    </section>
  );
}
