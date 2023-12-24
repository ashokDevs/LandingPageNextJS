"use client"

import { useState } from "react";
import InsertEmail from "../Library/joinWaitList";
function Join() {

  const [email, setEmail] = useState("");

  const handleJoinWaitlist=()=>{
    console.log("this is the meail ",email)
    InsertEmail(email);
    
  }
  return (
    <div className="hero  min-h-screen  px-10 py-10 flex flex-col gap-10   bg-base-200">
      <h1 className="text-6xl font-extrabold">Turn your words into leads</h1>
      <p className="text-sm text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere dolorum
        alias quo eaque deserunt quas tempore animi, maiores voluptatum. Beatae
        laudantium veniam soluta numquam molestiae natus voluptatibus quia culpa
        corrupti.
      </p>
      <div className="hero-content flex-col  lg:flex-row-reverse">
        <div className="card shrink-0 pt-5 items-center w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control mt-6">
              <button
                className="btn btn-wide btn-outline btn-secondary mt-2 text-xl"
                onClick={handleJoinWaitlist}
              >
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
            </div>
          </form>
          <button className="btn color-primary-content btn-wide btn-primary mb-4 text-xl">
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
        </div>
      </div>
    </div>
  );
}

export default Join