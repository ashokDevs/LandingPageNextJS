// Import the necessary libraries
"use client";
import React, { useState } from "react";

// Define the FAQ component
function FAQ() {
  // Array of FAQ items
  const faqItems = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
    // Add more FAQ items as needed
  ];

  // State to manage the selected accordion item
  const [selectedAccordion, setSelectedAccordion] = useState<number | null>(0);

  // Function to handle accordion item change
  const handleAccordionChange = (index: number) => {
    setSelectedAccordion(index === selectedAccordion ? null : index);
  };

  // Render the FAQ component
  return (
    <div className="min-h-screen  px-10 py-10 flex flex-col md:flex-row gap-10 h-screen  ">
      <h1 className="text-5xl font-extraboldl">FREQUENTLY ASKED QUESTIONS</h1>
      <div className="join join-vertical w-full ">
        {/* Map over the FAQ items to create accordion components */}
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="collapse collapse-arrow join-item border-b-2 border-solid border-base-300"
          >
            {/* Radio input for each accordion item */}
            <input
              type="radio"
              name="my-accordion-4"
              checked={index === selectedAccordion}
              onChange={() => handleAccordionChange(index)}
            />
            {/* Title of the accordion item */}
            <div className="collapse-title text-xl font-medium">
              {item.question}
            </div>
            {/* Content of the accordion item */}
            <div className="collapse-content">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Export the FAQ component
export default FAQ;
