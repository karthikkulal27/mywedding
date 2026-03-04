import CountdownSection from "@/components/CountdownSection";
import EventsTimeline from "@/components/EventsTimeline";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OurStorySection from "@/components/OurStorySection";
import VenueSection from "@/components/VenueSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#F8F4EC] text-[#6C4E54]">
      <Navbar />
      <HeroSection />
      <CountdownSection targetDate="2026-04-29T00:00:00+05:30" />
      <OurStorySection />
      <GallerySection />
      <VideoSection />
      <EventsTimeline />
      <VenueSection />

      <footer className="bg-[#FFF9F2] px-4 py-14 text-center sm:px-6">
        <p className="font-[family-name:var(--font-playfair)] text-3xl text-[#B76E79]">
          Karthik &amp; Subhiksha
        </p>
      </footer>
    </main>
  );
}
