function Aboutme() {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <h1 className="text-5xl font-bold">Little About Me</h1>
          <div className="divider invisible divider-horizontal md:visible"></div>
  
          <div className="order-2 lg:order-1">
            <p className="py-6">
              Thank you for scrolling this far; it's my best opportunity to introduce myself. I'm Ashok, a 19-year-old from India. This blog automation tool is my second product. The first one was an AI lesson planner that didn't receive as much traffic as expected. That's why I stopped building it and started looking for another problem to solve. Meanwhile, I decided to write blogs for an existing website. After just two blogs, I realized I was wasting a lot of time. I discussed this with other solo founders and indie hackers, and they shared the same sentiment. That's when I decided to create this app. To stay updated, you can follow me on X (Twitter) or subscribe to my newsletter.
            </p>
            <div>
              <button className="btn btn-outline h-10">
                <img className="" src="/TwitterLogo.png" />Follow me
              </button>
            </div>
          </div>
  
          <img
            src="/aboutme.jpg"
            className="w-36 sm:aspect-1/1 rounded-full md:w-80 md:aspect-2/3 md:rounded-lg shadow-2xl order-1 lg:order-2"
          />
        </div>
      </div>
    );
  }
  
  export default Aboutme;
  