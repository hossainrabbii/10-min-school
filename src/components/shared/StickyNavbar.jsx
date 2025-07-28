import Image from "next/image";


const StickyNavbar = () => {
  return (
    <div className="sticky top-0 z-50 border-b bg-white md:h-[65px]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 md:px-7">
        {/* Left section: Mobile Menu & Logo */}
        {/* <div className="flex gap-2">
          <button className="xl:hidden" type="button" name="menu-toggle">
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 24 24"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 17.9995V19.9995H3V17.9995H21ZM17.4038 3.90332L22 8.49951L17.4038 13.0957L15.9896 11.6815L19.1716 8.49951L15.9896 5.31753L17.4038 3.90332ZM12 10.9995V12.9995H3V10.9995H12ZM12 3.99951V5.99951H3V3.99951H12Z"></path>
            </svg>
            <span className="sr-only">menu</span>
          </button>
          <div className="md:hidden">
            <a className="h-[27px] w-[100px]" href="/">
              <img
                name="10ms"
                alt="10ms"
                src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                width="100"
                height="27"
                style={{ color: 'transparent' }}
              />
            </a>
          </div>
        </div> */}

        {/* Center logo for desktop */}
        <div className="items-center hidden gap-9 md:flex">
          <a className="h-[27px] w-[100px]" href="/">
            <Image
              name="10ms"
              alt="10ms"
              src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
              width="100"
              height="27"
              style={{ color: 'transparent' }}
            />
          </a>
        </div>

        {/* Search box */}
        <div className="flex-1 hidden w-full pr-4 md:block">
          <div className="w-full">
            <div className="relative flex w-full flex-col items-center bg-white z-50">
              <div className="shadow-0 rounded-b-[23px] flex w-full items-center gap-2 rounded-t-[23px] border-0 px-[12px] py-2 md:border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="24"
                  fill="none"
                  viewBox="0 0 27 24"
                >
                  <path fill="#fff" d="M0 0H26.514V23.99H0z" />
                  <path
                    fill="#111827"
                    d="M21.247 20.065l-2.83-2.82a6.59 6.59 0 001.407-4.078 6.657 6.657 0 10-6.657 6.657 6.59 6.59 0 004.077-1.407l2.82 2.83a.834.834 0 001.365-.271.833.833 0 00-.182-.911zM8.174 13.167a4.993 4.993 0 119.985 0 4.993 4.993 0 01-9.985 0z"
                  />
                </svg>
                <input
                  type="search"
                  autoComplete="off"
                  autoCorrect="off"
                  placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
                  className="w-full flex-1 placeholder:text-sm placeholder:font-normal placeholder:leading-5 placeholder:text-[#7C818A] focus:outline-none"
                  name="Search"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right section: Nav Links + Phone + Login */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="flex items-center gap-3 rounded-md border-1 max-h-96 md:gap-6">
            <span className="block bg-white md:hidden">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="24"
                  fill="none"
                  viewBox="0 0 27 24"
                >
                  <path fill="#fff" d="M0 0H26.514V23.99H0z" />
                  <path
                    fill="#111827"
                    d="M21.247 20.065l-2.83-2.82a6.59 6.59 0 001.407-4.078 6.657 6.657 0 10-6.657 6.657 6.59 6.59 0 004.077-1.407l2.82 2.83a.834.834 0 001.365-.271.833.833 0 00-.182-.911zM8.174 13.167a4.993 4.993 0 119.985 0 4.993 4.993 0 01-9.985 0z"
                  />
                </svg>
              </button>
            </span>
            <span className="hidden cursor-pointer items-center gap-1 rounded border px-2 py-[2px] hover:bg-slate-50 md:flex">
              <svg
                className="hidden md:block"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Your SVG path goes here */}
              </svg>
              <span>বাং</span>
            </span>
            <a className="items-center hidden gap-1 text-green md:flex" href="tel:16910">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c..."
                />
              </svg>
              <span className="inline-block">16910</span>
            </a>
            <a className="flex items-center gap-1 text-black md:hidden" href="tel:16910">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#130F26"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.61 10.394c3.325 3.323 4.079-.522 6.195..."
                />
              </svg>
            </a>
          </div>
          <div className="block">
            <a
              className="flex items-center px-3 py-1 text-white rounded-md bg-green md:px-6"
              href="/auth/login/?returnUrl=%2Fen%2Fproduct%2Fielts-course%2F"
            >
              <span id="login-button" className="text-[12px] font-semibold leading-[24px] md:text-[16px] md:font-medium">
                লগ-ইন
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNavbar;