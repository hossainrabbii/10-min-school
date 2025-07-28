"use client";
import React, { useState } from "react";
import AccordionBox from "./AccordionBox";
import { usePageData } from "@/app/context/PageDataContext";
// import { usePageData } from "@/app/context/PageDataContext";

const CourseDetails = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pageData = usePageData();
  const section = pageData?.data?.sections?.find(
    (s: any) => s.type === "about"
  );

  const values = section?.values || [];

  return (
    <div className="container mb-14">
      <h4 className="text-[20px] font-bold mb-4">{section?.name}</h4>

      <div className="rounded-md border p-4">
        {values.map((v: any) => (
          <AccordionBox
            key={v.id}
            title={
              <h5
                className=""
                dangerouslySetInnerHTML={{ __html: v.title }}
              ></h5>
            }
            subtitle={
              <div
                className="text-gray-600 text-[14px]"
                dangerouslySetInnerHTML={{ __html: v.description }}
              ></div>
            }
            i={v.id}
            isOpen={open}
            class="border-dashed"
            setIsOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
