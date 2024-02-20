import React from "react";
import TickSvg from "./icons/TickSvg";

const Pricing = () => {
  return (
    <div className="text-center flex flex-col gap-10  bg-base-100 h-screen w-screen ">
      <div>
        <h1 className="text-4xl font-bold text-base-content mb-4">
          Pricing
        </h1>
      </div>

      <div className="indicator border bg-base-300 p-8 rounded-md shadow-md max-w-md mx-auto">
        <span className="indicator-item indicator-center badge badge-primary">
          Popular
        </span>
        <div className="grid w-80 md:min-w-96 h-96  place-items-center">
          <div className=" ">
            <h2 className="text-2xl font-bold text-accent mb-8">
              Solo-Founder Plan
            </h2>

            <ul className="list-none p-0 m-0">
              <li className="flex items-center gap-3">
                <TickSvg />
                <p>25 articles</p>
              </li>
              <br />
              <li className="flex items-center gap-3">
                <TickSvg />
                <p>Wordpress Integration</p>
              </li>
              <br />
              <li className="flex items-center gap-3">
                <TickSvg />
                <p>Publish blogs automatically</p>
              </li>
              <br />
              <li className="flex items-center gap-3">
                <TickSvg />
                <p>increase SERP</p>
              </li>
              <br />
              <li className="flex items-center gap-3">
                <TickSvg />
                <p>increase your MRR</p>
              </li>
              <br />
            </ul>
            {/* Add any additional features or details here */}
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
            <p className="text-base-content mt-4">Per month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
