"use client";

import Hero from "../components/Hero";
import Progress from "../components/Progress/Progress";
import Comparision from "../components/Comparision";
import Testimonial from "../components/Testimonial";
import ValuePropsComponent from "../components/Valueprops";

export default function Home() {
  return (
    <main>
      <Hero />
      <Testimonial />
      <ValuePropsComponent />
      <Comparision />
      <Progress />
    </main>
  );
}
