import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fff5f1] container mx-auto px-14 py-4">
      <HeroSection />
    </main>
  );
}
