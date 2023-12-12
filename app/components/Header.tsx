import Link from "next/link";

export const Header = () => {
  return (
    <header className="px-6 py-4 border-b">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
        <Link href={"/"}>Blog Automation</Link>
        <form
          className="hidden border-solid border-2 rounded-lg border-purple-700 md:flex flex-row items-center justify-between "
          action=""
        >
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="Email"
            />
            <button className="btn join-item rounded-r-full">Subscribe</button>
          </div>
        </form>
        <nav className="md:hidden">
          <button
            className="  bg-purple-900 text-sm text-white border-solid border-2 rounded-lg px-4 py-2"
            type="submit"
          >
            Subscribe
          </button>
        </nav>
      </div>
    </header>
  );
};
