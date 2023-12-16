import Link from "next/link";

export default function Header() {
  return (
    <header className="">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 font-semibold text-2xl">
              Blogpaw{" "}
            </div>
            {/* <div className="flex-none hidden lg:block ">
              <ul className="menu menu-horizontal text-2xl ">
                
                <li className="flex flex-col items-center justify-center text-center">
                  <a href="https://shipwithme.beehiiv.com/subscribe">
                    Subscribe to my newsletter
                  </a>
                </li>
                <li>
                  <button
                    type="submit"
                    className="btn hover:bg-blue-800 color-primary-content flex flex-col items-center justify-center text-center  btn-primary"
                  >
                    Join now
                  </button>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
