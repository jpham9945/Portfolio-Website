import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-blue-700 via-purple-500 to-pink-200 ">
      <Navbar />
      <div class="container mx-auto px-14 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
