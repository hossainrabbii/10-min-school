"use client";
import { useState } from "react";

const accordionData = [
  {
    title: "What is Next.js?",
    content: "Next.js is a React framework for production.",
  },
  {
    title: "Why use Tailwind?",
    content: "Tailwind makes styling fast and scalable.",
  },
  {
    title: "How does SSR work?",
    content: "Server-side rendering sends HTML on each request.",
  },
  {
    title: "What is ISR?",
    content: "Incremental Static Regeneration updates pages after build.",
  },
  {
    title: "How to fetch data?",
    content: "You can use fetch(), SWR, or React Query.",
  },
];
const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const [showMore, setShowMore] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev: number[]) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const visibleItems = showMore ? accordionData : accordionData.slice(0, 3);

  return (
    <div>
      <div className="max-w-xl mx-auto p-4">
        {visibleItems.map((item, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div key={index} className="mb-2 border border-gray-300 rounded">
              <button
                className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 font-medium"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.title}</span>
                <span>{isOpen ? "▲" : "▼"}</span>
              </button>
              {isOpen && (
                <div className="px-4 py-2 text-gray-700 bg-white border-t">
                  {item.content}
                </div>
              )}
            </div>
          );
        })}

        <button
          className="mt-4 text-blue-600 hover:underline font-medium"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default FAQ;
