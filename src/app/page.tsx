import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Marquee } from "@/components/landing/marquee";
import { About } from "@/components/landing/about";
import { Production } from "@/components/landing/production";
import { Collections } from "@/components/landing/collections";
import { Process } from "@/components/landing/process";
import { Gallery } from "@/components/landing/gallery";
import { Events } from "@/components/landing/events";
import { Cooperation } from "@/components/landing/cooperation";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-surface-page text-ink">
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Production />
        <Collections />
        <Process />
        <Gallery />
        <Events />
        <Cooperation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
