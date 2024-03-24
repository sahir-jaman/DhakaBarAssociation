// import React from 'react'

function Search_notice() {
  return (
    <div>
      {/* Search Member  */}
      <div className="bg-[#ECECEB]">
        <h1 className="text-[22px]">Search Member</h1>
        <form action="">
          <div className="Field pb-2">
            <label className="mr-12">Name </label>
            <input className="border border-[gray] px-3 pb-1" name="name" />
          </div>
          <div className="Field pb-2">
            <label className="mr-[14px]">Member ID</label>
            <input className="border border-[gray] px-3 pb-1" name="name" />
          </div>
          <div className="Field pb-2">
            <label className="mr-12">Phone</label>
            <input className="border border-[gray] px-3 pb-1" name="name" />
          </div>
          <button action="" className="border border-red-500 px-2 rounded-sm">
            Search
          </button>
        </form>
      </div>

      {/* Notice Part  */}
      <div className="bg-[#ECECEB]">
        <h1 className="mt-10 mb-4 text-[22px]">Notice</h1>
        <div>
          <div className="flex mb-4">
            <div className="w-[200px] h-[80px] border-[gray] rounded-md overflow-hidden">
              <img
                className="w-full h-full object-fit"
                src="https://dhakabarassociation.com/assets/NoticePhoto/IMG_20240319094300.jpg"
                alt="pic"
              />
            </div>
            <p className="ml-1 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, laudantium.
            </p>
          </div>
          <div className="h-[1px] w-full bg-black"></div>
          <div className="flex my-3">
            <div className="w-[200px] h-[80px] border-[gray] rounded-md overflow-hidden">
              <img
                className="w-full h-full object-fit"
                src="https://dhakabarassociation.com/assets/NoticePhoto/PressRelease_20231029185621.jpg"
                alt="pic"
              />
            </div>
            <p className="ml-1 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, laudantium.
            </p>
          </div>
          <div className="h-[1px] w-full bg-black"></div>
          <div className="flex my-3">
            <div className="w-[200px] h-[80px] border-[gray] rounded-md overflow-hidden">
              <img
                className="w-full h-full object-fit"
                src="https://dhakabarassociation.com/assets/NoticePhoto/IMG_20230904150028.jpg"
                alt="pic"
              />
            </div>
            <p className="ml-1 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, laudantium.
            </p>
          </div>
          <div className="h-[1px] w-full bg-black"></div>
        </div>
      </div>
    </div>
  );
}

export default Search_notice;
