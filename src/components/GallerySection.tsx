"use client";

import Image from "next/image";
import { type TouchEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MotionReveal } from "@/components/MotionReveal";

const images = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1529634897266-5cda5a27b7d4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504198458649-3128b932f49b?auto=format&fit=crop&w=1200&q=80",
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const totalImages = images.length;

  const getWrappedIndex = (index: number) => {
    return (index + totalImages) % totalImages;
  };

  const getOffset = (index: number) => {
    let offset = index - activeIndex;
    const half = totalImages / 2;

    if (offset > half) offset -= totalImages;
    if (offset < -half) offset += totalImages;

    return offset;
  };

  const visibleSlides = images
    .map((image, index) => ({ image, index, offset: getOffset(index) }))
    .filter((slide) => Math.abs(slide.offset) <= 2)
    .sort((first, second) => Math.abs(second.offset) - Math.abs(first.offset));

  const goToPrevious = () => {
    setActiveIndex((current) => getWrappedIndex(current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => getWrappedIndex(current + 1));
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0]?.clientX;
    if (typeof touchEndX !== "number") return;

    const swipeDistance = touchEndX - touchStartX.current;
    const swipeThreshold = 42;

    if (swipeDistance > swipeThreshold) goToPrevious();
    if (swipeDistance < -swipeThreshold) goToNext();

    touchStartX.current = null;
  };

  return (
    <section id="gallery" className="bg-[#F8F4EC] px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <h2 className="text-center font-[family-name:var(--font-playfair)] text-4xl text-[#6C4E54] sm:text-5xl">
            Photo Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#6C4E54]/80">
            Glimpses of a love story that feels timeless and cinematic.
          </p>
        </MotionReveal>

        <div className="relative mt-14">
          <div
            className="relative h-[23rem] overflow-hidden [perspective:1400px] sm:h-[28rem]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {visibleSlides.map((slide) => {
              const distance = Math.abs(slide.offset);
              const isCenter = slide.offset === 0;

              const translateX = slide.offset * 230;
              const scale = isCenter ? 1.12 : distance === 1 ? 0.72 : 0.5;
              const rotateY = isCenter ? 0 : slide.offset > 0 ? -30 : 30;
              const opacity = isCenter ? 1 : distance === 1 ? 0.76 : 0.45;

              return (
                <motion.button
                  key={slide.image}
                  type="button"
                  onClick={() => setActiveIndex(slide.index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  animate={{
                    x: translateX,
                    scale,
                    rotateY,
                    opacity,
                    zIndex: 20 - distance,
                  }}
                  className="group absolute left-1/2 top-1/2 h-[17rem] w-[15.5rem] -translate-x-1/2 -translate-y-1/2 transform-gpu overflow-hidden rounded-3xl border border-[#B76E79]/20 shadow-[0_16px_36px_rgb(108_78_84/16%)] sm:h-[22rem] sm:w-[21rem]"
                  style={{ transformStyle: "preserve-3d" }}
                  aria-label={`Show photo ${slide.index + 1}`}
                >
                  <Image
                    src={slide.image}
                    alt={`Couple gallery photo ${slide.index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 80vw, 40vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/36 to-transparent transition-opacity duration-500"
                    style={{ opacity: isCenter ? 0.18 : 0.38 }}
                  />
                </motion.button>
              );
            })}
          </div>

          <div className="mt-8 hidden items-center justify-center gap-4 md:flex">
            <button
              type="button"
              onClick={goToPrevious}
              className="rounded-full border border-[#B76E79]/35 px-5 py-2 text-sm font-medium text-[#6C4E54] transition hover:bg-[#B76E79]/12"
              aria-label="Show previous photo"
            >
              Prev
            </button>

            <div className="flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to photo ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-7 bg-[#B76E79]" : "w-2.5 bg-[#B76E79]/35 hover:bg-[#B76E79]/55"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNext}
              className="rounded-full border border-[#B76E79]/35 px-5 py-2 text-sm font-medium text-[#6C4E54] transition hover:bg-[#B76E79]/12"
              aria-label="Show next photo"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
