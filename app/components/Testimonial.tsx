import Image from "next/image";
 
function Testimonial() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Image
        src="/testimonial.png"
        width={500}
        height={600}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  );
}

export default Testimonial;
