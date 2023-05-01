/** @format */
import { Inter } from "next/font/google";

import HandWithCard from "@/components/home/HandWithCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`w-full h-[100vh] flex ${inter.className}`}>
      <div className='w-[55%] h-full'></div>
      <div className='w-[45%] h-[100vh]'>
        <HandWithCard />
      </div>
    </main>
  );
}
