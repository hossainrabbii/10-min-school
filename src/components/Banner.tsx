import Image from "next/image";
import React from "react";
import SkillsLanding from "./shared/SkillsLanding";

const Banner = () => {
  return (
    <div>
      <div className="w-full hidden md:block ">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfX6YBGXnY8YxNlVZOEP6Y9GVCWVo9Qe-aeCuGM_4NV5Hu30Q/viewform">
          <Image
            src="https://cdn.10minuteschool.com/images/dasktop_banner_1753270611489.png?w=1800?w=1800&h=150"
            alt=""
            width="2500"
            height="150"
          />
        </a>
      </div>
      <SkillsLanding />
    </div>
  );
};

export default Banner;
