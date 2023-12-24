"use client";

import { useEffect, useState } from "react";

import "@/app/components/Hero/Hero.css";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
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

  const navClasses = `fixed inset-x-0 top-0 flex flex-row justify-between z-20 text-white transition duration-500 ${
    scrolling ? "bg-base-100 shadow-sm shadow-base-300" : "bg-transparent"
  }`;
  return (
    <div className="bg-base-100 herobg bg-cover flex text-center flex-col items-center justify-between pt-32 px-4  h-screen w-screen lg:pt-20 md:px-0">
      <nav id="nav" className={navClasses}>
        <div className="p-4">
          <div className="font-extrabold tracking-widest text-xl">
            <a
              href="#"
              className="transition duration-500 hover:text-indigo-500"
            >
              Your Logo
            </a>
          </div>
        </div>

        {/* <!-- Nav Items Working on Tablet & Bigger Sceen --> */}
        <div className="p-4 hidden md:flex flex-row justify-between font-bold">
          <a
            id="hide-after-click"
            href="#home"
            className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
          >
            Home
          </a>
          <a
            href="#about"
            className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
          >
            About
          </a>
          <a
            href="#contactus"
            className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
          >
            Contact Us
          </a>
          <a
            href="#products"
            className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
          >
            Products
          </a>
        </div>

        {/*  <!-- Burger Nav Button on Mobile --> */}
        <div id="nav-open" className="p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </nav>

      {/*  <!-- Opened Nav in Mobile, you can use javascript/jQuery --> */}
      <div
        id="nav-opened"
        className="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10"
      >
        <div className="p-2 divide-y divide-gray-600 flex flex-col">
          <a href="#home" className="p-2 font-semibold hover:text-indigo-700">
            Home
          </a>
          <a href="#about" className="p-2 font-semibold hover:text-indigo-700">
            About
          </a>
          <a
            href="#contactus"
            className="p-2 font-semibold hover:text-indigo-700"
          >
            Contact Us
          </a>
          <a
            href="#products"
            className="p-2 font-semibold hover:text-indigo-700"
          >
            Products
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center max-w-2xl md:px-8">
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
        <ScrollLink
          activeClass="active"
          to="Join" // Provide the ID of the target section
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset based on your layout
          duration={1000}
        >
          <button className="btn color-primary-content btn-wide btn-primary text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-graph"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M7 14l3 -3l2 2l3 -3l2 2" />
            </svg>
            Pre-Order<span className="line-through text-sm">$39</span> $29
          </button>
          <br />
          <button className="btn btn-wide btn-outline btn-secondary mt-2 text-xl">
            join waitilist
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-right-tail"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
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
      <br />
      <br />
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
