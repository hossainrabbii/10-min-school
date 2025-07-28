import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container">
      <div className="flex justify-between py-10 flex-col md:flex-row gap-10 mad:gap-0">
        <div className="w-full md:w-[33%]">
          <Link className="h-[27px] w-[100px]" href="/">
            <Image
              alt="10ms"
              src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
              width="100"
              height="27"
            />
          </Link>
          <p className="text-[16px] font-medium my-4">
            Download Our Mobile App
          </p>
          <div className="flex gap-5 flex-col md:flex-row">
            <Link href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool">
              <Image
                alt="10ms"
                src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png"
                width="150"
                height="50"
              />
            </Link>
            <Link href="https://apps.apple.com/us/app/10-minute-school/id1577061772">
              <Image
                alt="10ms"
                src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png"
                width="150"
                height="30"
                
              />
            </Link>
          </div>
        </div>
        <div className="flex w-ful w-[33%]">
          <div className="w-full md:w-[50%]">
            <h6 className="text-[20px] font-semibold">Company</h6>
            <div className="mt-4  flex flex-col">
              <Link
                href=""
                className="text-gray-600 font-medium hover:text-green-600 mb-4"
              >
                Career / Recruitment
              </Link>
              <Link
                href=""
                className="text-gray-600 font-medium hover:text-green-600 mb-4"
              >
                Career
              </Link>
              <Link
                href=""
                className="text-gray-600 font-medium hover:text-green-600 mb-4"
              >
                Career
              </Link>
              <Link
                href=""
                className="text-gray-600 font-medium hover:text-green-600 mb-4"
              >
                Career
              </Link>
              <Link
                href=""
                className="text-gray-600 font-medium hover:text-green-600 mb-4"
              >
                Career
              </Link>
              <Link
                href=""
                className="text-gray-600 font-medium hover:text-green-600 mb-4"
              >
                Career
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[40%]">
            <h6 className="text-[20px] font-semibold">Company</h6>
            <div className="mt-4 flex flex-col">
              <Link
                href=""
                className="text-gray-600 font-medium hover:text-green-600 mb-4"
              >
                Blog
              </Link>
              <Link
                href=""
                className="text-gray-600 font-medium hover:text-green-600 mb-4"
              >
                Career
              </Link>
              <Link
                href=""
                className="text-gray-600 font-medium hover:text-green-600 mb-4"
              >
                Career
              </Link>
              <Link
                href=""
                className="text-gray-600 font-medium hover:text-green-600 mb-4"
              >
                Career
              </Link>
              <Link
                href=""
                className="text-gray-600 font-medium hover:text-green-600 mb-4"
              >
                Career
              </Link>
              <Link
                href=""
                className="text-gray-600 font-medium hover:text-green-600 mb-4"
              >
                Career
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[33%]">
          <h6 className="text-[20px] font-semibold mb-4">Keep up with us at</h6>
          <p className="mb-4">
            Call Us:{" "}
            <Link href="tel:16910" className="text-green-600">
              16910
            </Link>{" "}
            (24x7)
          </p>
          <p className="mb-4">
            Whatsapp:
            <Link
              href="https://api.whatsapp.com/send?phone=+8801896016252&text=I%20need%20your%20assistance"
              className="text-green-600"
            >
              {" "}
              +8801896016252
            </Link>
            (24x7)
          </p>
          <p className="mb-4">
            Outside Bangladesh:{" "}
            <span className="text-green-600"> +880 9610916910</span>{" "}
          </p>
          <p className="mb-4">
            Email Us:{" "}
            <span className="text-green-600"> support@10minuteschool.com</span>{" "}
          </p>

          <div className="flex gap-5">
            <Link href="" className="bg-black rounded p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </Link>
            <Link href="" className="bg-black rounded p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </Link>
            <Link href="" className="bg-black rounded p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </Link>
            <Link href="" className="bg-black rounded p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </Link>
            <Link href="" className="bg-black rounded p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mb-5 text-gray-600">
        2015 - 2025 Copyright © 10 Minute School. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
