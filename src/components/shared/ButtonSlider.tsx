"use client";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ButtonSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const buttons = [
    { label: "Course Instructor", targetId: "instructor" },
    { label: "How the course is liad out", targetId: "course-liad" },
    { label: "Learn", targetId: "learn" },
    { label: "Course Feature", targetId: "course-feature" },
    { label: "Free Items", targetId: "free-items" },
    { label: "Course Details", targetId: "course-details" },
  ];

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;

    setAtStart(el.scrollLeft <= 0);
    setAtEnd(el.scrollLeft + el.offsetWidth >= el.scrollWidth - 1);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -140 : 140;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Initial check
    checkScrollPosition();

    // Update on scroll
    const handleScroll = () => checkScrollPosition();
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto p-4 sticky top-[50px] bg-white z-10">
      <div className="relative w-full border-b">
        {/* Left Arrow */}
        <button
          className={`absolute -left-10 top-1/2 -translate-y-1/2 z-10 p-[6px] rounded-full transition-opacity bg-[#7F7F7F] text-white ${
            atStart ? "opacity-30 cursor-not-allowed" : "opacity-100"
          }`}
          onClick={() => scroll("left")}
          disabled={atStart}
        >
          <IoIosArrowBack size={20} />
        </button>

        {/* Button Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar space-x-2 px-8 py-2"
        >
          {buttons.map((btn, idx) => {
            const isActive = activeSection === btn.targetId;

            return (
              <button
                key={idx}
                className={`whitespace-nowrap p-2 border-b-2 transition-colors duration-200 ${
                  isActive
                    ? "text-green-500 border-green-500"
                    : "text-gray-500 border-transparent"
                }`}
                onClick={() => {
                  const section = document.getElementById(btn.targetId);
                  if (section) {
                    const yOffset = -200;
                    const y =
                      section.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                    setActiveSection(btn.targetId);
                  }
                }}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          className={`absolute -right-10 top-1/2 -translate-y-1/2 z-10 p-[6px] rounded-full transition-opacity bg-[#7F7F7F] text-white ${
            atEnd ? "opacity-30 cursor-not-allowed" : "opacity-100"
          }`}
          onClick={() => scroll("right")}
          disabled={atEnd}
        >
          <IoIosArrowForward size={20} />
        </button>
      </div>
    </div>
  );
}
