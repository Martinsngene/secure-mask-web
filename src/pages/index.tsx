/** @format */

import HandWithCard from "@/components/home/HandWithCard";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className={`container mx-auto w-full h-[100vh] md:pl-[4rem] flex`}>
      <Navbar />
      <div className='w-full md:w-[55%] h-full flex items-center justify-center'>
        <Hero />
      </div>
      <div className='hidden md:block w-[45%] h-[100vh]'>
        <HandWithCard />
      </div>
    </main>
  );
}
