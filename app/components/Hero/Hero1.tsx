
import "@/app/components/Hero/Hero.css";
import Image from "next/image";
export const Hero1 = () => {
  const w=1/2
  return (
    <div className="herobg flex flex-col items-center justify-center px-4  h-full sm:max-w-xl md:max-w-full lg:pt-20 md:px-0">
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
        <form className="flex flex-col items-center w-full mb-4 gap-4 md:flex-row">
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
          <button
            type="submit"
            className="btn color-primary-content btn-primary"
          >
            Subscribe
          </button>
        </form>
        <div className="border-double  border-8 border-base-content rounded-full h-fit  flex flex-row items-center justify-center bg-base-200 ">
          <p className="  text-xs font-semibold  tracking-wider text-base-content uppercase rounded-full   text-center flex align-middle  px-10 w-fit md:text-lg">
            Get 10% off on the launch of product
          </p>
        </div>
      </div>
      <br />
      <br />
      <Image
        layout="responsive"
        width={1000}
        height={625}
        src="/testimonial.png"
        className={`w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-1/2 lg:max-w-screen-md`}
        alt=""
      />
    </div>
  );
};
