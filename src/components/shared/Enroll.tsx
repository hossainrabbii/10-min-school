import Image from "next/image";

const Enroll = () => {
  return (
    <>
      <div className="px-4 py-2">
        <div className="inline-block text-2xl font-semibold">৳3850</div>
        <span className="ml-2 text-base font-normal md:text-xl">
          <del>৳5000</del>
        </span>
        <p className="text-sm text-gray-500">1150 ৳ ছাড়</p>
        <button className="bg-green text-white px-4 py-2 mt-4 w-full bg-green-600 border-b-4 border-green-800 rounded-md hover:bg-green-800">
          Enroll
        </button>

        <div className="hidden md:block">
          <div className="grid py-2 md:px-4 md:py-2">
            <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
            <div>
              <div className="flex items-center mb-3 leading-5">
                <div className="inline-block h-[20px] w-[20px] opacity-1 transition-opacity duration-300 ease-in-out">
                  <Image
                    alt="icon"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png"
                  />
                </div>
                <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                  কোর্সটি করছেন ৩৩০১৮ জন
                </h4>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-3 leading-5">
                <div className="inline-block h-[20px] w-[20px] opacity-1 transition-opacity duration-300 ease-in-out">
                  <Image
                    alt="icon"
                    data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png"
                  />
                </div>
                <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                  সময় লাগবে ৫০ ঘন্টা
                </h4>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-3 leading-5">
                <div className="inline-block h-[20px] w-[20px] opacity-1 transition-opacity duration-300 ease-in-out">
                  <Image
                    alt="icon"
                    data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png"
                  />
                </div>
                <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                  ৫৪টি ভিডিও
                </h4>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-3 leading-5">
                <div className="inline-block h-[20px] w-[20px] opacity-1 transition-opacity duration-300 ease-in-out">
                  <Image
                    alt="icon"
                    data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png"
                  />
                </div>
                <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                  ১০টি রিডিং এবং ১০টি লিসেনিং মক টেস্ট
                </h4>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-3 leading-5">
                <div className="inline-block h-[20px] w-[20px] opacity-1 transition-opacity duration-300 ease-in-out">
                  <Image
                    alt="icon"
                    data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png"
                  />
                </div>
                <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                  ৩৮টি লেকচার শিট
                </h4>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-3 leading-5">
                <div className="inline-block h-[20px] w-[20px] opacity-1 transition-opacity duration-300 ease-in-out">
                  <Image
                    alt="icon"
                    data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video-lecture.png"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video-lecture.png"
                  />
                </div>
                <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                  ২৫টি ভিডিও লেকচার
                </h4>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-3 leading-5">
                <div className="inline-block h-[20px] w-[20px] opacity-1 transition-opacity duration-300 ease-in-out">
                  <Image
                    alt="icon"
                    data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png"
                  />
                </div>
                <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                  ১টি ফ্রি হার্ডকপি বই
                </h4>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-3 leading-5">
                <div className="inline-block h-[20px] w-[20px] opacity-1 transition-opacity duration-300 ease-in-out">
                  <Image
                    alt="icon"
                    data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png"
                  />
                </div>
                <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                  ফেসবুক সাপোর্ট গ্রুপ
                </h4>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-3 leading-5">
                <div className="inline-block h-[20px] w-[20px] opacity-1 transition-opacity duration-300 ease-in-out">
                  <Image
                    alt="icon"
                    data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png"
                  />
                </div>
                <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                  কোর্সের মেয়াদ আজীবন
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enroll;
