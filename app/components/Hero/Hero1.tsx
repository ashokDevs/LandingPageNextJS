"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import Join from "../Join";
import Navbar from "../Navbar";

export const Hero1 = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust this value based on when you want the color change to happen
      const scrollThreshold = 10;

      if (scrollPosition > scrollThreshold && !scrolling) {
        setScrolling(true);
      } else if (scrollPosition <= scrollThreshold && scrolling) {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  
  return (
    <div className="bg-base-100   flex text-center flex-col items-center justify-between  px-4  h-screen max-w-screen md:px-0">
      <Navbar/>
      <div className="mt-20 flex flex-col items-center max-w-2xl md:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h1 className="max-w-lg text-5xl mb-6 text-base-content font-sans md:text-7xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
            Traffic with our blog tool
          </h1>
          <p className="text-base-content md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        {/*         <form className="flex flex-col items-center w-full mb-4 gap-4 md:flex-row">
          <input
            placeholder="Name"
            required
            type="text"
            className="flex-grow  input input-bordered input-primary w-full max-w-xs"
          />
          <input
            placeholder="Email"
            required
            type="text"
            className="flex-grow input input-bordered input-primary w-full max-w-xs"
          />
        </form> */}

        <button className="btn color-primary-content btn-wide btn-primary text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-graph"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M7 14l3 -3l2 2l3 -3l2 2" />
          </svg>
          Pre-Order<span className="line-through text-sm">$39</span> $29
        </button>
        <br />
        <ScrollLink to="Join" smooth={true} duration={1000}>
          <button className="btn btn-wide btn-outline btn-secondary mt-2 text-xl">
            Join Waitlist
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-right-tail"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 15l3 -3l-3 -3" />
              <path d="M3 15l3 -3l-3 -3" />
              <path d="M6 12l15 0" />
            </svg>
          </button>
        </ScrollLink>

        <br />
      </div>
      
      <Image
        layout="responsive"
        width={1000}
        height={625}
        src="/testimonial.png"
        className={`z-[1] w-full realtive bottom-6 max-w-screen-sm mx-auto rounded shadow-2xl md:w-1/2 lg:max-w-screen-md`}
        alt=""
      />
    </div>
  );
};
