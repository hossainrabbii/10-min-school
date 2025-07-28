"use client";

import { useState } from "react";
import Image from "next/image";
import { usePageData } from "@/app/context/PageDataContext";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const media = [
//   { type: "image", src: "/products/p1.jpg" },
//   { type: "image", src: "/products/p2.jpg" },
//   { type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
//   { type: "image", src: "/products/p3.jpg" },
// ];

export default function Gallery() {
  const pageData = usePageData();

  const media = pageData?.data?.media.filter(
    (item: any) => item.name === "preview_gallery"
  );
  const [index, setIndex] = useState(0);
  const current = media[index];
  const [playVideo, setPlayVideo] = useState(false);

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setPlayVideo(false);
    }
  };
  const next = () => {
    if (index < media.length - 1) {
      setIndex(index + 1);
      setPlayVideo(false);
    }
  };

  const srcVideo = "https://www.youtube.com/embed/";
  return (
    <div className="w-full mx-auto overflow-hidden">
      {/* Main Viewer */}
      <div className="relative aspect-square border overflow-hidden h-[220px] w-full">
        {/* Left Arrow */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="absolute left-2 top-1/2 rounded-full -translate-y-1/2 p-1 bg-white hover:bg-white disabled:opacity-50 z-10"
        >
          <IoIosArrowBack size={16} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          disabled={index === media.length - 1}
          className="absolute right-2 top-1/2 rounded-full -translate-y-1/2 p-1 bg-white hover:bg-white disabled:opacity-50 z-10"
        >
          <IoIosArrowForward size={16} />
        </button>

        {/* Image or Video */}
        {current.resource_type === "image" ? (
          <Image
            src={current.resource_value}
            alt="product"
            fill
            className="object-cover z-0"
          />
        ) : (
          <div className="w-full h-full relative z-0">
            {!playVideo ? (
              <>
                <Image
                  src={current.thumbnail_url}
                  alt="video"
                  fill
                  className="object-cover"
                />
                {/* Custom Play Button */}
                <button
                  onClick={() => setPlayVideo(true)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                    width={64}
                    height={34}
                    alt="play"
                  />
                </button>
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src={srcVideo + current.resource_value + "?autoplay=1"}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar">
        {media.map((item: any, i: any) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setPlayVideo(false);
            }}
            className={`w-16 h-9 flex-shrink-0 border-2 rounded-md overflow-hidden relative ${
              i === index ? "border-green-500" : "border-transparent"
            }`}
          >
            {item.resource_type === "image" ? (
              <Image
                src={item.resource_value}
                alt="thumb"
                width={80}
                height={80}
                className="object-cover"
              />
            ) : (
              <>
                <Image
                  src={item.thumbnail_url}
                  alt="thumb"
                  width={80}
                  height={80}
                  className="object-cover"
                />
                <Image
                  src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                  width={24}
                  height={34}
                  alt="play"
                  className="absolute inset-0 m-auto"
                />
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
