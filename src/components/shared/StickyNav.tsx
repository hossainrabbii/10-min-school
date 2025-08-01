import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";

const StickyNav = ({ currentLang }: { currentLang: string }) => {
  return (
    <div className="h-[65px] flex items-center sticky top-0 z-50 border-b bg-white md:h-[65px]">
      <div className="container mx-auto flex gap-5">
        {/* logo */}
        <div className="mt-2">
          <Link className="h-[30px] w-[100px]" href="/">
            <Image
              alt="10ms"
              src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
              width="100"
              height="27"
            />
          </Link>
        </div>

        {/* search box */}
        <div className="border rounded-full overflow-hidden p-2 text-sm  gap-2 items-center flex-1 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="24"
            fill="none"
            viewBox="0 0 27 24"
          >
            <path fill="#fff" d="M0 0H26.514V23.99H0z"></path>
            <path
              fill="#111827"
              d="M21.247 20.065l-2.83-2.82a6.59 6.59 0 001.407-4.078 6.657 6.657 0 10-6.657 6.657 6.59 6.59 0 004.077-1.407l2.82 2.83a.834.834 0 001.365-.271.833.833 0 00-.182-.911zM8.174 13.167a4.993 4.993 0 119.985 0 4.993 4.993 0 01-9.985 0z"
            ></path>
            <path
              fill="#F1844C"
              d="M3.875.975l1.238 1.807c.33.481.853.794 1.433.857l2.178.236-1.807 1.239c-.481.33-.794.852-.857 1.432l-.237 2.178-1.238-1.807a1.998 1.998 0 00-1.432-.857L.974 5.824l1.808-1.239c.48-.33.794-.853.857-1.432L3.875.975zM8.59 19.77l-.337.54a1.998 1.998 0 00-.21 1.656l.19.607-.54-.337a1.998 1.998 0 00-1.655-.21l-.607.19.337-.54c.308-.494.385-1.099.21-1.655l-.19-.607.54.337c.494.308 1.099.385 1.655.21l.607-.19zM23.575 6.068l.223 1.396c.092.576.43 1.083.927 1.388l1.205.74-1.396.222a1.998 1.998 0 00-1.388.928l-.74 1.204-.222-1.396a1.997 1.997 0 00-.927-1.387l-1.205-.74 1.396-.223a1.997 1.997 0 001.388-.927l.74-1.205z"
            ></path>
          </svg>
          <input type="text" placeholder="Seacrch" className="outline-none" />
        </div>

        {/* menu */}
        <div className=" items-center gap-4 hidden lg:flex">
          <Link
            href=""
            className="text-gray-600 text-[14px] font-semibold flex hover:text-green-600 relative drp1"
          >
            Class 6-12
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            <div className="absolute top-5 -left-12 w-[180px] dropdown1">
              <ul className="p-4 bg-[#f9f9f9] rounded-lg">
                <li
                  className=" 
                      flex items-center py-3 pl-1 pr-4 rounded cursor-pointer hover:bg-gray-100"
                >
                  <span className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      fill="none"
                      viewBox="0 0 27 27"
                      className="h-7 w-7"
                    >
                      <mask
                        id="mask0_19054_48978"
                        width="27"
                        height="27"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path
                          fill="#fff"
                          d="M0.529 0.443H26.674V26.588H0.529z"
                        ></path>
                      </mask>
                      <g mask="url(#mask0_19054_48978)">
                        <path
                          fill="#FF9D99"
                          fillRule="evenodd"
                          d="M13.39 5.854a1.608 1.608 0 100-3.216 1.608 1.608 0 000 3.216zm0 1.378a2.986 2.986 0 100-5.972 2.986 2.986 0 000 5.972z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fill="#FF9D99"
                          d="M23.242 15.877c.993 0 1.797.805 1.797 1.797v4.001c0 .897-.595 1.62-1.332 1.62a2.261 2.261 0 01-2.261-2.261v-3.36c0-.992.804-1.797 1.796-1.797zM3.957 15.878c-.992 0-1.796.804-1.796 1.797v4c0 .897.594 1.62 1.332 1.62a2.261 2.261 0 002.26-2.26v-3.36c0-.993-.803-1.797-1.796-1.797z"
                        ></path>
                        <path
                          fill="#FFC6C6"
                          d="M22.603 9.738v13.696a2.269 2.269 0 01-2.269 2.269H6.864a2.269 2.269 0 01-2.27-2.269V9.738a5.66 5.66 0 015.66-5.66h6.69a5.66 5.66 0 015.659 5.66z"
                        ></path>
                        <path
                          fill="#A51E35"
                          d="M10.404 19.109v-8.392h1.775v3.462h3.601v-3.462h1.77v8.392h-1.77v-3.467H12.18v3.467h-1.775z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-[#111827] text-base font-medium md:text-[#4B5563] md:text-sm">
                    HSC
                  </span>
                </li>
                <li
                  className="
                      flex items-center py-3 pl-1 pr-4 rounded cursor-pointer hover:bg-gray-100"
                >
                  <span className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      fill="none"
                      viewBox="0 0 48 48"
                      className="h-7 w-7"
                    >
                      <path
                        fill="#F3D382"
                        fillRule="evenodd"
                        d="M21.508 8.933a2.952 2.952 0 100-5.903 2.952 2.952 0 000 5.903zm0 2.53a5.482 5.482 0 100-10.963 5.482 5.482 0 000 10.963z"
                        clipRule="evenodd"
                      ></path>
                      <path
                        fill="#F3D382"
                        d="M38.702 27.336A3.298 3.298 0 0142 30.634v7.345c0 1.646-1.092 2.974-2.446 2.974a4.15 4.15 0 01-4.15-4.151v-6.168a3.298 3.298 0 013.298-3.298zM3.298 27.336A3.298 3.298 0 000 30.634v7.345c0 1.646 1.092 2.974 2.446 2.974a4.15 4.15 0 004.15-4.151v-6.168a3.298 3.298 0 00-3.298-3.298z"
                      ></path>
                      <path
                        fill="#FFE6A5"
                        d="M37.64 15.468v25.144c0 2.3-1.864 4.165-4.164 4.165H8.746a4.165 4.165 0 01-4.165-4.165V15.468c0-5.738 4.652-10.39 10.39-10.39h12.28c5.738 0 10.39 4.652 10.39 10.39z"
                      ></path>
                      <path
                        fill="#E18E1B"
                        d="M17.625 17.506V33.05h-3.287V20.625h-.09l-3.56 2.232v-2.915l3.848-2.436h3.089zM26.56 33.392c-1.306-.005-2.43-.327-3.37-.964-.937-.638-1.658-1.561-2.164-2.77-.5-1.21-.749-2.665-.744-4.365 0-1.695.25-3.14.752-4.334.506-1.194 1.227-2.102 2.163-2.725.941-.627 2.062-.94 3.362-.94 1.3 0 2.419.313 3.355.94.941.628 1.665 1.539 2.17 2.733.507 1.189.757 2.631.752 4.326 0 1.705-.253 3.163-.759 4.372-.5 1.21-1.22 2.133-2.155 2.77-.937.638-2.057.957-3.363.957zm0-2.725c.89 0 1.6-.448 2.132-1.344.531-.895.794-2.239.79-4.03 0-1.179-.122-2.16-.365-2.945-.238-.784-.577-1.374-1.017-1.768a2.218 2.218 0 00-1.54-.592c-.886 0-1.595.442-2.126 1.328-.531.886-.8 2.211-.805 3.977 0 1.194.12 2.191.357 2.99.243.795.585 1.392 1.025 1.792.44.395.956.592 1.548.592z"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-[#111827] text-base font-medium md:text-[#4B5563] md:text-sm">
                    Class Ten
                  </span>
                </li>
                <li
                  className="
                      flex items-center py-3 pl-1 pr-4 rounded cursor-pointer hover:bg-gray-100"
                >
                  <span className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      fill="none"
                      viewBox="0 0 48 48"
                      className="h-7 w-7"
                    >
                      <mask
                        id="mask0_10618_73943"
                        width="48"
                        height="48"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0H48V48H0z"></path>
                      </mask>
                      <g mask="url(#mask0_10618_73943)">
                        <path
                          fill="#67D6C5"
                          fillRule="evenodd"
                          d="M24.51 9.933a2.952 2.952 0 100-5.903 2.952 2.952 0 000 5.903zm0 2.53a5.482 5.482 0 100-10.963 5.482 5.482 0 000 10.963z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fill="#67D6C5"
                          d="M41.7 27.745A3.298 3.298 0 0145 31.043v7.345c0 1.646-1.092 2.974-2.446 2.974a4.15 4.15 0 01-4.15-4.151v-6.168a3.298 3.298 0 013.298-3.298zM6.298 27.745A3.298 3.298 0 003 31.043v7.345c0 1.646 1.092 2.974 2.446 2.974a4.15 4.15 0 004.15-4.151v-6.168a3.298 3.298 0 00-3.298-3.298z"
                        ></path>
                        <path
                          fill="#89EAD3"
                          d="M40.53 16.469v25.143c0 2.3-1.865 4.165-4.165 4.165h-24.73a4.165 4.165 0 01-4.165-4.165V16.47c0-5.738 4.651-10.39 10.39-10.39h12.28c5.738 0 10.39 4.652 10.39 10.39z"
                        ></path>
                        <path
                          fill="#1D7A87"
                          d="M24.073 18.293c.8 0 1.569.134 2.308.402a5.314 5.314 0 011.988 1.283c.587.587 1.05 1.366 1.39 2.338.343.966.518 2.153.523 3.56 0 1.32-.15 2.5-.448 3.537-.293 1.032-.716 1.91-1.267 2.633a5.54 5.54 0 01-1.997 1.655c-.779.374-1.65.562-2.61.562-1.038 0-1.954-.2-2.748-.6a5.16 5.16 0 01-1.92-1.647 5.128 5.128 0 01-.873-2.353h3.24c.127.567.393 1.007.797 1.32.405.31.906.464 1.503.464 1.012 0 1.781-.44 2.308-1.32.526-.886.792-2.098.797-3.637h-.107a3.723 3.723 0 01-.94 1.177 4.385 4.385 0 01-1.36.751 4.859 4.859 0 01-1.616.266c-.916 0-1.733-.215-2.452-.645a4.629 4.629 0 01-1.7-1.776c-.415-.754-.622-1.615-.622-2.581-.005-1.042.235-1.97.72-2.785a5.08 5.08 0 012.035-1.913c.875-.466 1.892-.696 3.051-.69zm.023 2.58c-.511 0-.967.122-1.366.365a2.69 2.69 0 00-.942.98c-.227.409-.338.867-.334 1.373 0 .511.112.971.334 1.381.228.405.537.729.927.972.394.238.845.357 1.35.357a2.603 2.603 0 001.898-.797 2.8 2.8 0 00.57-.873 2.797 2.797 0 00-.144-2.399 2.668 2.668 0 00-.942-.986 2.51 2.51 0 00-1.351-.372z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-[#111827] text-base font-medium md:text-[#4B5563] md:text-sm">
                    Class Nine
                  </span>
                </li>
                <li
                  className="
                      flex items-center py-3 pl-1 pr-4 rounded cursor-pointer hover:bg-gray-100"
                >
                  <span className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      fill="none"
                      viewBox="0 0 48 48"
                      className="h-7 w-7"
                    >
                      <mask
                        id="mask0_10618_73965"
                        width="48"
                        height="48"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0H48V48H0z"></path>
                      </mask>
                      <g mask="url(#mask0_10618_73965)">
                        <path
                          fill="#FBB986"
                          fillRule="evenodd"
                          d="M24.51 9.933a2.952 2.952 0 10-.001-5.903 2.952 2.952 0 000 5.903zm0 2.53a5.482 5.482 0 100-10.963 5.482 5.482 0 000 10.963z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fill="#FBB986"
                          d="M41.7 28.336A3.298 3.298 0 0145 31.635v7.345c0 1.646-1.092 2.974-2.446 2.974a4.15 4.15 0 01-4.15-4.151v-6.168a3.298 3.298 0 013.298-3.299zM6.298 28.336A3.298 3.298 0 003 31.635v7.345c0 1.646 1.092 2.974 2.446 2.974a4.15 4.15 0 004.15-4.151v-6.168a3.298 3.298 0 00-3.298-3.299z"
                        ></path>
                        <path
                          fill="#FDD6AF"
                          d="M40.64 16.469v25.143c0 2.3-1.864 4.165-4.164 4.165h-24.73a4.165 4.165 0 01-4.165-4.165V16.47c0-5.738 4.652-10.39 10.39-10.39h12.28c5.738 0 10.39 4.652 10.39 10.39z"
                        ></path>
                        <path
                          fill="#D04F28"
                          d="M24.293 34.263c-1.169 0-2.209-.19-3.12-.57-.905-.384-1.616-.908-2.132-1.57a3.573 3.573 0 01-.774-2.255c0-.648.146-1.242.44-1.784.298-.546.703-1 1.214-1.358a4.003 4.003 0 011.716-.699v-.106c-.83-.167-1.503-.57-2.02-1.207a3.472 3.472 0 01-.774-2.239c0-.804.236-1.52.706-2.148.47-.632 1.116-1.128 1.936-1.488.825-.364 1.76-.546 2.808-.546 1.048 0 1.981.182 2.8.547.826.364 1.473.862 1.944 1.495.47.627.708 1.34.713 2.14-.005.855-.268 1.602-.789 2.24a3.393 3.393 0 01-2.004 1.206v.106a3.938 3.938 0 011.693.699c.51.359.916.812 1.214 1.358.304.542.458 1.136.463 1.784a3.61 3.61 0 01-.782 2.254c-.516.663-1.23 1.187-2.14 1.571-.906.38-1.943.57-3.112.57zm0-2.414c.521 0 .977-.094 1.366-.281.39-.192.694-.455.911-.79.223-.338.334-.728.334-1.168 0-.45-.114-.848-.341-1.192a2.348 2.348 0 00-.926-.82c-.39-.202-.838-.303-1.344-.303-.5 0-.949.101-1.343.303-.395.198-.706.471-.934.82a2.145 2.145 0 00-.334 1.192c0 .44.109.83.327 1.169.217.334.523.597.918.789.395.187.85.28 1.366.28zm0-6.945a2.47 2.47 0 001.161-.266 2 2 0 00.797-.736c.193-.314.289-.675.289-1.085a1.944 1.944 0 00-1.078-1.784c-.334-.177-.724-.266-1.169-.266-.44 0-.83.089-1.169.266-.339.172-.604.412-.797.721-.187.304-.28.658-.28 1.063 0 .41.096.771.288 1.085a2 2 0 00.797.736 2.47 2.47 0 001.161.266z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-[#111827] text-base font-medium md:text-[#4B5563] md:text-sm">
                    Class Eight
                  </span>
                </li>
                <li
                  className="
                      flex items-center py-3 pl-1 pr-4 rounded cursor-pointer hover:bg-gray-100"
                >
                  <span className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      fill="none"
                      viewBox="0 0 48 48"
                      className="h-7 w-7"
                    >
                      <mask
                        id="mask0_10618_73989"
                        width="48"
                        height="48"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0H48V48H0z"></path>
                      </mask>
                      <g mask="url(#mask0_10618_73989)">
                        <path
                          fill="#F3D382"
                          fillRule="evenodd"
                          d="M24.51 9.933a2.952 2.952 0 10-.001-5.903 2.952 2.952 0 000 5.903zm0 2.53a5.482 5.482 0 100-10.963 5.482 5.482 0 000 10.963z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fill="#F3D382"
                          d="M41.7 27.745A3.298 3.298 0 0145 31.043v7.345c0 1.646-1.092 2.974-2.446 2.974a4.15 4.15 0 01-4.15-4.151v-6.168a3.298 3.298 0 013.298-3.298zM6.298 27.745A3.298 3.298 0 003 31.043v7.345c0 1.646 1.092 2.974 2.446 2.974a4.15 4.15 0 004.15-4.151v-6.168a3.298 3.298 0 00-3.298-3.298z"
                        ></path>
                        <path
                          fill="#FFE6A5"
                          d="M40.53 16.469v25.143c0 2.3-1.865 4.165-4.165 4.165h-24.73a4.165 4.165 0 01-4.165-4.165V16.47c0-5.738 4.651-10.39 10.39-10.39h12.28c5.738 0 10.39 4.652 10.39 10.39z"
                        ></path>
                        <path
                          fill="#E3972C"
                          d="M19.33 33.837l6.443-12.75v-.107h-7.506v-2.687h10.907v2.725l-6.452 12.82h-3.393z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-[#111827] text-base font-medium md:text-[#4B5563] md:text-sm">
                    Class Seven
                  </span>
                </li>
                <li
                  className="
                      flex items-center py-3 pl-1 pr-4 rounded cursor-pointer hover:bg-gray-100"
                >
                  <span className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      fill="none"
                      viewBox="0 0 48 48"
                      className="h-7 w-7"
                    >
                      <mask
                        id="mask0_10618_74012"
                        width="48"
                        height="48"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <path fill="#fff" d="M0 0H48V48H0z"></path>
                      </mask>
                      <g mask="url(#mask0_10618_74012)">
                        <path
                          fill="#82AEFB"
                          fillRule="evenodd"
                          d="M24.51 9.933a2.952 2.952 0 10-.001-5.903 2.952 2.952 0 000 5.903zm0 2.53a5.482 5.482 0 100-10.963 5.482 5.482 0 000 10.963z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fill="#82AEFB"
                          d="M41.7 28.336A3.298 3.298 0 0145 31.635v7.345c0 1.646-1.092 2.974-2.446 2.974a4.15 4.15 0 01-4.15-4.151v-6.168a3.298 3.298 0 013.298-3.299zM6.298 28.336A3.298 3.298 0 003 31.635v7.345c0 1.646 1.092 2.974 2.446 2.974a4.15 4.15 0 004.15-4.151v-6.168a3.298 3.298 0 00-3.298-3.299z"
                        ></path>
                        <path
                          fill="#ACCCFD"
                          d="M40.64 16.469v25.143c0 2.3-1.864 4.165-4.164 4.165h-24.73a4.165 4.165 0 01-4.165-4.165V16.47c0-5.738 4.652-10.39 10.39-10.39h12.28c5.738 0 10.39 4.652 10.39 10.39z"
                        ></path>
                        <path
                          fill="#2352D1"
                          d="M24.475 34.263a7.022 7.022 0 01-2.315-.403 5.27 5.27 0 01-1.988-1.282c-.587-.593-1.053-1.377-1.397-2.353-.339-.977-.508-2.176-.508-3.598.005-1.306.154-2.472.447-3.5.299-1.031.724-1.907 1.276-2.625a5.582 5.582 0 011.996-1.64c.774-.38 1.642-.569 2.603-.569 1.038 0 1.953.202 2.748.607a5.06 5.06 0 011.913 1.632c.485.688.779 1.46.88 2.315h-3.241c-.127-.541-.392-.966-.797-1.275-.405-.309-.906-.463-1.503-.463-1.012 0-1.781.44-2.307 1.32-.521.881-.787 2.078-.797 3.59h.106c.233-.46.546-.852.941-1.176.4-.329.853-.58 1.359-.751a4.902 4.902 0 011.617-.266c.92 0 1.74.218 2.459.653a4.628 4.628 0 011.7 1.776c.415.754.622 1.617.622 2.588 0 1.053-.245 1.989-.736 2.808a5.104 5.104 0 01-2.042 1.928c-.87.46-1.882.689-3.036.684zm-.015-2.581a2.565 2.565 0 002.3-1.351c.228-.415.341-.88.341-1.397 0-.516-.113-.979-.341-1.389a2.525 2.525 0 00-2.277-1.344c-.38 0-.731.072-1.055.213-.319.142-.6.34-.843.592a2.844 2.844 0 00-.766 1.936c0 .5.114.959.341 1.374.233.415.547.746.942.994.4.248.852.372 1.358.372z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span className="text-[#111827] text-base font-medium md:text-[#4B5563] md:text-sm">
                    Class Six
                  </span>
                </li>
              </ul>
            </div>
          </Link>
          <Link href="" className="text-gray-600 text-[14px] font-semibold">
            <Link href=""></Link>
            Skills
          </Link>
          <Link href="" className="text-gray-600 text-[14px] font-semibold">
            Admission
          </Link>
          <Link href="" className="text-gray-600 text-[14px] font-semibold">
            Online Batch
          </Link>
          <Link href="" className="text-gray-600 text-[14px] font-semibold">
            Enlish Center
          </Link>
          <Link href="" className="text-gray-600 text-[14px] font-semibold">
            More{" "}
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <LanguageSwitcher currentLang={currentLang} />
          <Link
            className="items-center hidden gap-1 text-green-600 md:flex"
            href="tel:16910"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              ></path>
            </svg>
            <span className="inline-block">16910</span>
          </Link>
          <Link
            className="flex items-center px-3 py-1 text-white rounded-md bg-green-600 md:px-6"
            href="/auth/login/?returnUrl=%2Fen%2Fproduct%2Fielts-course%2F"
          >
            <span
              id="login-button"
              className="leading-[18 px] whitespace-nowrap text-[12px] font-semibold leading-[24px] md:text-[16px] md:font-medium"
            >
              লগ-ইন
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
