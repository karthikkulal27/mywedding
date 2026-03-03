import { MotionReveal } from "@/components/MotionReveal";

const events = [
  { title: "Engagement", detail: "A beautiful beginning of forever." },
  { title: "Muhurtham", detail: "Sacred vows on 29 April 2026." },
  { title: "Reception", detail: "An evening of joy and celebration." },
];

export default function EventsTimeline() {
  return (
    <section id="events" className="bg-[#F8F4EC] px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <MotionReveal>
          <h2 className="text-center font-[family-name:var(--font-playfair)] text-4xl text-[#6C4E54] sm:text-5xl">
            Events Timeline
          </h2>
        </MotionReveal>

        <div className="relative mt-14 pl-8 sm:pl-10">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-[#B76E79]/40" />
          <div className="space-y-8 sm:space-y-10">
            {events.map((event, index) => (
              <MotionReveal key={event.title} delay={index * 0.08}>
                <article className="relative rounded-3xl border border-[#B76E79]/18 bg-white/80 p-6 shadow-[0_14px_34px_rgb(108_78_84/8%)] sm:p-7">
                  <span className="absolute -left-[31px] top-7 h-4 w-4 rounded-full border-2 border-[#B76E79] bg-[#F8F4EC]" />
                  <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-[#B76E79]">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-[#6C4E54]">{event.detail}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
