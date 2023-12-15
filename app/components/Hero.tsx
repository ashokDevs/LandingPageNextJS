function Hero() {
  return (
    <div className="pattern-zigzag pattern-blue-400 pattern-bg-white 
    pattern-size-6 pattern-opacity-100 text-black hero min-h-screen">
      <div className="hero-content text-center">
        <div className="w-fit p-8  rounded-lg h-96  bg-white shadow-sm shadow-black">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="Email"
            />
            
            
  
            <button className="btn join-item rounded-r-full">Subscribe</button>

           
  
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Hero;
