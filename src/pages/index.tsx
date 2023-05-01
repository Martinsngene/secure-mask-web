/** @format */
import { Inter } from "next/font/google";

import HandWithCard from "@/components/home/HandWithCard";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`w-full h-[100vh] pl-[4rem] flex ${inter.className}`}>
      <Navbar />
      <div className='w-[55%] h-full flex items-center justify-center'>
        <Hero />
      </div>
      <div className='w-[45%] h-[100vh]'>
        <HandWithCard />
      </div>
    </main>
  );
}
