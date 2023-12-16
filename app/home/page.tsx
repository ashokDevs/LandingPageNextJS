"use client";


import Progress from "../components/Progress/Progress";
import Comparision from "../components/Comparision";
import { Footer } from "../components/Footer";
import Mvp from "../components/Mvp/Mvp";
import Aboutme from "../components/aboutme";
import { Hero1 } from "../components/Hero/Hero1";
import Test from "@/app/components/icons/Test";
import Join from "../components/Join";

export default function Home() {
  return (
    <main className="w-full h-full overflow-hidden flex flex-col ">
      <div className="flex flex-col ">
        <Hero1 />

        <Mvp />
      </div>
      <Test />

      <Comparision />
      <Progress />
      <Aboutme />
      <Join />
      <Footer />
    </main>
  );
}
