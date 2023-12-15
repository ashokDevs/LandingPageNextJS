"use client";

import Hero from "../components/Hero";
import Progress from "../components/Progress/Progress";
import Comparision from "../components/Comparision";
import Testimonial from "../components/Testimonial";
import ValuePropsComponent from "../components/Valueprops";
import Mvp from "../components/Mvp/Mvp";
import Aboutme from "../components/aboutme";
import { Hero1 } from "../components/Hero1";


export default function Home() {
  return (
    <main>
      <Hero1/>
      {/* <Hero /> */}
      <Testimonial />
      <Mvp/>
      {/* <ValuePropsComponent /> */}
      <Comparision />
      <Progress />
      <Aboutme/>
    </main>
  );
}
