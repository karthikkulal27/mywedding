import { MotionReveal } from "@/components/MotionReveal";

export default function VenueSection() {
  return (
    <section id="venue" className="bg-[#FFF9F2] px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <h2 className="text-center font-[family-name:var(--font-playfair)] text-4xl text-[#6C4E54] sm:text-5xl">
            Venue
          </h2>

          <p className="mt-5 text-center text-xl text-[#6C4E54] sm:text-2xl">
            Yashashvi Hall, Arkula
          </p>
        </MotionReveal>

        <MotionReveal delay={0.1} className="mx-auto mt-12 max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-[#B76E79]/20 shadow-[0_16px_36px_rgb(108_78_84/10%)]">
            <iframe
              title="Yashashvi Hall Arkula Map"
              src="https://maps.google.com/maps?q=Yashashvi%20Hall%20Arkula&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
