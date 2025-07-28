"use client";
import { usePageData } from "@/app/context/PageDataContext";
import Image from "next/image";

const CourseFeature = () => {
  const pageData = usePageData();
  const section = pageData?.data?.sections?.find(
    (s: any) => s.type === "feature_explanations"
  );

  const values = section?.values || [];

  return (
    <div className="container">
      <h4 className="text-[20px] font-bold mb-4">{section?.name}</h4>
      <div className="border rounded-md p-4">
        {values.map((v: any) => (
          <div
            className="flex flex-col items-start justify-between gap-3 py-5 lg:flex-row"
            key={v.id}
          >
            <div className="flex flex-col gap-2">
              <h2
                className="text-[14px] font-[500px] leading-[30px] text-[#111827] md:text-[16px]"
                dangerouslySetInnerHTML={{ __html: v.title }}
              ></h2>
              <div className="flex flex-row items-center gap-5">
                <p className="text-[14px] font-[400px] leading-[24px] text-[#4B5563] md:text-[16px]">
                  {v.checklist.map((item: any, idx: any) => (
                    <span key={idx} className="flex items-center gap-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="15"
                        fill="none"
                        viewBox="0 0 19 15"
                        key={idx}
                      >
                        <path
                          fill="#6294F8"
                          stroke="#6294F8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0.893"
                          d="M18.168 1.508a.792.792 0 01-.006 1.111L6.645 14.143a.77.77 0 01-1.087.005L.77 9.433a.792.792 0 01-.015-1.11.77.77 0 011.098-.016l4.242 4.177L17.07 1.502a.77.77 0 011.098.006z"
                        ></path>
                      </svg>
                      {item}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="max-w-[350px]">
              <Image
                src={v?.file_url}
                width="250"
                height="200"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFeature;
