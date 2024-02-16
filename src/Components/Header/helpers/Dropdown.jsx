/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function DropDown({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      key={item.title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative text-[20px]"
    >
      <a className="flex gap-1 items-center hover:text-[red] cursor-pointer" to={item.link}>
        {item.title}{" "}
        {item.children &&
          (isHovered ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />)}
      </a>
      {item.children && isHovered && (
        <ul
          className="absolute top-full left-0 bg-[#171C49] shadow-lg p-2 pt-5 z-50"
          style={{ minWidth: `${item.title.length * 8}px` }}
        >
          {item.children.map((childItem, index) => (
            <li key={index} className="pb-5">
              <a className="hover:text-[red]" href={childItem.link}>{childItem.title}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
