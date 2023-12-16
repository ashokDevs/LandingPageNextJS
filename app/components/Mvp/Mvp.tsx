import React from "react";
import "@/app/components/Mvp/Mvp.css";
import Image from "next/image";
const Mvp = () => {
  return (
    <div className="md:pt-96 min-h-screen min-w-full flex flex-col items-center justify-center mx-3 py-10 mb-40 text-base-100 bg-white ">
      <h1 className="text-5xl font-bold">what our tool can do?</h1>
      <p className="py-6 ">
        From generating blogs to updating them , it can do all ,here are some:
      </p>
      <div className="grid grid-flow-row grid-cols-1 place-content-center md:grid-cols-2 lg:grid-cols-3 gap-4 sm ">
        <div className={` item `}>
          <Image width={10} height={10} className=" pb-1" src="/ballpen.png" alt="" />
          <h2 className="text-2xl font-bold pb-1">Cut your Time</h2>
          <p className="invisible ">
            on an average solofounders spend 2 days to write a blog. with the
            help our tool you can write a blog in 30 mins
          </p>
        </div>
        <div className={` item`}>
          <Image width={10} height={10} className=" pb-1" src="/ballpen.png" alt="" />
          <h2 className="text-2xl font-bold pb-1">Cut your Time</h2>
          <p>
            on an average solofounders spend 2 days to write a blog. with the
            help our tool you can write a blog in 30 mins
          </p>
        </div>
        <div className={` item`}>
          <Image width={10} height={10} className=" pb-1" src="/ballpen.png" alt="" />
          <h2 className="text-2xl font-bold pb-1">Cut your Time</h2>
          <p>
            on an average solofounders spend 2 days to write a blog. with the
            help our tool you can write a blog in 30 mins
          </p>
        </div>
        <div className={` item`}>
          <Image width={10} height={10} className=" pb-1" src="/ballpen.png" alt="" />
          <h2 className="text-2xl font-bold pb-1">Cut your Time</h2>
          <p>
            on an average solofounders spend 2 days to write a blog. with the
            help our tool you can write a blog in 30 mins
          </p>
        </div>
        <div className={` item`}>
          <Image width={10} height={10} className=" pb-1" src="/ballpen.png" alt="" />
          <h2 className="text-2xl font-bold pb-1">Cut your Time</h2>
          <p>
            on an average solofounders spend 2 days to write a blog. with the
            help our tool you can write a blog in 30 mins
          </p>
        </div>
        <div className={` item`}>
          <Image width={10} height={10} className=" pb-1" src="/ballpen.png" alt="" />
          <h2 className="text-2xl font-bold pb-1">Cut your Time</h2>
          <p>
            on an average solofounders spend 2 days to write a blog. with the
            help our tool you can write a blog in 30 mins
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mvp;
