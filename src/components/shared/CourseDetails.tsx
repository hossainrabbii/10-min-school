"use client";
import React, { useState } from "react";
import AccordionBox from "./AccordionBox";
import { usePageData } from "@/app/context/PageDataContext";

const CourseDetails = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pageData = usePageData();

  return (
    <div className="container mb-14">
      <div className="rounded-md border p-4">
        <AccordionBox
          title={<h5 className="font-semibold">This IELTS course is for</h5>}
          subtitle={
            <div className="text-gray-600 text-[14px]">
              <ul className="list-disc ml-5">
                <li>Those who aim to go abroad for work or higher education</li>
                <li>Those who want to apply for permanent residency abroad</li>
                <li>
                  Those who have appeared for the IELTS exam but are not
                  satisfied with their band score
                </li>
                <li>
                  Those who want to improve their reading, writing, listening,
                  and speaking skills through IELTS for work, business, or
                  personal interest
                </li>
              </ul>
            </div>
          }
          i={1}
          isOpen={open}
          class="border-dashed"
          setIsOpen={setOpen}
        />
        <AccordionBox
          title={<h5 className="font-semibold">About the IELTS course </h5>}
          subtitle={
            <div className="text-gray-600 text-[14px]">
              <p className="mb-8">
                IELTS certificates are accepted in different higher education
                institutions in the USA and other English-speaking countries
                across the globe. This exam tests the ability of the candidates
                to speak, read, listen and write in English.
              </p>
              <p>
                {" "}
                Many of us are intimidated by English grammar as English is not
                our first language. Fortunately, IELTS is essentially a
                language-based test and not grammar-based. To achieve the
                desired score, you will require four English language skills:
                reading, writing, listening and speaking. The more proficient a
                person is in these four areas, the higher their score will be on
                the IELTS test.
              </p>
            </div>
          }
          i={2}
          isOpen={open}
          class="border-none"
          setIsOpen={setOpen}
        />
      </div>
    </div>
  );
};

export default CourseDetails;
