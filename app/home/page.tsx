"use client";


import Progress from "../components/Progress/Progress";
import Comparision from "../components/Comparision";
import { Footer } from "../components/Footer";
import Mvp from "../components/Mvp/Mvp";
import Aboutme from "../components/aboutme";
import { Hero1 } from "../components/Hero/Hero1";
import Test from "@/app/components/icons/Test";
import Join from "../components/Join";

import FAQ from "../components/FAQ";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <main className="w-full h-full overflow-hidden flex flex-col items-center justify-center">
   {/*  <Header/> */}
      <div className="flex flex-col ">
        <Hero1 />

        <Mvp />
      </div>
      <Test />

      <Comparision />
      <Pricing/>
      <Progress />
      <FAQ/>
      
      <Join  />
      <Footer />
    </main>
  );
}
