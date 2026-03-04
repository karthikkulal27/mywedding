import { MotionReveal } from "@/components/MotionReveal";

export default function VenueSection() {
  return (
    <section id="venue" className="bg-[#FFF9F2] px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <h2 className="text-center font-[family-name:var(--font-playfair)] text-4xl text-[#6C4E54] sm:text-5xl">
            Venues
          </h2>

          <div className="mt-8 space-y-6">
            <div className="text-center">
              <p className="text-lg font-[family-name:var(--font-playfair)] text-[#B76E79]">
                Muhurtham
              </p>
              <p className="mt-2 text-xl text-[#6C4E54]">
                Arkula
              </p>
            </div>
            <MotionReveal delay={0.1} className="mx-auto mt-12 max-w-5xl">
          <div className="space-y-8 sm:space-y-10">
            <div className="overflow-hidden rounded-3xl border border-[#B76E79]/20 shadow-[0_16px_36px_rgb(108_78_84/10%)]">
              <iframe
                title="Wedding Venue - Arkula Map"
                src="https://maps.google.com/maps?q=Arkula&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </MotionReveal>
            <div className="text-center">
              <p className="text-lg font-[family-name:var(--font-playfair)] text-[#B76E79]">
                Reception
              </p>
              <p className="mt-2 text-xl text-[#6C4E54]">
                Cordel Church Hall Kulshekar
              </p>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.1} className="mx-auto mt-12 max-w-5xl">
          <div className="space-y-8 sm:space-y-10">
            <div className="overflow-hidden rounded-3xl border border-[#B76E79]/20 shadow-[0_16px_36px_rgb(108_78_84/10%)]">
              <iframe
                title="Reception Venue - Cordel Church Hall Kulshekar Map"
                src="https://maps.google.com/maps?q=Cordel%20Church%20Hall%20Kulshekar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
