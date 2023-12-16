"use client";


import Progress from "../components/Progress/Progress";
import Comparision from "../components/Comparision";
import Testimonial from "../components/Testimonial";
import ValuePropsComponent from "../components/Valueprops";
import Mvp from "../components/Mvp/Mvp";
import Aboutme from "../components/aboutme";
import { Hero1 } from "../components/Hero/Hero1";
import Test from "@/app/components/icons/Test"
import Header from "../components/Header";
export default function Home() {
  return (
    <main className="w-full overflow-hidden flex flex-col " >
      <Header />
      <Hero1/>
      <Testimonial />
      <Mvp/>
      <Test/>
      {/* <ValuePropsComponent /> */}
      <Comparision />
      <Progress />
      <Aboutme/>
    </main>
  );
}
