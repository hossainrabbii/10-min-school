import Image from "next/image";

const CourseLiad = () => {
  return (
    <div className="container">
      <h4 className="my-5 text-xl font-semibold leading-[30px] text-black">
        How the course is laid out
      </h4>
      <div className="bg-[#111827] w-full rounded-md p-4 mb-16">
        <div className="grid grid-cols-2 gap-12">
          <div className="flex gap-2">
            <div className="max-w-[30px] h-[30px]">
              <Image
                alt=""
                loading="lazy"
                width="100"
                src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png"
                height="100"
              />
            </div>
            <div className="">
              <h6 className="text-white mb-2">৫০+ ভিডিও লেকচার</h6>

              <p className="text-gray-400  text-[14px]">
                IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের
                ধরন নিয়ে in-depth আলোচনা
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="max-w-[30px] h-[30px]">
              <Image
                alt=""
                loading="lazy"
                width="100"
                src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_1684919669537.png"
                height="100"
              />
            </div>
            <div className="">
              <h6 className="text-white mb-2">৩৮টি লেকচার শিট</h6>

              <p className="text-gray-400 text-[14px]">
                Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর
                করার স্ট্র্যাটেজি এবং 600+ Vocabulary
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="max-w-[30px] h-[30px]">
              <Image
                alt=""
                loading="lazy"
                width="100"
                src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604652_1684919731714.png"
                height="100"
              />
            </div>
            <div className="">
              <h6 className="text-white mb-2">রিডিং এন্ড লিসিনিং মক টেস্ট</h6>

              <p className="text-gray-400  text-[14px]">
                10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="max-w-[30px] h-[30px]">
              <Image
                alt=""
                loading="lazy"
                width="100"
                src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_%281%29_1684919813933.png"
                height="100"
              />
            </div>
            <div className="">
              <h6 className="text-white mb-2">ডাউট সল্ভিং লাইভ ক্লাস</h6>

              <p className="text-gray-400 text-[14px]">
                সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর
                সুযোগ
              </p>
            </div>
          </div>
        </div>
      </div>
    

      <div className="bg-[url('https://cdn.10minuteschool.com/images/Free_class_card_BG_1722414654287.png')] bg-cover rounded-md p-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
          <div className="max-w-[300px] ">
            <Image
              alt=""
              loading="lazy"
              width="200"
              src="https://cdn.10minuteschool.com/images/catalog/product/pointer/467478234_1276985680016189_8175110495169425888_n_1732621183218.png"
              height="100"
            />
            <h2 className="text-[24px] font-semibold  my-4">
              IELTS Confirm 7+ Score (Guideline)
            </h2>
            <h6 className="">
              IELTS ভালো score করার সেরা Strategies জানুন সেরাদের গাইডলাইনে ।
            </h6>
            <button className="mt-6 bg-green-500 py-2 px-6 rounded-md border-b-4 border-green-700 hover:bg-green-700">
              ফ্রি PDF Download করুন
            </button>
          </div>

          <div className="">
            <div className="max-w-[300px] mt-12">
              <Image
                alt=""
                loading="lazy"
                width="270"
                src="https://cdn.10minuteschool.com/images/catalog/product/pointer/Thumbnail_for_IELTS_Course_by_MS_1732621023962.jpg"
                height="100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLiad;
