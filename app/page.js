import Image from "next/image";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col bg-[#FFFFFF] container mx-auto">
      {/* <Navbar/> */}
      <HeroSection/>
      <Footer/>
    </main>
  );
}
