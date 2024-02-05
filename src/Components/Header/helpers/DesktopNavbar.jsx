/* eslint-disable react/prop-types */
import DropDown from "./Dropdown";

export default function DesktopNavbar({ menuOptions }) {
  return (
    <>
      <div id="intro" className="hidden lg:block w-full h-[120px] bg-[#F7F7F7]">
        <div className="max-w-[90%] mx-auto flex justify-between">
          <img
            src="https://www.bpa-bd.com/frontend/assets/images/logo.png"
            alt=""
            className="h-[80px] pt-5"
          />
          <h1 className="max-w-[450px] text-center pt-5 font-bold text-[20px]">
            THE FEDERATION OF BANGLADESH CHAMBERS OF COMMERCE & INDUSTRY
          </h1>
          <img
            src="https://fbcci.org/public/storage/upload/conf/230626102847-15065.jpeg"
            alt=""
            className="h-[80px] pt-5"
          />
        </div>
      </div>
      <div className="bg-[#171C49] text-white py-4">
        <div className="flex justify-center">
          <ul className="none lg:flex gap-5">
            {menuOptions.map((item) => (
              <DropDown key={item.title} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
