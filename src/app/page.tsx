import CourseFeature from "@/components/shared/CourseFeature";
import CourseLiad from "@/components/shared/CourseLiad";
import FreeItems from "@/components/shared/FreeItems";
import Instructor from "@/components/shared/Instructor";
import Learn from "@/components/shared/Learn";
import SkillsLanding from "../components/shared/SkillsLanding";
import Image from "next/image";
import CourseDetails from "@/components/shared/CourseDetails";
import PageDataProvider from "@/components/PageDataProvider";
import Banner from "@/components/Banner";
import StickyNav from "@/components/shared/StickyNav";
import ButtonSlider from "@/components/shared/ButtonSlider";
import { Metadata } from "next";
import Gallery from "@/components/shared/Gallery";
import Enroll from "@/components/shared/Enroll";
import VisibleEnroll from "@/components/shared/VisibleEnroll";

const HomePage = async ({
  searchParams,
}: {
  searchParams: { lang?: string };
}) => {
  const lang = searchParams.lang || "en";

  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,

    {
      cache: "no-store",
      next: {
        revalidate: 5,
      },
    }
  );
  const pageData = await res.json();

  return (
    <>
      <StickyNav currentLang={lang} />

      <PageDataProvider pageData={pageData}>
        <Banner />
        <div className=" container">
          <div className=" flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-3/5 py-5">
              <ButtonSlider />

              <div id="instructor">
                <Instructor />
              </div>
              <div id="course-liad">
                <CourseLiad />
              </div>
              <div id="learn">
                <Learn />
              </div>
              <div id="course-feature">
                <CourseFeature />
              </div>
              <div id="free-items">
                <FreeItems />
              </div>
              <div id="course-details">
                <CourseDetails />
              </div>
            </div>
            <div className="w-full md:w-2/5 ">
              {/* <Gallery /> */}
              <div className="top-[100px] sticky">
                <VisibleEnroll />
              </div>
            </div>
          </div>
        </div>
      </PageDataProvider>
    </>
  );
};

export default HomePage;
