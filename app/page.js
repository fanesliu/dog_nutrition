import Image from "next/image";
import HeroSection from "./component/HeroSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFFFF] container mx-auto">
      <HeroSection/>
    </main>
  );
}
