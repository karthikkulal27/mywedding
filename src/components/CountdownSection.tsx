"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MotionReveal } from "@/components/MotionReveal";

type CountdownProps = {
  targetDate: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: number): TimeLeft {
  const difference = Math.max(0, target - Date.now());

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function CountdownSection({ targetDate }: CountdownProps) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(target));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [target]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="bg-[#F8F4EC] px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <h2 className="text-center font-[family-name:var(--font-playfair)] text-4xl text-[#6C4E54] sm:text-5xl">
            Countdown to Our Day
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#6C4E54]/80">
            Every moment brings us closer to the day we say forever.
          </p>
        </MotionReveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {units.map((unit, index) => (
            <motion.article
              key={unit.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-3xl border border-[#B76E79]/20 bg-white/85 p-6 text-center shadow-[0_12px_30px_rgb(108_78_84/10%)] sm:p-8"
            >
              <p className="font-[family-name:var(--font-playfair)] text-4xl text-[#B76E79] sm:text-5xl">
                {String(unit.value).padStart(2, "0")}
              </p>
              <p className="mt-3 text-[11px] tracking-[0.24em] uppercase text-[#6C4E54]/80">
                {unit.label}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
