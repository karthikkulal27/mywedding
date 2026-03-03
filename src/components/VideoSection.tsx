import { MotionReveal } from "@/components/MotionReveal";

export default function VideoSection() {
  return (
    <section id="video" className="bg-[#FFF9F2] px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <h2 className="text-center font-[family-name:var(--font-playfair)] text-4xl text-[#6C4E54] sm:text-5xl">
            Wedding Video
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#6C4E54]/80">
            A short cinematic glimpse into our celebration.
          </p>
        </MotionReveal>
        <MotionReveal delay={0.1} className="mx-auto mt-12 max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-[#B76E79]/20 shadow-[0_16px_36px_rgb(108_78_84/10%)]">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/7zT8X3VYq6Y"
                title="Sample wedding video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
