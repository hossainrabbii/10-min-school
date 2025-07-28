"use client";
import { usePageData } from "@/app/context/PageDataContext";
import Image from "next/image";

const FreeItems = () => {
  const pageData = usePageData();
  const section = pageData?.data?.sections?.find(
    (s: any) => s.type === "free_items"
  );

  return (
    <div>
      <div className="container">
        <div id="free_items">
          <div className="mb-14">
            <h2 className="my-5 text-xl font-bold leading-[30px] text-black">
              {section.name}
            </h2>
            <div className="bg-[url('https://cdn.10minuteschool.com/images/banner_background_1731401239364.png')] bg-cover rounded-md p-4 mb-16 flex justify-between text-white px-12">
              <div className="">
                <h5 className="font-bold mb-2">ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)</h5>
                <ul className="list-disc  space-y-2 ml-4">
                  <li>360 পৃষ্ঠা</li>
                  <li>প্রিমিয়াম হার্ডকপি</li>
                  <li>ফ্রি ডেলিভারি</li>
                  <li>৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি</li>
                </ul>
              </div>
              <div className="">
                <Image
                  width="100"
                  height="100"
                  alt="ikmage"
                  src="https://cdn.10minuteschool.com/images/catalog/media/Book_Image_1731924602665.png?w=120&h=150"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeItems;
