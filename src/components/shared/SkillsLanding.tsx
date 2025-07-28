"use client";

import { usePageData } from "@/app/context/PageDataContext";
import Image from "next/image";
import React from "react";
import Gallery from "./Gallery";
import Enroll from "./Enroll";

const SkillsLanding = () => {
  const pageData = usePageData();

  return (
    <div
      id="skills-landing"
      className="min-h-[300px] md:min-h-[300px]"
      style={{
        backgroundImage:
          'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px] px-4">
        <div className="order-1 flex flex-col justify-center flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          <div className="block mt-4 md:mt-0 md:hidden">
            <div className="relative overflow-hidden bg-black aspect-video">
              <div className="relative">
                <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                  >
                    <circle
                      cx="28"
                      cy="28"
                      r="28"
                      fill="#fff"
                      fillOpacity="0.5"
                    />
                    <circle cx="28" cy="28" r="25.415" fill="#fff" />
                    <path
                      fill="#1CAB55"
                      d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                    />
                  </svg>
                </span>
                <Image
                  alt="image"
                  src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                  width={867}
                  height={480}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl">
            {pageData?.data?.title}
          </h1>
          <div className="mb-2">
            <button className="flex flex-row flex-wrap gap-2 text-white">
              <span className="inline-block">
                <Image
                  className="md:w-[130px] w-[100px]"
                  src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                  width={130}
                  height={36}
                  alt="rating badge"
                />
              </span>
              <span className="inline-block text-sm md:text-base">
                (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
              </span>
            </button>
          </div>
          <div className="text-gray-400">
            <p className="tenms__paragraph" dir="ltr">
              <div
                dangerouslySetInnerHTML={{
                  __html: pageData?.data?.description || "",
                }}
              />
            </p>
          </div>
        </div>

        <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-4 md:top-[50px] ">
          <div className="md:border">
            <div className="p-1 hidden md:block">
              <Gallery />
            </div>
            <div className="hidden lg:block">
              <Enroll />
            </div>
          </div>

          <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
            <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
            <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green-500">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
              </svg>{" "}
              <span className="ml-1 ">ফোন করুন (16910)</span>
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default SkillsLanding;
