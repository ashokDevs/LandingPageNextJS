"use client"

import { useState } from "react";
function HowItWorks() {
      const [websiteLink, setWebsiteLink] = useState<string>("");
  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">How It Works</h1>

      {/* Step 1: Input website link */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Step 1: Input website link
        </label>
        <input
          type="text"
          placeholder="Enter website link"
          value={websiteLink}
          onChange={(e) => setWebsiteLink(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Step 2: Crawlers scan website */}
      <div className="mb-4">
        <p className="text-gray-700 mb-2">Step 2: Crawlers scan website</p>
        {/* Add any descriptive text or visualization for this step */}
      </div>

      {/* Step 3: Generate your brand summary */}
      <div className="mb-4">
        <p className="text-gray-700 mb-2">
          Step 3: Generate your brand summary
        </p>
        {/* Add any descriptive text or visualization for this step */}
      </div>

      {/* Step 4: Gather necessary high volume and low volume keywords */}
      <div className="mb-4">
        <p className="text-gray-700 mb-2">
          Step 4: Gather necessary high volume and low volume keywords
        </p>
        {/* Add any descriptive text or visualization for this step */}
      </div>

      {/* Step 5: Write an article optimized with those keywords */}
      <div className="mb-4">
        <p className="text-gray-700 mb-2">
          Step 5: Write an article optimized with those keywords
        </p>
        {/* Add any descriptive text or visualization for this step */}
      </div>

      {/* Step 6: Rank higher on SERP */}
      <div className="mb-4">
        <p className="text-gray-700 mb-2">Step 6: Rank higher on SERP</p>
        {/* Add any descriptive text or visualization for this step */}
      </div>

      {/* Button to trigger the optimization process */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Start Optimization
      </button>
    </div>
  );
}

export default HowItWorks