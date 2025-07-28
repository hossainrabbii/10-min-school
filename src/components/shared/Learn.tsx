"use client";

import { usePageData } from "@/app/context/PageDataContext";

const Learn = () => {
  const pageData = usePageData();
  const section = pageData?.data?.sections?.find(
    (s: any) => s.type === "pointers"
  );

  const values = section?.values || [];

  return (
    <div className="container mb-6">
      <h4 className="my-5 text-xl font-bold leading-[30px] text-black">
        {section?.name}
      </h4>
      <div className="border p-4 rounded-md">
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
          {values.map((v: any) => (
            <li className="flex items-start gap-2 mb-2" key={v.id}>
              <svg
                stroke="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="mr-1 mt-[2px]"
                fill="#6294F8"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div className="flex-1">{v?.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Learn;
